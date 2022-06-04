----------------------------------  REST e RESTful -----------------------------------------

1 - RESTful - é um web service que segue as regras definidas pelo padrão REST.

2 - REST - Transferência de Estado Representacional, é um estilo de arquitetura de software, 
controlado pelo W3C , que define um conjunto de restrições a serem usadas para a criação 
de APIs.

Para o REST, uma aplicação é um conjunto de recursos que podem ter seu estado representado de 
alguma forma. Ao consumir esses recursos, você está transferindo as informações sobre esse 
estado para o cliente (uma requisição GET) ou fazendo uma alteração (um POST , PUT ou DELETE ). 
Daí o nome Transferência de Estado Representacional, ou seja, estamos transferindo uma 
representação do estado de algum recurso.

----------------------------  6 RESTRINÇÕES para ser RESTful -------------------------------

1 - INTERFACE UNIFORME: A interface de comunicação entre seu servidor e seu cliente deve ser 
definida e seguida à risca, através de um padrão, para que ela se mantenha consistente. Dessa 
forma, essa "constraint", se seguida à risca, simplifica e desacopla a sua arquitetura. Essa 
interface inclui o endpoint , o tipo de retorno e o uso dos verbos HTTP.

- O recurso a ser acessado/alterado deve ser identificado pelo endpoint da requisição:

https://swapi.dev/api/planets/:id

o recurso que queremos acessar, planet , é facilmente identificado.

- Content-type - Serve para dizer, para o nosso cliente, que tipo de conteúdo estamos retornando.
Caso estejamos retornando um JSON, enviamos o header como Content-type: application/json.
Se for HTML, seria Content-type: text/html:

Se o cliente pede ou envia informação no formato JSON, você deve processar e retornar mantendo o
formato JSON. 

Se um erro em um endpoint retorna os campos code, error e message, todos os erros devem retornar,
pelo menos, esses campos. 

Se uma requisição ao endpoint de uma coleção (GET /posts), retorna um Array, todos os endpoints
de coleção devem retornar Arrays. 

Se quando realizamos uma requisição GET /products, recebemos um array de produtos, ao realizar 
a requisição GET /sales, não devemos receber um JSON no formato { "sales": [{ ... }] }, já que 
esse comportamento é inconsistente com o do endpoint GET /products .

Dessa forma, ao consumir um endpoint da sua API, é possível até mesmo deduzir o comportamento 
dos demais endpoints, dispensando "tentativa e erro".

A ação que vamos realizar no recurso deve ser identificada pelo verbo HTTP da requisição. Para 
o REST, os principais verbos HTTP são POST , GET , PUT e DELETE , e cada um realiza uma ação, 
dependendo se for enviado para o endpoint de um recurso ou de uma coleção.

- Respostas são sempre obrigatórias. Mesmo que não tenha corpo:

1xx: Informação;
2xx: Sucesso;
3xx: Redirecionamento;
4xx: Erro do cliente;
5xx: Erro no servidor.

2 - CLIENTE-SERVIDOR: API e cliente desacoplados. Você poderia facilmente mudar as APIs com que 
esses projetos se comunicam para outras, desde que os contratos (os endpoints, os formatos das 
requisições) sejam mantidos.

O princípio básico aqui é a separação de responsabilidades em duas partes.  O cliente se preocupa 
com a exibição dos dados, experiência da pessoa usuária. O servidor com armazenamento e acesso 
dos dados, cache, log.


3 - SEM ESTADO (Stateless) - Irá tornar possível nossa API responder a múltiplos clientes.

Não manter estado significa que toda requisição deve conter todas as informações necessárias 
(ser autossuficiente) para nossa API realizar uma ação. Desse jeito, não podemos reutilizar 
nenhum contexto que está armazenado no servidor.

Ex: Em um app em que você faz uma requisição para se logar, o servidor inicia sua sessão e te
retorna um token.

Na próxima requisição, você precisa enviar o token novamente, pois o servidor "não se lembra" 
de você.

Esse ponto é importante, pois nos dá alguns benefícios:

Transparência : facilita o trabalho do lado do servidor, pois todas as informações necessárias 
já estão na requisição;

Escalabilidade : sem precisar manter estado, nosso servidor pode desalocar recursos que foram 
para realizar uma ação específica e alocá-los apenas quando necessário.


4 - CACHEABLE - O princípio aqui é que as respostas dadas pela nossa API devem dizer, 
explicitamente, se podem ou não ser cacheadas e por quanto tempo. Cuidado ao usar o 
cache, se usá-lo demais faz sua API perder a confiabilidade, e usá-lo de menos pode 
sobrecarregar seu servidor desnecessariamente.

Uma camada de cache bem gerenciada pode reduzir ou eliminar iterações do lado do cliente, 
aumentando a escalabilidade e a performance da nossa API.

No HTTP, o cache é definido pelo header Cache-Control: max-age=120 . Nesse caso, o cliente
"cacheia" a resposta da requisição por 120 segundos. Durante esse tempo, o cliente fornecerá 
a resposta cacheada, sem precisar consultar o servidor.


5 - SISTEMA EM CAMADAS - é basicamente abstrair do cliente as camadas necessárias para responder uma 
requisição.

6 - CÓDIGO SOB DEMANDA - Permite o nosso servidor enviar código (JavaScript) ao nosso cliente, onde 
será executado. Assim, conseguimos customizar o comportamento do cliente.

Ex: Enviar um "widget" para colocar na página um chat para que o cliente possa conversar com 
alguém.


------------------------------------- REST no Express ----------------------------------------

Usar o Express ou outro framework tanto faz, os prinicipios devem ser independente de tecnologia.

A vantangem do Express para construir APIs é a organização das rotas.

Podemos definir N controllers para a mesma rota, separando-as apenas pelo verbo HTTP da 
requisição. Além disso, é simples retornar um formato específico solicitado pelo cliente,
da mesma maneira que é simples retornar um status HTTP.

app.route('/user')
  .get((req, res) => {
    // Realiza uma operação
    res.status(401).send({
      message: 'Usuário não autorizado'
    })
  })
  .post(...)
  .put(...)
  .delete(...)

  

