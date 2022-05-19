# Introdução ao Banco de Dados :robot:

1. Dados - são fatos brutos que não tem valor.

2. Informações são dados com algum valor.

3. Banco de dados é uma coleção de dados que se relacionam entre si, possuem valores para as organizações.

4. SGBD - é o sistema gerenciador de Banco de Dados, no mercado temos o SQL, MySQL, Postgres, MariaDB, DB2, PLSQL, entre outros.

5. No SGBD os dados são armazenados a partir de 04 modelos: 
- hierárquico;
- em rede;
- relacional;
- orientado a objetos.

6. Os principais banco de dados: são os relacionais baseado em tabelas e os não relacionais baseado em coleções.


## SQL ( Structured Query Language ):

1. SQL ( Structured Query Language ) é a linguagem mais usada para criar, pesquisar, extrair e também manipular dados dentro de um banco de dados relacional. 
   
2. Seus comandos são subdivididos em 04 grupos:
- DML – Data Manipulation Language: comandos que alteram informações nas tabelas, seja para inserir ou excluir dados: SELECT, DELETE e INSERT;

- DDL – Data Definition Language: são comandos que modificam o banco de dados: DROP – apaga algum objeto e CREATE – permite a criação de novos objetos;

- DCL – Data Control Language: é o grupo responsável pelas permissões, restrições ou bloqueios: GRANT – permite o acesso e/ou modificações no banco de dados e REVOKE - retira as permissões;

- DTL – Linguagem de Transição de Dados: é responsável por salvar as alterações feitas pelos usuários: COMMIT – autoriza que as alterações sejam salvas.

3. Além disso temos o ALTER, WHERE, ORDER BY, GROUP, LIKE, JOIN, INNER JOIN, RIGTH JOIN, LEFT JOIN, e outros.

4. No SQL podemos retringir como os dados podem ou não ser manipulados em suas tabelas por meio das constraints que são regras e restrinções, na criação  CREATE, ou na alteração ALTER.

5. As principais constraints utilizadas no SQL são:

- NOT NULL - Garante que aquele campo não pode conter valores nulos, ou seja, se não houver um valor padrão (DEFAULT) definido, será sempre necessário passar um valor para esse campo durante a inserção ou alteração de dados.

- UNIQUE - Garante que o valor inserido na coluna da tabela é único, isto é, não pode haver outro valor igual para esta coluna registrado nesta tabela.

- PRIMARY KEY - Garante que o valor seja a chave primária da tabela, ou seja, que a coluna que possui essa constraint aplicada seja o identificador único da tabela. Ela também é, por definição, não nula (tem o mesmo efeito da constraint NOT NULL) e única (mesmo efeito da constraint UNIQUE).

- FOREIGN KEY - Garante que o valor seja uma chave estrangeira da tabela, ou seja, faça referência à chave primária (valor em uma coluna com a constraint PRIMARY KEY) de outra tabela, permitindo um relacionamento entre tabelas.

- DEFAULT - Garante que, caso nenhum valor seja inserido na coluna (ou caso a pessoa usuária insira um valor nulo), a constraint colocará o valor padrão passado para ela.

## Instalando e Configurando o MySQL 8 no Ubuntu de forma correta:

1. Antes de qualquer instalação é importante atualizar pacotes do seu Ubuntu executando o comando:   
   `sudo apt update`

2. Depois instale o pacote do Servidor MySQL, com o comando: 
`sudo apt install mysql-server`

3. Os pacotes serão baixados, e ai você vai confirmando com Y e teclando ENTER, até o download terminar.

4 . Para nos certificar de que o serviço do MySQL foi instalado digite o seguinte comando:
```
service mysql status
```
- Possa ser que no inicio o console mostre que o serviço do MySQL esteja parado, mas não se preocupe logo iremos ativar ele.

5. Para verificar a versão do seu MySQL, use o comando:
```
mysql --version
```

### Iniciando a configuração do MySQL em nossa máquina Ubuntu:

