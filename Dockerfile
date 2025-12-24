# Use Hugo Extended image as base (latest version)
FROM klakegg/hugo:ext-alpine AS base

# Install Node.js and npm
# This layer will be cached unless Alpine packages change
RUN --mount=type=cache,target=/var/cache/apk \
    apk update && \
    apk add --no-cache nodejs npm

# Verify Hugo version supports PostCSS
RUN hugo version

WORKDIR /src

# Expose Hugo server port
EXPOSE 1313

# Default command: run Hugo server
CMD ["hugo", "server", "--bind", "0.0.0.0", "--port", "1313", "--baseURL", "http://localhost:1313", "--buildDrafts", "--buildFuture", "--disableFastRender"]

