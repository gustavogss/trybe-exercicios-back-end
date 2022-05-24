# Manipulação de Tabelas 🚀

1. INSERT - para inserir dados em uma tabela
2. UPDATE - para atualizar dados em uma tabela
3. DELETE - para deletar dados em uma tabela

- DELETE - apaga dados de uma tabela, enquanto que o DROP apaga toda a tabela.

## Informação importante sobre os tipos de aspas

1. Backticks ou crase ( `` ) : São usadas para identificar nome de tabelas e colunas . São necessárias apenas quando o identificador for uma palavra reservada do MySQL , ou quando o nome da tabela ou coluna contiver espaços em branco.

2. Aspas simples ( '' ) : Devem ser usadas em valores do tipo string . Elas são aceitas na maioria dos SGBDs. Sendo assim, é mais preferível usar aspas simples em véz das aspas duplas.

### INSERT

1. A sintaxe para inserir dados em uma tabela é:

```
INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES ('valor_coluna1', 'valor_coluna2');
```

1.1. Para inserir várias linhas de uma vez:

```
INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
('valor_1','valor_2'),
('valor_3','valor_4'),
('valor_5','valor_6');
```
1.2. INSERT IGNORE - serve para ignorarmos erros durante a inserção:

```
INSERT IGNORE INTO pessoas (id, name) VALUES
(4,'Gloria'), -- Sem o IGNORE, essa linha geraria um erro e o INSERT não continuaria.
(5,'Amanda');
```
- Pesquisando agora, você verá que a informação duplicada não foi inserida.
- Porém os dados corretos foram inseridos com sucesso.

```
SELECT * FROM pessoas;
```
1.2.1 - AUTO-INCREMENT - é uma funcionalidade que todos os bancos de dados possuem. Ela permite que valores sejam inseridos automaticamente.

1.2.2 - INSERT INTO SELECT - para inserir dados de uma outra tabela

```
    INSERT INTO tabelaA (coluna1, coluna2)
    SELECT tabelaB.coluna1, tabelaB.coluna2
    FROM tabelaB
    WHERE tabelaB.nome_da_coluna <> 'algumValor'
    ORDER BY tabelaB.coluna_de_ordenacao;
```
- Aqui estamos extraindo a coluna1 e a coluna2 da tabelaB e as inserindo na tabelaA, de acordo com a condição que for passada no WHERE.

- Nessa situação a tabelaA e a tabelaB devem possuir a mesma quantidade de colunas, e os tipos de dados das colunas iguais.

- Com essa funcionalidade, é fácil criar tabelas temporárias para testes. Por exemplo, para trazer os dados da tabela sakila.staff para a tabela sakila.actor, poderíamos fazer:

```
  INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name FROM sakila.staff;  
```


