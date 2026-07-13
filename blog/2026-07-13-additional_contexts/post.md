📦 Docker Compose tip: use `additional_contexts` to declare build dependencies!

In compose.yml, `additional_contexts` lets you reference built images from other services in your Dockerfile. You declare that service B needs files from service A, and Docker makes A's filesystem available to B's build via `COPY --from=`.

Docker handles the build order automatically — it builds A first, then B. We used this in Autochess instead of dev.sh that was orchestrating the entire build order.