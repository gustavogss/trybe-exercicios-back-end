# MANIPULAÇÃO DE STRINGS :robot:

1. Converte o texto da string para CAIXA :
`SELECT UCASE('Oi, eu sou uma string');`

2. Converte o texto da string para caixa baixa:
`SELECT LCASE('Oi, eu sou uma string');`

3. Substitui as ocorrências de uma substring em uma string:
`SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');`

4. Retorna a parte da esquerda de uma string de acordo com o  número de caracteres especificado:
`SELECT LEFT('Oi, eu sou uma string', 3);`

5. Retorna a parte da direita de uma string de acordo com o número de caracteres especificado:
`SELECT RIGHT('Oi, eu sou um string', 6);`

`SELECT RIGHT('Oi, eu sou um string', -6);` 
- Ele irá fazer no sentido inverso a partir da esquerda

6. Exibe o tamanho, em caracteres, da string, a função LENGTH retorna o tamanho em bytes
`SELECT CHAR_LENGTH('Oi, eu sou uma string');`

7. Extrai parte de uma string de acordo com o índice de um caractere inicial e a quantidade de caracteres a extrair:
`SELECT SUBSTRING('Oi, eu sou uma string', 5, 2);`

`SELECT SUBSTRING('string', posicao, quantidade_de_caracteres);`

8. Se a quantidade de caracteres a extrair não for definida, então a string será extraída do índice inicial definido, até o seu final:
`SELECT SUBSTRING('Oi, eu sou uma string', 5);`

Strings no SQL são indexadas a partir do indice 1 e não do indice 0.

## Condições em SQL 

1. Assim como nas linguagens de programação usamos condicionais no SQL usamos da 
seguinte forma:

- Sintaxe:
`SELECT IF(condicao, valor_se_verdadeiro, valor_se_falso);`

```
SELECT IF(idade >= 18, 'Maior de idade', 'Menor de Idade')
FROM pessoas;
```

```
SELECT IF(aberto, 'Entrada permitida', 'Entrada não permitida')
FROM estabelecimentos;
```
```
SELECT first_name, IF(active, 'Cliente Ativo', 'Cliente Inativo') AS status
FROM sakila.customer
LIMIT 20;
```

2. Para mais de uma condição usamos o CASE:

```
SELECT CASE
  WHEN condicao THEN valor
  ELSE valor padrao
END;
```
```
SELECT
    nome,
    nivel_acesso,
    CASE
        WHEN nivel_acesso = 1 THEN 'Nível de acesso 1'
        WHEN nivel_acesso = 2 THEN 'Nível de acesso 2'
        WHEN nivel_acesso = 3 THEN 'Nível de acesso 3'
        ELSE 'Usuário sem acesso'
    END AS nivel_acesso
FROM permissoes_usuario;
```
- Exemplo utilizando a tabela sakila.film:
```
SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;
```
## FUNÇÕES MATEMÁTICAS 

`SELECT 5 + 5;`
`SELECT 5 - 5;`
`SELECT 5 * 5;`
`SELECT 5 / 5;`

`SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;`
`SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;`
`SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;`
`SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;`

1. DIV  - retorna o resultado inteiro de uma divisão, ignorando as casas decimais
de um número, mostra o valor inteiro:

`SELECT 10 DIV 3;` -- 3
`SELECT 10 DIV 2;` -- 5
`SELECT 14 DIV 3;` -- 4
`SELECT 13 DIV 2;` -- 6

2. MOD - retorna o resto de uma divisão como resultado:

`SELECT 10 MOD 3;` -- 1
`SELECT 10 MOD 2;` -- 0
`SELECT 14 MOD 3;` -- 2
`SELECT 13 MOD 2;` -- 1
`SELECT 10.5 MOD 2;` -- 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5

3. ROUND - arredonda um valor para cima se for maior que 0.5, e para baixo se for menor que 0.5:

`SELECT ROUND(10.4925);` -- 10
`SELECT ROUND(10.5136); `-- 11
`SELECT ROUND(-10.5136);` -- -11
`SELECT ROUND(10.4925, 2);` -- 10.49 (pega duas casas depois da vírgula)
`SELECT ROUND(10.4925, 3);` -- 10.493 (pega três casas depois da vírgula)

4. CELL - sempre arredonda valores para cima:

`SELECT CEIL(10.51);` -- 11
`SELECT CEIL(10.49);` -- 11
`SELECT CEIL(10.2);` -- 11

