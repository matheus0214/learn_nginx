## Simple application with use Nginx with proxy

<br />

### Steps:

- Create Network docker
  - docker network create --driver bridge nodenet
- Build Node application
  - Enter in folder **/node**
  - Execute: **docker build -t name_image(1) .**
  - Execute app: **docker run --rm --name app --network nodenet name_image(1)**
- Build Nginx:
  - Enter in folder **/nginx**
  - Execute: **docker build -t name_image(2) .**
  - Execute ngix: **docker run --rm --network nodenet -p 80:80 name_image(2)**
<br />
<br />
### Access you localhost