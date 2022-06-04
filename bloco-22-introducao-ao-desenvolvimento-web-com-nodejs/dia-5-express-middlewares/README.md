-------------------------- Express - Middlewares ---------------------------------------

1 - Middleware - é qualquer função passada para uma rota, direto ou indiretamente. Ela rebece
três parâmetros: req , res e next. Pode retornar qualquer coisa, incluindo Promises.

Para o Express, um middleware é uma função que realiza o tratamento de uma request 
podendo encerrar essa request, ou chamar o próximo middleware.


app.post('/recipes',
function (req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'}); // 1

  next(); // 2
},
function (req, res) { // 3
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

- Aqui temos dois middlewares, onde:

Fazemos uma validação que retorna uma resposta para requisição caso seja enviada no body 
da requisição um nome vazio. O middleware retorna uma resposta com status 400 e um json 
com uma mensagem dizendo que os dados enviados foram inválidos.

Caso não caia no if , este middleware endereça a requisição para o próximo middleware.

Esse middleware faz todo o processo de pegar os dados enviados, salvar em um array, e 
finalmente retornar uma mensagem de sucesso dizendo que o produto foi cadastrado.

2 - next() - é uma função que chama o outro middleware para ser executado. Caso ele não 
exista, a execução acaba no primeiro middleware.

No caso essa função que valida se o nome foi enviado poderia ser também aproveitada para 
a rota PUT /recipes/:id . Para isso vamos tirar a definição dessa função de dentro da 
rota POST /recipes e aplicá-la para ser usada nas duas rotas:

// ...
function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

  next();
};

app.post('/recipes', validateName, function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', validateName, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipesIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipesIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };

  res.status(204).end();
});
// ...

