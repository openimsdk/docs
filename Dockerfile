ARG NEXT_PUBLIC_SITE_URL=https://docs.openim.io
ARG DEPLOYMENT_VERSION=development

FROM node:22.16-alpine AS base

ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH

RUN corepack enable
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile --ignore-scripts

FROM deps AS builder
ARG NEXT_PUBLIC_SITE_URL
ARG DEPLOYMENT_VERSION

ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV DEPLOYMENT_VERSION=$DEPLOYMENT_VERSION

COPY . .
RUN pnpm source:generate
RUN pnpm build

FROM node:22.16-alpine AS runner
WORKDIR /app

ARG DEPLOYMENT_VERSION

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
ENV APP_REVISION=$DEPLOYMENT_VERSION

LABEL org.opencontainers.image.source="https://github.com/openimsdk/docs"
LABEL org.opencontainers.image.revision=$DEPLOYMENT_VERSION

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD ["node", "-e", "fetch('http://127.0.0.1:3000/api/health').then((response) => { if (!response.ok) process.exit(1); }).catch(() => process.exit(1));"]

CMD ["node", "server.js"]
