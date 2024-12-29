FROM postgres
COPY key-gen.sh /key-gen.sh
RUN /key-gen.sh
COPY init.sh /docker-entrypoint-initdb.d/init.sh
COPY init.sql /docker-entrypoint-initdb.d/init.sql
COPY entrypoint.sh /entrypoint.sh
CMD /entrypoint.sh
