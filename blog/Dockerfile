FROM ubuntu:24.04
RUN apt-get update && apt-get install -y curl jq && rm -rf /var/lib/apt/lists/*
WORKDIR /blog
COPY . .
RUN chmod +x publish.sh
CMD ["./publish.sh"]
