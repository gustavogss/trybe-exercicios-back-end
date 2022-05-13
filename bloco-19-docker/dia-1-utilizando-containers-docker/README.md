# Instalando o Docker Corretamente :rocket:

1. Siga os passos primeiramente removendo todas as versões anteriores, se houver:
  
```
sudo apt-get remove docker* containerd runc
sudo apt-get update
sudo apt-get upgrade
```

1. Habilitando HTTPS para o apt:
    - A documentação oficial recomenda que os pacotes sejam instalados pelo apt-get:
  
```
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release    
```
    
1. Adicione uma chave de acesso ao repositório remoto:  

`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg`

4. Adicionando o repositório oficial com versões estáveis do Docker:

```
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
  | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  ```
  
 # Instalando Docker Engine 

1. Instalando a última versão estável do Docker Engine - Commmunity:

```
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```
2. Adicione um usuário ao grupo de usuários docker como root:

```
sudo groupadd docker
sudo usermod -aG docker $USER
```
3 - Realizando login e logout de sua sessão:

newgrp docker

4. Para desistalar o Docker Engine por algum motivo:

```
sudo apt-get purge docker-ce docker-ce-cli containerd.io
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```

## Iniciando o Daemon do Docker

1. Consultar status do daemon:

`sudo systemctl status docker`

2. Ativando o status do daemon, se ele estiver inativo:

`sudo systemctl start docker`

3. Habilitar o daemon do docker para iniciar durante o boot de sua máquina:

`sudo systemctl enable docker`

## Validando a instalação :runner:

1. Verificar versão do docker:

`docker --version`

2. Baixe a imagem hello-word:

`docker run hello-world`

- Obs. O docker procura no seu computador essa imagem primeiramente, caso não encontre baixa lá do DockerHub, cria o container e executa.

## Containers 

1. Formato dos comandos Docker: (Se a tag não for passada, ela assumi a última versão latest)

```
docker container run <nome-da-imagem>:<tag>
docker container run hello-world
```

- Obs. O container aqui foi criado, iniciado e encerrado, pois não demos nenhuma instrução para ele

2. Listar todos os containers ativos:

`docker container ls`

3. Listar os containers ativos e inativos:

`docker container ls -a`

4. Listar o último container criado:

`docker container ls -l`

5. Formato de porta de acesso para aplicação no Docker:

`<porta-do-host>:<porta-do-cliente>
8080:3000`

6. Para executar comandos antes que o container seja encerrado e manter ele ativo por mais tempo:

```
docker container run <nome-da-imagem>:<tag> <comando> <argumentos-do-comando>
docker container run ubuntu echo 'Hello Tryber!'
```

7. Para ter acesso ao terminal de forma interativa dentro do container: (Criar e entrar no container em modo root)

```
docker container run -ti ubuntu
#cat /etc/lsb-release (Retorna os dados da distribuição da imagem ubuntu)
```

8. Para dar nome ao container:
`docker container run --name <nome-da-sua-escolha> <imagem>:<tag>`

9. Para o criar o container e ser removido no final, utilizamos o modo clean-up (-rm):
`docker container run --rm <imagem>:<tag>`

10. Para rodar o container em modo background, assíncrono, em segundo plano:
`docker container run -d <imagem>:<tag>`

11. Para manterá o container ativo em segundo plano, já com um terminal disponível para acesso:
`docker container run -dit ubuntu`

12. Para criar um container sem executá-lo:
`docker container create <parâmetros> <imagem>:<tag>`

13. Para criar um container sem executá-lo de forma interativa com terminal de acesso root:
`docker container create -it <imagem>:<tag>`

### Iniciar, reiniciar, pausar, resumir e parar um container

1. Para iniciar um container que já foi criado e estava inativo:
`docker container start <CONTAINER ID || NAMES>`

2 - Para reiniciar o container:
`docker container restart <CONTAINER ID || NAMES>`

3 - Pausar e Desapusar um container:
```
docker container pause <CONTAINER ID || NAMES>
docker container unpause <CONTAINER ID || NAMES>
```
4 - Encerrar um container:
`docker container stop <CONTAINER ID || NAMES>`

5 - Para retomar o acesso a um container interativo rodando em segundo plano, ou seja, caso tenha iniciado um container em segundo plano utilizando -dit:
`docker container attach <CONTAINER ID || NAMES>`

6. Para excluir containers especificos inativos:
`docker container rm <CONTAINER ID || NAMES>`

7. Para excluir containers especificos ativos:
`docker container rm -f <CONTAINER ID || NAMES>`

8. Para excluir todos os containers inativos:
`docker container prune`

9. Para monitorar os processos dentro de um container:
`docker container top <CONTAINER ID || NAMES>`

10. Parar todos os containers ativos:
`docker stop $(docker ps -aq)`

11. Excluir todos os containers ativos:
`docker rm $(docker ps -aq)`

12. Para limpar o docker:
 `docker system prune -a`

13. Para logs no docker:
`docker logs <hash_ou_nome>`

14. Para monitorar os logs no docker:
`docker logs -f <hash_ou_nome>`

15. No Docker, é possível executar comandos de terminal no contêiner antes que ele seja encerrado, principalmente se quisermos mantê-lo ativo por mais tempo:
`docker container run <nome-da-imagem>:<tag> <comando> <argumentos-do-comando>` 

16. Se quisermos utilizar um terminal dentro do contêiner? É só passar o parâmetro -ti⁸ ao comando run que dá acesso a esse terminal:
`docker container run -ti ubuntu` 
- -t indica pro Docker que estamos requisitando um terminal no contêiner que consiga imprimir o retorno dos nossos comandos;
- -i estabelece uma interface de comunicação física com esse terminal.

Dessa forma é possível ter acesso ao terminal de forma interativa dentro do contêiner. 

O start apenas inicia o contêiner que já havia sido criado (mas estava inativo), enquanto o run cria e executa um novo container!

17. O comando top traz as informações sobre os processos que estão sendo rodados dentro contêiner. 
`docker container top <CONTAINER ID || NAMES>`

18. Para estressar o container e mostrar a lista de processos temos:
`docker run -dit ubuntu dd if=/dev/zero of=/dev/null `