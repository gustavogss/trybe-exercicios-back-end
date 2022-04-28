# Banco de Dados SQL 

- SELECT - Seleciona dados em uma consulta

- DISTINCT - Remove dados duplicados em uma consulta - 

- COUNT - Conta dados em uma consulta

- ORDER BY - Ordena dados em uma consulta

- AS - Renomea colunas em uma consulta

-- Obs. Caso o nome tenha mais de uma palavra, devemos usar aspas simples para nomear as colunas.

- LIMIT - Limita a quantidade de resultados em uma consulta

- OFFSET - Pula resultados em uma consulta

- Querys - são comandos para interagir com o Banco de Dados:

1. DDL - são aqueles comandos que lidam com o esquema, a descrição e o modo como os dados devem existir em um banco de dados:

- CREATE : Para criar bancos de dados, tabelas, índices, views, procedures, functions e triggers

- ALTER : Para alterar a estrutura de qualquer objeto

- DROP : Permite deletar objetos, deletar a tabela

- TRUNCATE : Apenas esvazia os dados dentro de uma tabela, mas a mantém no banco de dados

2. DML - são os comandos usados para manipular dados. São utilizados para armazenar, modificar, buscar e excluir dados:

- SELECT : usado para buscar dados em um banco de dados

- INSERT : insere dados em uma tabela

- UPDATE : altera dados dentro de uma tabela

- DELETE : exclui dados de uma tabela

3. DCL - são aqueles comandos de controle, que concedem direitos, permissões ao banco de dados:

- GRANT : concede acesso a um usuário

- REVOKE : remove acessos concedidos através do comando GRANT

4. TCL - Lida com as transações dentro de suas pesquisas:

- COMMIT : muda suas alterações de temporárias para permanentes no seu banco de dados

- ROLLBACK : desfaz todo o impacto realizado por um comando

- SAVEPOINT : define pontos para os quais uma transação pode voltar. É uma maneira de voltar para pontos específicos de sua query

- TRANSACTION : comandos que definem onde, como e em que escopo suas transações são executadas.

## ESTRUTURA 

`SELECT * FROM NomeBanco.NomeTabela;`

`SELECT * FROM sakila.city; - Lista todas as cidades da tabela sakila`

`SELECT city FROM sakila.city; - Lista todas as cidades que tem na coluna city`

`SELECT city, country_id FROM sakila.city; - Lista todas as cidades e ids dos países`

- USE - usar o banco de dados sakila, define antes do SELECT.
  
```
USE sakila; 
SELECT * FROM city; 
```

- Quando usar o USER ele já define o banco e não precisa colocar o nome do banco novamene.

## COMANDOS

1. CONCAT - Serve para juntar duas colunas

`SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;`

Nesse exemplo, ele junta as duas colunas com um espaço entre os nomes, e ainda no cabeçalho da coluna coloca o Nome Completo.

2. DISTINCT - Remove dados duplicados em uma consulta.

`SELECT DISTINCT first_name, last_name FROM sakila.actor;`

3. COUNT - serve para contar a quantidade de dados em uma tabela:

`SELECT COUNT(*) FROM sakila.actor;` 

- Listar a quantidade de atores na tabela sakila

`SELECT COUNT(DISTINCT first_name) FROM sakila.actor;`
 
 - Listar a quantidade de atores na tabela sakila com o primeiro nome que não seja repetido
 
 4. LIMIT - serve para limitar o resultado de uma consulta.

`SELECT * FROM sakila.rental LIMIT 10;`

- A consulta a tabela rental irá mostrar um limite de 10 linhas.

5. OFFSET - serve para pular um certo limite de linhas na consulta.

`SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;`

- A consulta ao banco sakila na tabela rental irá mostrar uma lista de 10 linhas a partir da 4 linha, porque a consula está pulando 3 linhas.

6. ORDER BY  - para ordenar dados:
   
```
SELECT * FROM sakila.address
ORDER BY district ASC, address DESC;
```
- primeiro ordena por ordem ascendente a coluna district e depois por ordem descendente a coluna adress 
  
```
ASC - Ordem Ascendente (Do menor para o maior)
DESC - Ordem Descendente (Do maior para o menor)
```







