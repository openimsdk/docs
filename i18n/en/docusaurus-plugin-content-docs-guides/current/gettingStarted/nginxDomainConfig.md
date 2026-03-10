---
title: 'Domain & SSL Configuration'
sidebar_position: 7
---

# Domain & SSL Certificate Configuration

## 1. Prerequisites 🛠️

- **IMServer** is successfully running.
- **Nginx** is installed with the SSL module enabled.
- A domain (or subdomain) and SSL certificate have been obtained, e.g., `im.yourhost.com` for IMServer.
- Port 443 is open.

## 2. Domain Configuration Template 📝

> 🚀 **Tip**: Make sure to replace with your actual domain name, SSL certificate path, and SSL key.

```nginx

upstream msg_gateway{
    #IM Message server address Multiple can be specified according to the deployment
    server 127.0.0.1:10001;
}
upstream im_api{
    #IM Group user api server address Multiple can be specified according to the deployment
    server 127.0.0.1:10002;
}

upstream minio_s3_2{
    #Minio address can be assigned to multiple modules depending on deployment
    server 127.0.0.1:10005;
}


server {
    listen       443; #Listening on port 443
    server_name  im.yourhost.com;  #Your domain
    ssl on;
    #Path of pem file for ssl certificate
    ssl_certificate /usr/local/nginx/conf/ssh/im.yourhost.com_bundle.pem;
    #Key file path of ssl certificate
    ssl_certificate_key /usr/local/nginx/conf/ssh/im.yourhost.com.key;

    gzip on;
    gzip_min_length 1k;
    gzip_buffers 4 16k;
    gzip_comp_level 2;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png application/wasm;
    gzip_vary off;
    gzip_disable "MSIE [1-6]\.";

    default_type application/wasm;


    location /msg_gateway{
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header X-real-ip $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass http://msg_gateway/;
    }

    location ^~/api/{
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header X-real-ip $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header X-Request-Api $scheme://$host/api;
        proxy_pass http://im_api/;
    }



    location ^~/im-minio-api/ {
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_connect_timeout 300;

        proxy_http_version 1.1;
        proxy_set_header Connection "";
        chunked_transfer_encoding off;
        proxy_pass http://minio_s3_2/;
    }



}



```

## 3. MinIO Configuration 🗄️

- **Source code deployment**: Edit the `externalAddress` value in `config/minio.yml` to `"https://im.yourhost.com/im-minio-api"`.
- **Docker deployment**: Edit the `MINIO_EXTERNAL_ADDRESS` value in the `.env` file to `"https://im.yourhost.com/im-minio-api"`.

## 4. Start Nginx 🚀

Run `nginx -s reload` to reload the Nginx configuration.


## 5. Update Client SDK Initialization Parameters

In the client SDK, configure the initialization parameters as follows:

- `apiAddr`: `https://im.yourhost.com/api`
- `wsAddr`: `wss://im.yourhost.com/msg_gateway`
