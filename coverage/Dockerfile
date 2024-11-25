FROM autochess-core
COPY .git /autochess/.git
RUN ./run_coverage.sh
RUN mkdir -p /autochess/core/reports/mutation

FROM nginx
COPY --from=0 /autochess/core/reports/mutation /usr/share/nginx/html
COPY coverage/index.html /usr/share/nginx/html/index.html