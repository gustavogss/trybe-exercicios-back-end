##  Redes Docker :computer:

1. Verificando redes existentes no docker: 
   
   `docker network ls`

2. Contactando containers 

```
docker container run -ti --name container1 busybox
docker container run -ti --link container1 --name container2 busybox
```

- dentro do container2: dê um ping no container1

3. Para conectarmos um container já criado, basta utilizarmos o parâmetro connect :

`docker network connect minha-rede meu-container`

3. E para desconectá-lo, basta utilizar o parâmetro disconnect :

`docker network disconnect minha-rede meu-container`

4. Criando nossa rede docker bridge:
     
```
docker network create --driver bridge rede-local
docker network ls
```

5. Criando uma imagem ubuntu modificada para ter um comando ping:

`docker container run -itd --name novo_container mjgargani/ubuntu-ping`

6. Adicionar o novo_container na rede-local:

`docker network connect rede-local novo_container`

7. Criando container e já diretamente especificando qual rede ele irá usar:

`docker container run -it --name outro_container --network rede-local mjgargani/ubuntu-ping`

8. Para conectar outro_container ao novo container, basta dentro do outro_container:

`ping novo_container`

9. Volumes: são formas para persistir dados em containers mesmo que sejam removidos(-v)
  
```
docker run -d --name site-trybe2 -p 8881:80 -v "/home/gustavosouza/Workspace/TRYBE/trybe-exercicios/back-end/bloco-19-docker/trybe/meu-site:/usr/local/apache2/htdocs/" httpd:2.4
```

10.  Removendo volumes:

```
docker volume rm <VOLUME NAME>
docker volume prune
```

11.  Para detalhes da imagem ou container usamos o inspect:

`docker inspect (id da imagem ou container)`

```
"Mounts": [
   {
      "Type": "bind",
      "Source": "/home/trybe/meu-site",
      "Destination": "/usr/local/apache2/htdocs",
      "Mode": "",
      "RW": true,
      "Propagation": "rprivate"
   }
]
```

- "Mounts" mostra através do Source onde está o volume do container em nosso Docker Host.

12. Para especificar os volumes da nossa imagem no nosso Dockerfile:

`VOLUME ["/data"]`


## Docker Compose :robot:


1. Instalação do Docker Compose:
   
   ```
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

`sudo chmod +x /usr/local/bin/docker-compose`

`docker-compose --version`

2. Estrutura do arquivo docker-compose.yaml:
   
```
version: "<VERSÃO-DO-COMPOSE>"
services: # Definição dos containers
  <MEU-CONTAINER-1>:
    image: <MINHA-IMAGEM:VERSÃO> # Exemplo carregando uma imagem já _buildada_
    # ... outras configurações
  <MEU-CONTAINER-2>:
    build: <CAMINHO-DO-DOCKERFILE> # Exemplo gerando uma build a partir de um `Dockerfile`
    # ... outras configurações
  <MEU-CONTAINER-N>:
    image: <MINHA-IMAGEM:VERSÃO>
    # ... outras configurações
```   
```
version: '3'
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
  database:
    image: mjgargani/compose-example:database-trybe1.0
