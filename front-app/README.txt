node: v10.4.0

openssl req -x509 -config openssl.cfg -days 1000 -nodes -newkey rsa:2048 -keyout E:\programare\nginx-1.15.10\ssl\self.key -out E:\programare\nginx-1.15.10\ssl\self.crt
nginx-1.15.10