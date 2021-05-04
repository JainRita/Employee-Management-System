FROM java:8-jdk-alpine
COPY ./target/employee-search-service.jar /usr/app/
WORKDIR /usr/app
RUN sh -c 'touch employee-search-service.jar'
ENTRYPOINT ["java","-jar","employee-search-service.jar","-web -webAllowOthers -tcp -tcpAllowOthers -browser"]
