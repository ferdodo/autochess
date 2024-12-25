FROM autochess-database
RUN rm /docker-entrypoint-initdb.d/init.sh
COPY init.sh /init.sh
CMD /init.sh
