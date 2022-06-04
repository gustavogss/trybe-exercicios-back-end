# MANIPULAÇÃO E CRIAÇÃO DE IMAGENS NO DOCKER :rocket:

1. Para listar todas as imagens que foram baixadas:

`docker images`

2. Formato das imagens que foram baixadas:
   
```
REPOSITORY     TAG       IMAGE ID       CREATED        SIZE
hello-world    latest    bc11b176a293   6 weeks ago    9.14kB
```

- A partir de uma imagem, podemos ter vários containers.

3. Para remover uma imagem:

`docker rmi -f bc11b176a293`

- Ao excluir uma imagen, os containers dela não serão removidos, ficarão orfãos. 
- Se quisermos executaálos novamente, teremos que baixar uma nova imagem para ser a referência deles.

4. Para baixar uma imagem, sem criar nenhum container:

`docker pull <imagem>` 

- Cada download baixado da imagem representa uma camada ou layer, o Docker usa esse processo para que as camadas sejam reaproveitadas por outras imagens e não precisem ser instaladas em duplicidade.   
- Cada camada possui um hash.

5. A distribuição Linux Alpine é muito utilizada em imagens do Docker por ser uma distribuição leve e que possui somente o essencial para seu funcionamento. Por isso muitos softwares utilizam a tag alpine. Como é o caso da imagem node:alpine.

6. Para persistir alterações no container, mesmo que seja reinicializado:   
```
docker run --name meu_container -it ubuntu
#echo "Teste container" > ola_mundo.txt
cat ola_mundo.txt
exit
```
```
docker start -ai meu_container
cat ola_mundo.txt
exit
```

### MAPEAMENTO DE PORTAS :door:

1. Baixando a imagem do servidor http: (O -P serve para que o Docker faça um mapeamento de portas automático para acesso ao container. Portas aleatórias)

`docker run -d -P httpd:2.4`

`docker container ls`

```
CONTAINER ID   IMAGE   COMMAND   CREATED      STATUS    PORTS                         NAMES
f9f61da552b9   httpd:2.4   "httpd-foreground"   4 minutes ago   Up 4 minutes   0.0.0.0:55000->80/tcp, :::55000->80/tcp   brave_maxwell
```

2. Dando nome ao container:

`docker run -d -P --name site-trybe httpd:2.4`

3. Para interromper a execução do site-trybe:

`docker stop site-trybe`

4. Para interromper a execução do site-trybe imediatamente:

`docker stop -t=0 site-trybe`

5. Colocando o container ativo novamente:

`docker start site-trybe`

6. Para linkar uma porta interna com uma porta do computador(Bindar portas):

```
docker run -d -p <PORTA-SO-HOSPEDEIRO>:<PORTA-SO-CONVIDADO>
docker run -d -p 54321:80 httpd:2.4
```

- Aqui a porta 54321 é do nosso computador à porta 80 é a do container. Para acessar o site-trybe, http://localhost:54321. 
- O -p serve para especificarmos a porta que queremos para linkar o container a nossa aplicação.
- Já o -P cria uma porta aleatória
- O -d roda em modo background, para que o terminal não trave

### DOCKERFILE - COMANDOS BÁSICOS 

1. Para criarmos uma imagem de um container, podemos partir do arquivo Dockerfile, o qual contém a descrição passo a passo do que se espera acontecer.

- O arquivo Dockerfile tem que ser criado dentro da pasta de sua aplicação-> touch Dockerfile

2. Dentro do Dockerfile, para criar uma nova imagem que rodará sob um ubuntu, utilizamos o FROM:
```
FROM ubuntu:latest
```
- Não é recomendável usar a tag latest, porque ela é sempre atualizada, geralmente usamos de uma versão específica. A tag slim ou alpine, é muito utilizada por serem mais leves, pois possuem versões minimalisticas do SO.
```
FROM node:14-alpine AS build
```
- build serve para fazer o deploy da imagem

3. Para definir um "diretório de trabalho", que será utilizado como base para a execução dos comandos, utilizamos o WORKDIR:

```
WORKDIR /diretorio/que/sera/utilizado
...
WORKDIR /app # Definimos o workdir
```

4. Utilizamos o COPY para copiar diretórios e arquivos para a imagem, pois precisamos do código fonte para rodá-lo:
   
```
COPY ["<ARQUIVO_1>","<ARQUIVO_2>",...,"<ARQUIVO_X>", "<PASTA-DESTINO>"]
COPY ["./app", "/usr/src/app"]
```

5. O nosso Dockfile dentro da nossa aplicação está ficando assim:
   
```
# FROM node:14-alpine AS build
# WORKDIR /app
COPY package*.json ./
```

6. O RUN serve para prepararmos a imagem para rodar o app. Ele executa a lista de comandos durante a criação da imagem.
```
RUN ["<COMANDO>", "<SUBCOMANDO>", "<PARAMETRO-1>", ... , "<PARAMETRO-N>"]
```

```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
RUN npm install
```