1. Para iniciarmos a configuração precisamos estar como super usuário. Então para isso use o comando:
```
sudo su -
```

2. Para iniciar o serviço do MySQL use o comando:
```
service mysql start
```

3. Para iniciar a configuração do MySQL 8, use o comando:
```
mysql_secure_installation
```
- A primeira configuração que será solicitada é se deseja usar o componente de validação de senhas seguras do MySQL. Basicamente é verificada a força da senha e até mesmo pode exigir senhas mais seguras ao criar qualquer usuário no MySQL. Usar ou não é uma decisão sua e não irá afetar a instalação do MySQL que é a proposta desse artigo. Eu escolhi a opção de não usar, com o objetivo de escolher uma senha fácil mais na frente.

4. Próximo passo, ele pedirá para você definir a senha do usuário root do MySQL. Não é a senha do seu o usuário root do Ubuntu. Eu escolhi uma senha fácil de 8 caracteres, 12345678, já que optei por uma segurança baixa.

- Criada e confirmada a senha informe se deseja remover o acesso de usuários anônimos. (Escolhi remover ou Y)
- Depois ele pergunta se deseja desabilitar o login do usuário root do MySQL remotamente. (Escolhi não N)
- Agora é questionado se deseja remover o banco de dados test que vem por padrão. (Escolhi Y)
- Por fim ele pergunta se deseja remover o banco de dados test que vem por padrão. (Escolhi sim Y)

5. Pronto, Agora podemos tentar efetuar a conexão do nosso usuário root no MySQL 8!. Digite o comando:
```
mysql -u root -p
```

6. Depois dê um ENTER e será solicitado a senha, digite a senha que você criou para o MySQL e tecle ENTER:

- Pronto você estará dentro de seu ambiente do MySQL no linux configurado.

7. Ai mesmo, vamos criar um banco de dados para testar. Para isso digite o comando:
```
CREATE DATABASE bancoteste;
```
- Não esqueça da vírgula no final do comando

8. Para visualizar se nosso banco foi criado com sucesso, basta digitar:
```
SHOW DATABASES;
```
- Olhe a vírgula é obrigatória no final de cada comando SQL

9. Podemos ver graficamente se nosso banco foi criado com sucesso por meio da plataforma Workbench SQL, bastando criar uma nova conexão, digitando o nosso usuário padrão do mysql que é o root e senha do MySQL que você criou.

- O Workbench pode ser instalado por meio desse endereço, https://www.mysql.com/products/workbench/. Ou na própria Central de Software do Ubuntu.

### Poxa!, Esqueci a senha do meu MySQL, e agora?

- Não se preocupe, isso é normal de acontecer, mas tem solução para isso:

1. Antes de tudo, é necessário parar o serviço do MySQL, então abra outro terminal e digite o comando:
```
service mysqld stop
```
ou

```
killall mysqld
```

2. Após desligar o processo MySQL, inicie o MySQL no modo seguro e ignore as configurações de privilégios com o comando:
```
mysqld_safe--skip-grant-tables&
```

3. Acesse o MySQL através do terminal:
```
mysql
```

4. Acesse o banco de dados MYSQL, que faz o controle de usuários:
```
use mysql;
```

5. Altere a senha do usuário através do terminal (Neste caso conectado como usuário root):
```
UPDATE user SET Password=PASSWORD('minhanovasenha') WHERE User='root';
```

6. Renivele os privilégios dos usuários:
```
FLUSH PRIVILEGES;
```

7. Para sair do seu ambiente do MySQL no terminal, use o comando:
```
quit
```

8. Desligue e reinicie o processo do MySQL:
```
service mysqld restart
```

9. Caso essas informações ainda estão meio abstratas, e você não conseguiu resolver o seu problema. Dê uma olhadinha lá no meu blog, eu tenho um post mais ilustrativo mostrando todo passo a passo, além de sugestões de algumas outras fontes confiáveis:

[Intalando o MySQL no Linux](https://gustavosouza.dev.br/instalando-configurando-mysql-8-no-ubuntu/)



