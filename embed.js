
(function() {
    const button = document.createElement('div');
    button.innerHTML = "Ask";
    button.style.position = "fixed";
    button.style.right = "20px";
    button.style.bottom = "20px";
    button.style.zIndex = "9999";
    button.style.width = "50px";
    button.style.height = "50px";
    button.style.borderRadius = "50%";
    button.style.backgroundColor = "#262626";
    button.style.color = "white";
    button.style.display = "flex";
    button.style.justifyContent = "center";
    button.style.alignItems = "center";
    button.style.boxShadow = "rgba(0, 0, 0, 0.2) 0px 4px 8px 0px";
    button.style.cursor = "pointer";

    const iframe = document.createElement('iframe');
    iframe.src = "https://knowledge.rentsoft.cn";
    // iframe.src = "http://localhost:5177";
    iframe.style.position = "fixed";
    iframe.style.display = "none";
    iframe.style.zIndex = "10000";
    iframe.style.borderRadius="10px";
    iframe.style.boxShadow="rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px";

    button.onclick = function() {
        const isMinWidth = window.matchMedia("(max-width: 768px)").matches;
        const isHidden = iframe.style.display === "none"
        if(isHidden){
            iframe.contentWindow.postMessage('openIframe', '*');
        }
        iframe.style.display = isHidden ? "block" : "none";
        if(isMinWidth && isHidden) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        }
    };

    window.addEventListener('message', function(event) {
        if (event.data === 'closeIframe') {
            iframe.style.display = "none";
            const isMinWidth = window.matchMedia("(max-width: 768px)").matches;
            if(isMinWidth) {
                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';
            }
        }
    });

    window.onload = () => {
        document.body.appendChild(button);
        document.body.appendChild(iframe);
    }

    function adjustIframeStyleForSmallScreens() {
        if(window.matchMedia("(max-width: 768px)").matches) {
            iframe.style.width = window.innerWidth + "px";
            iframe.style.height = window.innerHeight + "px";
            // iframe.style.width = "100%";
            // iframe.style.height = "100%";
            iframe.style.right = "0";
            iframe.style.bottom = "0";
            iframe.style.left = "0";
            iframe.style.top = "0";
        } else {
            // 大屏幕设备
            iframe.style.width = "320px";
            iframe.style.height = "60vh";
            iframe.style.right = "20px";
            iframe.style.bottom = "80px";
            iframe.style.left = "unset";
            iframe.style.top = "unset";
        }
    }

    window.addEventListener('resize', adjustIframeStyleForSmallScreens);

    adjustIframeStyleForSmallScreens();
})();

