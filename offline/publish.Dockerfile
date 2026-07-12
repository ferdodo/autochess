FROM node:23
COPY --from=autochess-offline /autochess/offline/dist /offline-dist
COPY offline/publish-codeberg-pages.sh /usr/local/bin/publish.sh
RUN chmod +x /usr/local/bin/publish.sh
ENTRYPOINT ["/bin/bash", "/usr/local/bin/publish.sh"]
