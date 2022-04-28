## Baixar a imagem do debian do DockerHub utilizando a tag: stable-slim

`docker pull debian:stable-slim`

 ## Criar e executar um container de modo interativo, referenciando a tag: stable-slim

`docker container create -it debian:stable-slim`

  - CONTAINER ID gerado: 7eb36382b47f7e0fef9c1e155f1455217c1da2bd6c9bcbd006b3b0c38eac0a54

## Iniciando o container 

`docker container start 7eb36382b47f7e0fef9c1e155f1455217c1da2bd6c9bcbd006b3b0c38eac0a54`

## Iniciar o container e entra no root
 
 `docker container run -it debian:stable-slim`
 
## Mostrar as caracteristicas do debian que está rodando no container
 
 `#cat /etc/*-release`
 
`PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
NAME="Debian GNU/Linux"
VERSION_ID="11"
VERSION="11 (bullseye)"
VERSION_CODENAME=bullseye
ID=debian
HOME_URL="https://www.debian.org/"
SUPPORT_URL="https://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/`

## Encerrar o terminal: 

`exit`

## Verificar a lista do último container criado:

`docker container -l` 

## Inicie o mesmo container novamente , sem criar outro. Valide se ele está ativo na lista de containers:

`docker container ls -a`

`CONTAINER ID   IMAGE                COMMAND   CREATED         STATUS                          PORTS     NAMES
b26f86850fed   debian:stable-slim   "bash"    6 minutes ago   Exited (0) About a minute ago             ecstatic_hoover`

## Iniciar o container e retomar

`docker start b2
docker attach b2`

## Verificar versão: 

`#cat /etc/debian_version`

- 11.2

`exit`

## Remover o container criado:

`docker container rm b2`

## Crie e rode de modo interativo em modo 'Cleanup' , a imagem andrius/ascii-patrol:

`docker run -it --rm andrius/ascii-patrol`

## Encerre o container:

`exit`

`Cltr+C`


