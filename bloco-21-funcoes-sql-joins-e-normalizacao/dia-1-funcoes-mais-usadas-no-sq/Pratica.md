

```
SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;
```
- Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
- Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.
- Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer'.
- Extraia e retorne apenas a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas'.
- Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.

```
SELECT UCASE('trybe');
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');
SELECT CHAR_LENGTH('Uma frase qualquer');
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
```

```
SELECT film_id, title, IF ('ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') 
AS 'conheço o filme?'
FROM sakila.film
```

```
SELECT title, rating, 
CASE 
	  WHEN rating = 'G' THEN 'Livre para todos'
    WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
    WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
    WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
    ELSE 'Proibido para menores de idade'
END AS 'público-alvo'
FROM sakila.film;
```

```
SELECT IF(15 MOD 2 = 0, 'PAR', 'IMPAR');
SELECT 220 DIV 12;
SELECT 220 - 18 * 12; --4
```
```
SELECT (15 + RAND() * 20);
SELECT ROUND(15 + RAND() * 20);
SELECT ROUND(15.7515971, 5);
SELECT FLOOR(39.494) AS 'media_para_baixo';
SELECT CEIL(85.234) AS 'media_para_cima'
```

```
SELECT DATEDIFF('2030-01-20', '2022-02-01'); -- 2910
SELECT TIMEDIFF('10:25:45', '11:00:00'); --00:34:15
```
```
SELECT AVG(rental_duration) AS 'Média de Duração'
FROM film; --4.9850
```
```
SELECT MIN(rental_duration) AS 'Duração Minima'
FROM film; --3
```
```
SELECT MAX(rental_duration) AS 'Duração Máxima'
FROM film; --7
```
```
SELECT SUM(rental_duration) AS 'Tempo de Exibição Total'
FROM film; --4985
```
```
SELECT COUNT(*) FROM film; --1000
```
```
SELECT active, COUNT(*)
FROM sakila.customer
GROUP BY active;
```




