FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY app.js ./
COPY bin ./bin
COPY lib ./lib
COPY public ./public
COPY views ./views

# Assemble a minimal root filesystem: only the node binary, the shared
# libraries it links against and the app. No shell, no package manager, no npm.
RUN mkdir -p /rootfs/lib /rootfs/usr/lib /rootfs/usr/local/bin \
    && cp /usr/local/bin/node /rootfs/usr/local/bin/node \
    && cp /lib/ld-musl-*.so.1 /rootfs/lib/ \
    && cp -P /lib/libc.musl-*.so.1 /rootfs/lib/ \
    && cp /usr/lib/libstdc++.so.6 /usr/lib/libgcc_s.so.1 /rootfs/usr/lib/ \
    && cp -r /app /rootfs/app


FROM scratch

COPY --from=build /rootfs /

WORKDIR /app

ENV NODE_ENV=production

# Unprivileged numeric user, there is no /etc/passwd in this image
USER 65532:65532

EXPOSE 3000

CMD ["/usr/local/bin/node", "bin/www"]
