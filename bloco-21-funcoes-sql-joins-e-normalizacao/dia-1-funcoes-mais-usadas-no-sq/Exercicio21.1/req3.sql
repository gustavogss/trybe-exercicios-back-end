SELECT  JOB_ID, AVG(SALARY) AS 'media-salarial'
FROM employees
GROUP BY JOB_ID
ORDER BY `media-salarial` DESC;