# Docker / Docker compose hands on

## Description

Application contains two node servers, webApp1 & webApp2.
* webApp2 publish a json object upon GET requests
* webApp1 contacts webApp2 upon GET requests and return the response content

Both application are dockerized. They're declared as services in a docker-compose file. They're part of the same private network.