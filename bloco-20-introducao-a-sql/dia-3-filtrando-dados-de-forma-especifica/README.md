# FILTRANDO DADOS DE FORMA MAIS ESPECÍFICA :rocket:

## OPERADORES LÓGICOS

### OPERADOR - DESCRIÇÃO
  1. =   IGUAL
  2. (>) MAIOR QUE
  3. (<)   MENOR QUE
  4. (>=)  MAIOR QUE OU IGUAL
  5. (<=)  MENOR QUE OU IGUAL
  6. <>  DIFERENTE DE
  7. AND OPERADOR LÓGICO E
  8. OR  OPERADOR LÓGICO OU
  9. NOT NEGAÇÃO
  10. IS  COMPARA COM VALORES BOOLEANOS (TRUE, FALSE, NULL)

## COMPARADORES LÓGICOS SQL 

1. WHERE - Atribui uma condição:
   
```
SELECT * FROM sakila.actor
WHERE last_name = 'DAVIS';
```
- lista todos os atores com sobrenome DAVIS
  
```
SELECT * FROM sakila.actor
WHERE legth > 50
ORDER BY length;
```

- lista todos os actores maiores de 50 por ordem maior

```
SELECT * FROM sakila.film
WHERE title NOT LIKE 'academy%';
```

- lista os filmes que não começam com a palavra academy.

```
SELECT * FROM sakila.payment
WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;
```

- Como o operador AND tem preferência sobre o operador OR , ele é avaliado primeiro. Então os registros buscados são aqueles nos quais amount = 2.99 e staff_id = 2 . Na sequência, são buscados os registros nos quais amount = 0.99 , independente do valor de staff_id . Os valores retornados serão os resultados dessas duas buscas. Ou seja, a query é executada como se tivesse os seguintes parênteses: amount = 0.99 OR (amount = 2.99 AND staff_id = 2) .

```
SELECT * FROM sakila.payment
WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;
```

- Primeiramente, a expressão dentro dos parênteses é avaliada, e todos os resultados que satisfazem a condição amount = 0.99 OR amount = 2.99 são retornados. Na sequência, a expressão do lado direito do AND é avaliada, e todos os resultados que satisfazem a condição staff = 2 são retornados. O AND então compara o resultado de ambos os lados e faz com que somente os resultados que satisfazem ambas as condições sejam retornados.

2. LIKE - é usado para buscar por meio de uma sequência específica de caracteres o inicio ou fim de um determinado termo. Usa dois "curingas", ou modificadores:

- % - O sinal de percentual, que pode representar zero, um ou múltiplos caracteres

- _ - O underscore (underlin), que representa um único caractere

```
SELECT * FROM sakila.film
WHERE title LIKE '%don';
```

- listar os filmes que terminam com don

- Encontra qualquer resultado finalizando com "don"
  
```
SELECT * FROM sakila.film
WHERE title LIKE '%don';
```

- Encontra qualquer resultado iniciando com "plu"

```
SELECT * FROM sakila.film
WHERE title LIKE 'plu%';
```

```
- Encontra qualquer resultado que contém "plu"
SELECT * FROM sakila.film
WHERE title LIKE '%plu%';
```

- Encontra qualquer resultado que inicia com "p" e finaliza com "r"
  
```
SELECT * FROM sakila.film
WHERE title LIKE 'p%r';
```

- Encontra qualquer resultado em que o segundo caractere da frase é "C"
  
```  
SELECT * FROM sakila.film
WHERE title LIKE '_C%';
```

- Encontra qualquer resultado em que o título possui exatamente 8 caracteres

```
SELECT * FROM sakila.film
WHERE title LIKE '________';
```

- Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E

```
SELECT * FROM sakila.film
WHERE title LIKE 'E__%';

```

3. IN - para fazer uma consulta juntando várias condições:

```
SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');
```

4. BEETWEEN - para fazer uma consulta entre uma faixa de condição:

```
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;
```

```
SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;
```

```
SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';
```

- IN x BETWEEN : no caso do IN , você precisa especificar os valores que devem ser incluídos no resultado e, no caso do BETWEEN , você não precisa incluir os valores porque trabalha entre uma faixa de valores.


## SQL COM DATAS 

1. O MySQL , por padrão, usa o formato YYYY-MM-DD (ano/mês/dia) ao armazenar os valores de uma data. 

2. DATE - Possui apenas data, no formato YYYY-MM-DD na faixa de 1001-01-01 até 9999-12-31

3. DATETIME - Possui data e tempo, no formato YYYY-MM-DD HH:MM:SS com a faixa de 1000-01-01 00:00:00 até 9999-12-31 23:59:59
    
```
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';
```

- Encontra todos os pagamentos deste dia, ignorando horas, minutos e segundos

- Encontra todos pagamentos deste dia, ignorando horas, minutos e segundos

```
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-31%';
```

- Encontra um pagamento com dia e hora exatos
  
```
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-08-20 00:30:52';
```

- Encontra pagamentos especificando um valor mínimo e um valor máximo para a data
  
```
SELECT *
FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';
```

4. Selecionando apenas partes de uma data:
   
```
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano 
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia 
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora 
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto 
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo
```

