```
    
 3. Restart possui 4 valores: 
 
 #### no - Este é o valor padrão assumido pelo Docker e define que o container não irá restartar automaticamente;
 
#### on-failure - Define que o container será reiniciado caso ocorra alguma falha, apontado pelo exit code diferente de zero;

#### always - Especifica que sempre que o serviço parar, seja por um falha ou porque ele finalizou sua execução, ele irá ser reiniciado; *

#### unless-stopped - Define que o container sempre seja reiniciado, a menos que o Docker em si seja parado (manualmente ou não). No caso de ser interrompido, ele não reinicia nem depois que o daemon do Docker * seja reiniciado.   

- O daemon do Docker é um processo contínuo, que roda em segundo plano e que gerencia os containers Docker em um host.

4. No contexto de Docker, secret é um dado que não deve ser transmitido por uma rede ou armazenado sem criptografia em um Dockerfile ou no código fonte de sua aplicação, como uma senha ou uma chave privada SSH, por exemplo.

5. Depends On - Para definirmos as prioridades e dependências entre os serviços :
   
```
version: "3.8"
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
    ports:
      - 3000:3000
    depends_on:
      - "backend"
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
    restart: always
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
    depends_on:
      - "database"
  database:
    image: mjgargani/compose-example:database-trybe1.0
    restart: always
  ```  
    
 - Obs. Aqui o database será iniciado antes do backend , que será startado antes do frontend .   
    
6.  Comando up - Serve executar todos os containers especificados, baixando as imagens do repositório, criando volumes ou buildando localmente a partir do Dockerfile:

`docker-compose up`

7. Para rebuildar a imagem do service alterado para que as atualizações sejam aplicadas ao ambiente:

`docker-compose up --build <SERVICE NAME>`

  #### Down - Para parar os services, as redes aqui serão removidas. Mas tudo pode ser criado a partir do comando up:

`docker-compose down`

- docker-compose ps x docker-compose ls - Ambos mostram a lista de containers ativos. A diferença é que o ps lista os containers pertencentes ao arquivo do Compose.

8. Podemos parar um certo service com o comando stop:

`docker-compose stop <SERVICE NAME>`

`docker-compose stop backend`

9. Para iniciar o serviço parado usamos o:

`docker-compose start <SERVICE NAME>`

10. Logs - Para ver os logs do service em um container. Utilizando a flag -f ou --follow  para acompanhar em tempo real as saídas dos containers e o --tail para definir o número de linhas que será exibido no final dos logs:

`docker-compose logs -f --tail=100 <SERVICE NAME>`


## Volumes com docker-compose 

1. Para utilizar volumes no arquivo docker-compose.yaml :

```
version: "3.8"
services:
  web:
    image: nginx:alpine
    volumes:
      - type: volume
        source: mydata
        target: /data
        volume:
          nocopy: true
      - type: bind
        source: ./static
        target: /opt/app/static

  db:
    image: postgres:latest
    volumes:
      - "/var/run/postgres/postgres.sock:/var/run/postgres/postgres.sock"
      - "dbdata:/var/lib/postgresql/data"

volumes:
  mydata:
  dbdata:
``` 
  
2. Podemos definir as redes para um serviço especifico no arquivo docker-compose.yaml:
   
```
version: "<VERSÃO-DO-COMPOSE>"
services:
  <MEU-CONTAINER-1>:
    image: <MINHA-IMAGEM:VERSÃO>
    networks:
      - <NETWORK-1>
    # ... outras configurações
  <MEU-CONTAINER-2>:
    build: <CAMINHO-DO-DOCKERFILE>
    networks:
      - <NETWORK-1>
      - <NETWORK-1>
    # ... outras configurações
  <MEU-CONTAINER-N>:
    image: <MINHA-IMAGEM:VERSÃO>
    # ... outras configurações

networks:
  <NETWORK-1>:
```  
  
3. Para isolarmos alguns serviços, por exemplo: apenas o back-end acessando o banco de dados e o front-end os back-end:

```
version: '3'

services:
  frontend-a:
    build: ./frontend_a
    networks:
      - frontend

  backend-a:
    build: ./backend_a
    networks:
      - backend
      - frontend

  backend-b:
    build: ./backend_b
    networks:
      - backend
      - frontend

  db:
    image: mysql
    networks:
      - backend

networks:
  frontend:
  backend:
 ``` 
  
4. Rodando um site em Wordpress e MySql:

- Criando o arquivo docker-compose.yaml:
  
```
version: '3'
services:
  db:
    image: mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: wordpress
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress

  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    ports:
    - "8000:80"
    restart: always
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wordpress      
      WORDPRESS_DB_PASSWORD: wordpress
volumes:
  db_data:
  ```
  
- Em seguida dá o comando para baixar as imagens, e fazer a orquestração de nossos containers dentro do arquivo docker-compose.yaml :

`docker-compose up`

- Depois que tudo terminar é só acessar o localhost na porta 8000 para ter acesso ao ambiente do wordpress:

`http://localhost:8000/`
