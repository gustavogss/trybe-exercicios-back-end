SELECT 
MAX(ROUND(SALARY, 2)) AS 'Maior Salário',
MIN(ROUND(SALARY, 2)) AS 'Menor Salário',
SUM(ROUND(SALARY, 2)) AS 'Soma Salários',
AVG(ROUND(SALARY, 2)) AS 'Media Salários'
FROM employees;