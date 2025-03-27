
FROM node:lts AS build
WORKDIR /app

# Enable corepack, make pnpm avalibale
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
COPY project.inlang/settings.json ./project.inlang/settings.json
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080