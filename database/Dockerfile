FROM citusdata/citus
COPY key-gen.sh /key-gen.sh
RUN /key-gen.sh
COPY init.sh /docker-entrypoint-initdb.d/init.sh