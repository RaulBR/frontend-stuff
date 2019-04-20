
FROM nginx

RUN apt-get update && apt-get install -y \
    openssl\
    vim

COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/emp-app /etc/nginx/html

ENV SERVER_NAME=employee-mnanage.local 
    # FRONT_CERT_LOCATION='/etc/front/cert/'\
    # CERT=selv.crt\
    # CERT_KEY=self.key\
    # DHPARAM=dhparam.pem

EXPOSE 80 443
# WORKDIR /etc/nginx/ssl
VOLUME /etc/front/cert
# CMD /bin/bash -c ""
