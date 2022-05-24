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
-- Pesquisando agora, você verá que a informação duplicada não foi inserida.
- Porém os dados corretos foram inseridos com sucesso.

```
SELECT * FROM pessoas;
```

