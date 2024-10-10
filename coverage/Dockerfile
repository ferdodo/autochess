FROM autochess-core
RUN npx stryker run

FROM nginx
COPY --from=0 /autochess/core/reports/mutation /usr/share/nginx/html
COPY ./index.html /usr/share/nginx/html/index.html