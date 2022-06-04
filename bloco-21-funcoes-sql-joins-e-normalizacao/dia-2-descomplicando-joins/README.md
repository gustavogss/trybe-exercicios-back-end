# DESCOMPLICANDO JOINS :bulb:

1 - JOIN - permite combinar registros de duas ou mais tabelas, através do relacionamento 
que uma tabela tem com a outra. É usado para ligar tabelas através de um valor em comum

2 - INNER JOIN - serve para mostrar dados que são comuns nas duas tabelas. É necessário
que a cláusula ON for satisfeita:
```
SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;
```
- A palavra-chave AS pode ser omitida. Nesse caso, o alias é passado diretamente, após o nome da tabela:
```
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor a
INNER JOIN film_actor f
ON a.actor_id = f.actor_id;
```

3 - LEFT JOIN - serve para mostrar dados que estão do lado esquerdo das tabelas:
```
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;
```

4 - RIGHT JOIN  - serve para mostrar dados que estão do lado das tabelas:
```
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;
```

5 - SELF JOIN para fazer join de uma tabela com ela própria:
```
SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM
	employees AS Employee
INNER JOIN
	employees AS Manager ON Employee.manager_id = Manager.employee_id;
```

6 - UNION - serve para unir queries diferentes:
```
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;
```
[SQL JOINS](./sql-joins.jpg)

