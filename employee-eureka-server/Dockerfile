FROM java:8-jdk-alpine
COPY ./target/eureka-server.jar /usr/app/
WORKDIR /usr/app
RUN sh -c 'touch eureka-server.jar'
ENTRYPOINT ["java","-jar","eureka-server.jar"]