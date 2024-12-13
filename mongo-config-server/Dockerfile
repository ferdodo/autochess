FROM mongo
RUN mkdir -p /etc/mongodb/pki
RUN openssl rand -base64 756 > /etc/mongodb/pki/keyfile && chmod 400 /etc/mongodb/pki/keyfile
COPY ./entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]