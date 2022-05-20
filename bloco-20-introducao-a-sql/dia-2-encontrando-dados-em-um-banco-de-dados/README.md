# Banco de Dados SQL - Encontrar dados em um BD

- Query - são todos os comandos para manipular o banco de dados. Principais tipos queries:

  1. DDL: São todos os comandos que lidam com o esquema, a descrição e o modo como os dados devem existir em um banco de dados:
  
- CREATE: Para criar bancos de dados, tabelas, índices, views, procedures, functions e triggers;
- ALTER: Para alterar a estrutura de qualquer objeto;
- DROP: Permite deletar objetos;
- TRUNCATE: Apenas esvazia os dados dentro de uma tabela, mas a mantém no banco de dados.

2. DML: São os comandos usados para manipular dados. São utilizados para armazenar, modificar, buscar e excluir dados em um banco de dados:

- SELECT: Usado para buscar dados em um banco de dados;
- INSERT: Insere dados em uma tabela;
- UPDATE: Altera dados dentro de uma tabela;
- DELETE: Exclui dados de uma tabela.

3. DCL: é mais focado nos comandos que dão direitos, permissões e outros tipos de controle ao sistema de banco de dados:

- GRANT: Concede acesso a um usuário;
- REVOKE: Remove acessos concedidos através do comando GRANT.

4. TCL: Lida com as transações dentro de suas pesquisas:

- COMMIT: Muda suas alterações de temporárias para permanentes no seu banco de dados;
- ROLLBACK: Desfaz todo o impacto realizado por um comando;
- SAVEPOINT: Define pontos para os quais uma transação pode voltar. É uma maneira de voltar para pontos específicos de sua query;
- TRANSACTION: Comandos que definem onde, como e em que escopo suas transações são executadas.

### Comando SELECT

1. SELECT serve para selecionar e gerar valores:

```
SELECT 'Olá, bem-vindo ao SQL!';
SELECT 10;
SELECT now(); //data atual
SELECT 20 * 2; //40
SELECT 50 / 2; //25
SELECT 18 AS idade; //idade=18
SELECT 2019 AS ano;
SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor Web';
SELECT 'Rafael' AS nome, 'Martins' AS sobrenome, 25 AS idade, 'Desenvolvedor Web' AS 'Área de atuação';
```
- AS server para dá nomes as suas colunas da tabela