5. FLOOR - sempre arredonda valores para baixo:

`SELECT FLOOR(10.51);` -- 10
`SELECT FLOOR(10.49);`-- 10
`SELECT FLOOR(10.2);` -- 10

6. POW - serve para potenciação:

`SELECT POW(2, 2);` -- 4
`SELECT POW(2, 4);` -- 16

7. SQRT - serve para calcular a raiz quadrada de um número:

`SELECT SQRT(9);` -- 3
`SELECT SQRT(16);` -- 4

8.  RAND - para gerar valores aleatórios:

- Para gerar um valor aleatório entre 0 e 1: 0 zero fica incluso, e 1 não.
`SELECT RAND();`

- Para gerar um valor entre 7 e 13:
`SELECT ROUND(7 + (RAND() * 6));` gera um valor aleatório arredondado 

- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))


## Trabalhando com Datas :calendar:

1. CURENT_DATE - serve para calcular a data atual:

`SELECT CURRENT_DATE();` YYYY-MM-DD

2. NOW - -serve para calcular a data atual no momento com as horas, minutos e segundos quando
foi feito a consulta.

`SELECT NOW();`  YYYY-MM-DD HH:MM:SS

`SELECT YEAR(CURRENT_DATE());`  retorna o ano atual

`SELECT HOUR(NOW());`  retorna a hora atual

3. DATEDIFF - serve para calcular a diferença de datas, sempre a última data vem primeiro na 
diferença:

- 30, ou seja, a primeira data é 30 dias depois da segunda
`SELECT DATEDIFF('2020-01-31', '2020-01-01');`

- -30, ou seja, a primeira data é 30 dias antes da segunda
`SELECT DATEDIFF('2020-01-01', '2020-01-31');`

4. TIMEDIFF - serve para calcular a diferença de tempo ou datas também junto com o tempo:
- -01:00:00, ou seja, há 1 hora de diferença entre os horários
`SELECT TIMEDIFF('08:30:10', '09:30:10');`

- -239:00:00, ou seja, há uma diferença de 239 horas entre as datas
`SELECT TIMEDIFF('2021-08-11 08:30:10', '2021-08-01 09:30:10');`

## Variaveis no SQL 

@variavel - @age 

- Para seta variáveis
`SET @age = 25`

## FUNÇÕES DE AGREGAÇÃO

- AVG , MIN , MAX , SUM e COUNT:

`SELECT AVG(replacement_cost) FROM sakila.film;` 19.984000 (Média entre todos registros)
`SELECT MIN(replacement_cost) FROM sakila.film;` 9.99 (Menor valor encontrado da coluna)
`SELECT MAX(replacement_cost) FROM sakila.film;` 29.99 (Maior valor encontrado)
`SELECT SUM(replacement_cost) FROM sakila.film;`  19984.00 (Soma de todos registros)
`SELECT COUNT(replacement_cost) FROM sakila.film;`  1000 registros encontrados (Quantidade)

## FILTRANDO E AGRUPANDO 

1. GROUP BY - serve para agrupar colunas:
```
SELECT coluna(s) FROM tabela
GROUP BY coluna(s);
```
```
SELECT first_name FROM sakila.actor
GROUP BY first_name; 
```
-Retorna todos os atores com primeiro nome. Caso haja atores com
nomes iguais, ele não retornará dados duplicados.

```
SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;
```

- Retorna quantos registros existem na tabela de cada nome registrado

- Média de duração de filmes agrupados por classificação indicativa
  
```
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;
```

- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
  
```
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;
```

- Valor máximo de substituição dos filmes agrupados por classificação indicativa
```
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;
```
- Custo total de substituição de filmes agrupados por classificação indicativa
```
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;
```

2. HAVING - serve para para filtrar resultados agrupados, assim como usamos o 
`SELECT...WHERE` para filtrar resultados individuais.

- A query a seguir busca o nome e a quantidade de nomes cadastrados na tabela sakila.actor e os agrupa por quantidade. Por fim, filtramos os resultados agrupados usando o HAVING , para que somente os nomes que estão cadastrados mais de duas vezes sejam exibidos.
```
SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;
```
```
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;
```
- o alias não funciona com strings para o HAVING, então use o underline 
("_") para separar palavras, ou seja, o exemplo abaixo não vai funcionar:

```
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;
```
