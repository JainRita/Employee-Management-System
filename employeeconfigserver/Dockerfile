FROM java:8-jdk-alpine
COPY ./target/config-server.jar /usr/app/
WORKDIR /usr/app 
RUN sh -c 'touch config-server.jar'
ENTRYPOINT ["java","-jar","config-server.jar"]
