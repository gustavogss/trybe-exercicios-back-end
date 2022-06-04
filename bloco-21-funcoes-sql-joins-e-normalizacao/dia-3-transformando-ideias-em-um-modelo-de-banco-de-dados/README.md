# TRANSFORMANDO IDEIAS EM BANCO DE DADOS 🥇

### DATABASE DESIGN - COMO MODELAR UM BANCO DE DADOS:

1. Identificar as entidades, atributos e relacionamentos com base na descrição do problema: Por exemplo, a entidade álbum possui os atributos título e preço e se relaciona com a entidade artista;

2. Construir um diagrama entidade-relacionamento para representar as entidades encontradas no passo 1: O diagrama serve como um guia para que você possa visualizar as entidades (tabelas) que irão se relacionar.

3. Criar um banco de dados para conter suas tabela: Após analisar e criar um diagrama de como o seu banco de dados vai ser estruturado, você pode dar início a criação dele.

4. Criar e relacionar tabelas tendo o diagrama do passo 2 como base: Após criar seu banco de dados, você pode começar a criar e relacionar as tabelas de acordo com o diagrama.

### DEFINIÇÕES:

1. Entidades: São uma representação de algo do mundo real dentro do banco de dados. Elas normalmente englobam toda uma ideia e são armazenadas em formato de tabelas em um banco de dados:

2. Atributos: são tudo aquilo que pode ser usado para descrever algo:

3. Relacionamentos ou Cardinalidade - 1:1, 1:M, M:N

### CRIANDO BANCO DE DADOS:

1. Cria um banco de dados com o nome especificado:
```
CREATE DATABASE nome_do_banco_de_dados;
```
- Sinônimo de CREATE DATABASE, também cria um banco de dados:
```
CREATE SCHEMA nome_do_banco_de_dados;
```

2. Verifica se o banco de dados ainda não existe.Essa verificação é comumente utilizada junto ao CREATE DATABASE para evitar a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro:
```
IF NOT EXISTS nome_do_banco_de_dados;
```

3. Lista todos os bancos de dados existentes:
```
SHOW DATABASES;
```
4. Define o banco de dados ativo para uso no momento.

USE nome_do_banco_de_dados;

### NORMALIZAÇÃO:

1ª Forma Normal:todos os atributos de uma tabela devem ser atômicos, ou seja, a tabela não deve conter grupos repetidos e nem atributos com mais de um valor.

- Colunas devem possuir apenas um valor
- Valores em uma coluna devem ser do mesmo tipo de dados
- Cada coluna deve possuir um nome único
- A ordem dos dados registrados em uma tabela não deve afetar a integridade dos dados

- TELEFONE como é um atributo multivalorado.

2ª Forma Normal: primeiro é preciso estar na 1FN. Além disso, todos os atributos não chaves da tabela devem depender unicamente da chave primária (não podendo depender apenas de parte dela). Para deixar na segunda forma normal, é preciso identificar as colunas que não são funcionalmente dependentes da chave primária da tabela e, em seguida, remover essa coluna da tabela principal e criar uma nova tabela com esses dados. 
 
- A tabela deve estar na 1ª Forma Normal
- A tabela não deve possuir dependências parciais.
 
3ª Forma Normal: para estar na 3FN, é preciso estar na 2FN. Além disso, os atributos não chave de uma tabela devem ser mutuamente independentes e dependentes unicamente e exclusivamente da chave primária (um atributo B é funcionalmente dependente de A se, e somente se, para cada valor de A só existe um valor de B). Para atingir essa forma normal, é preciso identificar as colunas que são funcionalmente dependentes das outras colunas não chave e extraí-las para outra tabela. 

- A tabela deve estar na 1ª e 2ª Formas Normais;
- A tabela não deve conter atributos (colunas) que não sejam dependentes exclusivamente da PK (chave primária).

