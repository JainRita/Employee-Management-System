FROM java:8-jdk-alpine
COPY ./target/zuul-proxy.jar /usr/app/
WORKDIR /usr/app
RUN sh -c 'touch zuul-proxy.jar'
ENTRYPOINT ["java","-jar","zuul-proxy.jar"]