7. Compo usamos o npm install em nosso DockerFile na aplicação é necessário criarmos o .dockerignore, e lá colocarmos o node_modules para ele não ser copiado.

```
touch .dockerignore
node_modules
```

8. Assim que o node_modules estiver no .dockerignore para não ser copiado, podemos definir a cópia de todos os arquivos apenas com o comando COPY...

```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
COPY . .
```

9. É importante adicionar um comando para executar o processo de build * da nossa aplicação, no Dockerfile, RUN npm run build:

```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
RUN npm run build
```

10. Podemos dividir o script do Dockerfile em mais de uma parte, dessa vez utilizando um outro servidor web o nginx:

```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
```

11. Podemos definir a porta que será utilizada na aplicação dentro do container, com o EXPOSE:

```
EXPOSE <PORTA-DO-APP-NO-CONTAINER>
EXPOSE 3000

# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:1.16.0-alpine AS prod
# COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
```

12. Para atribuir uma porta do nosso sistema hospedeiro ( host ) a porta do sistema convidado ( guest ), usamos o -p:
   
```
docker container run \
   -p <PORTA-HOST>:<PORTA-GUEST> \
   <IMAGEM>:<TAG>
   
   docker container run \
   -p 3000:80 \
   --rm \
   -dit \
   yeasy/simple-web:latest
   
```

13. O CMD sempre é executado quando o container é iniciado, dentro de um Dockerfile podemos ter vários CMD, e o último é que terá efeito:

```
CMD ["/bin/echo", "Hello World"]
CMD npm start
```
```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build
```

```
# FROM nginx:1.16.0-alpine AS prod
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]   
```

14. O ENTRYPOINT também serve para executarmos containers, diferentemente do CMD, ele não sobrescreve o anterior:
```
ENTRYPOINT ["/bin/echo", "Hello World"]
```
- Obs. Podemos utilizar o ENTRYPOINT, junto com o CMD. Mas ele mudará o comportamento do CMD, que servira como base para o comando definido pelo entrypoint.

15. O Dockfile de nossa aplicação React ficou assim:
    
```
ENTRYPOINT [ "/bin/echo" ]
CMD [ "Hello World" ]
```

```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build
```

```
# FROM nginx:1.16.0-alpine AS prod
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
```

### GERANDO UMA IMAGEM A PARTIR DO DOCKERFILE

1. Para consolidar as alterações que foram feitas no Dockerfile de nossa aplicação:

```
docker image build -t <name:tag> <origem_docker_file>
docker image build -t react-dockerized:v1 .
```

2. Para ver a aplicação rodando, podemos rodar o mini-projeto no terminal interativo, definindo qual porta do nosso localhost será atribuida para qual porta do container : 
```
docker run -dit -p 8000:80 --name reactdockerized react-dockerized:v1
```

### DOCKERFILE COMANDOS ADICIONAIS :robot:

1. LABEL - Para organizar as imagens, registrar informações de licenças, anotar relacionamentos entre containers e outras informações que façam sentido ao objetivo do container ou da aplicaçãe. As informações são registradas seguindo o parâmetro de "chave e valor", e caso uma chave esteja repetida, a última sobrescreverá as anteriores:
- 
```
LABEL <KEY>=<VALUE>
LABEL maintener="Gustavo Souza <gustavogss.dev@gmail.com>"
```

- Esse valor pode ser resgatado posteriormente através do comando:

```
 docker inspect <CONTAINER ID || NAMES> 
 
 "Labels": {
   "maintener": "Gustavo Souza <gustavogss.dev@gmail.com>"
}
```

2. ENV - Serve para definir variáveis de ambiente no Dockerfile:

```
ENV <ENV NAME> <ENV VALUE>
ENV NODE_ENV production
```

- Ao rodar nossos containers, também podemos passar variáveis, basta utilizar a tag --env ou -e :
  
```
docker container run \
   --env myCat=fluffy \
   --env myName=johnDoe \
   <IMAGE NAME>
```   
   
- Essas sobrescreverão as definidas no Dockerfile caso possuam o mesmo nome.

3. USER - Serve para definir qual o usuário que irá iniciar o app no container, caso não seja definido o usuário, o Docker utilizará o root como padrão:

```
FROM ubuntu:8
RUN mkdir /app
RUN groupadd -r node-user && useradd -r -s /bin/false -g node-user node-user
WORKDIR /app
COPY . /app
RUN chown -R node-user:node-user /app
USER node-user
CMD node index.js
```

- Normalmente as imagens já possuem um usuário criado para a execução de nossos apps .
Por exemplo nas imagens node , já possuem um usuário genérico chamado "node" com os privilégios necessários, e para usá-lo, basta adicionarmos o usuário ao diretório de nosso projeto e utilizarmos a tag user :

```
FROM node:10-alpine
COPY . /app
RUN chown -R node:node /app
USER node
CMD [“node”, “index.js”]

```

- O Docker possui um cache de memória, que mantém armazenados, camadas de imagens após seu processo de build. E alguma alteração feita no Dockerfile, apenas aquela modificação que será buildada.  



