-------------------------- JWT (JSON Web Token) -----------------------------------

1 - -O JWT permite obter de forma segura a identidade de um usuário.Pois disponibiliza um token/hash/código criptografado em formato JSON que você pode enviar para uma API e validá-lo como preferir.


2 - Caracteristicas:

- Leveza: Adota o Json como base para troca de informações;

- Autocontido: traz todas as informações para decriptação;

- Seguro: valida a integridade do token, utilizando algoritmos de hashing como o HMAC e o RSA.

* HMAC - usa uma chave secreta que criptografa e descriptografa;

* RSA - par de chaves públicas e privada.


3 - Vantagens:

- Não utiliza banco de dados: usar o JWT implica menos consultas ao banco de dados, o que nos dá um tempo de resposta mais rápido. Caso você esteja usando serviços pagos, como o DynamoDB , que cobram por consulta, o JWT poderá reduzir os custos de consumo.

- Mais simples de usar (se você for cuidadoso): se seu projeto não tem uma arquitetura boa para administrar as sessões dos seus clientes, e seus princípios básicos de segurança não forem claros, o tempo de desenvolvimento usando JWT será bem mais rápido, considerando que você pode simplesmente usar alguma biblioteca existente.

 - Utilizado em vários serviços: você pode ter um servidor de autenticação que lida com o login/cadastro para gerar o token para a pessoa usuária. A partir daí, você pode transitar seu token entre várias aplicações, sendo necessário logar apenas uma vez e logo depois estar logado em todas as outras aplicações do seu sistema. No Google, por exemplo, você loga uma única vez e pode usar serviços como Google Drive, Gmail, Google docs, Google fotos, etc. sem precisar logar novamente.
 
 4 -Elementos que compõe um JWT: Header, Payload, Signature 
 
 Resultado final: numeros_do_payload.numeros_do_header.numeros_do_signature
 
 5 - O JWT (JSON Web Token) é um token gerado a partir de dados "pessoais" que pode ser trafegado pela internet ao fazer requisições para APIs e afins. Mas atenção: toda a informação que colocamos no JWT é pública , e qualquer pessoa com o token consegue ler essas informações. O mecanismo de segurança do JWT permite, no entanto, que apenas quem tem a senha consiga alterar as informações contidas em um token.
 
6 - Como funciona o JWT:

 - O navegador solicita que o usuário digite seu login e senha.
 
 - O navegador então envia esse login e senha ao servidor, para verificar que esses dados estão corretos.
 
 - Uma vez que valida login e senha, o servidor cria dois objetos: um contendo informações sobre o token que será gerado, que chamamos de header , e outro contendo os dados do usuário e as permissões que aquela pessoa têm, ao qual chamamos de payload.
 
 - O servidor então converte esses dois objetos em JSON, junta-os em uma mesma string e utiliza um algoritmo chamado HMAC para "criptografar" essa string usando um "segredo" que só ele sabe, gerando o que chamamos de assinatura , que nada mais é do que Header + Payload criptografados.
 
 - Por fim, o servidor combina o header, o payload originais e a assinatura, criando assim o token .
 
 - O token é enviado ao cliente, que o armazena para utilizá-lo nas próximas requisições.
 
 Na próxima requisição...
 
 - O navegador envia ao servidor os dados para cadastrar um novo produto. Juntamente a esses dados, o navegador envia o token que recebeu ao realizar o login.
 
 - Quando recebe os dados, a primeira coisa que o servidor faz é obter o Header e o Payload do token e criptografá-los, gerando, mais uma vez, a assinatura.
 
 - O servidor, então, compara a nova assinatura com a assinatura que foi enviada pelo cliente. Se ambas forem iguais, quer dizer que o conteúdo do Header e do Payload não foram modificados desde o login.
 
 - Agora que já sabe que o token é válido, o servidor continua processando a requisição e, por fim, entrega a resposta para o cliente.
 
 7 - Autenticação é o processo pelo qual a pessoa usuária consegue, utilizando informações confidenciais como email e senha, efetuar login com sucesso em uma aplicação, tendo como retorno um JSON Web Token pelo qual é possível acessar suas permissões de navegação.
 
 8 - O JWT também é usado para autorização, quando precisamos fazer o processo de atestar as permissões de uma pessoa usuária que deseja acessar uma rota ou recurso protegido. Isso exige o envio do token, normalmente no header Authorization, a partir do qual são acessadas as informações necessárias para a verificação.
 
 9 - Autenticação é usada para atestar que alguém é quem diz ser, já a autorização verifica as permissões de uma pessoa. A autenticação sempre precede a autorização.
 
 
 ------------------------------------  HMAC --------------------------------------
 
 1 - O HMAC é um algoritmo para gerar um MAC (código de autenticação de mensagem) criptografado através de algum algoritmo de hash (algoritmos que codificam mensagens), como md5 , sha1 ou sha256 , a partir de uma chave secreta (uma senha) e de uma mensagem qualquer. Por exemplo, se gerarmos o HMAC da mensagem "Olá, tudo bem?", com o segredo "minhaSenha" e o algoritmo sha1 , teremos o seguinte resultado: b88651e71c7c757560722b52e5f1ead754a759d8 .
 
 A fórmula do HMAC é: HMAC(K, m) = hash(K1 + hash(K2 + m))
 
- K é a chave secreta;
 -  é a mensagem;
 - hash é a função de hash escolhida (md5, sha1 etc);
 - K1 e K2 são chaves secretas derivadas da chave original K;
 - + é a operação de concatenação de strings.
 
 
 2 - O resultado final do JWT dá-se através da assinatura criptográfica de dois blocos de JSON codificados em base64. Esses dois blocos JSON codificados são o header (cabeçalho) e payload (carga) que mencionamos acima. A signature (assinatura) é a junção dos hashes gerados a partir do header e payload.
  
3 - O Header contém duas propriedades: o tipo do token, que é JWT, e o tipo do algoritmo de hash , como HMAC-SHA256 ou RSA :

{
  "alg": "HS256",
  "typ": "JWT"
}


4 - Payload (dados do usuário)
Esta é a segunda parte do token, que contém os "dados". Esses "dados" são declarações sobre uma entidade (geralmente, o usuário):

{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}


5 - Signature
Para gerar a assinatura, você deve usar o header e o payload codificados em base64 , usando o algoritmo definido no header:

import { hmac } from 'bibliotecaDeHmac';

function base64 (string) {
  return Buffer.from(string).toString('base64');
}

const header = JSON.stringify({
  alg: 'HS256',
  type: 'JWT'});

const payload = JSON.stringify({
  sub: '1234567890',
  name: 'John Doe',
  admin: true});

const secret = 'MinhaSenhaMuitoComplexa123';

const assinatura = hmac(`${base64(header)}.${base64(payload)}`, secret);

const token = `${base64(header)}.${base64(payload)}.${base64(assinatura)}`;


6 -O resultado terá a seguinte estrutura:

(Header em base64).(Payload em base64).(Signature em base64)

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiZXhwIjoxNTQ3OTc0MDgyfQ.2Ye5_w1z3zpD4dSGdRp3s98ZipCNQqmsHRB9vioOx54

Header: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

Payload: eyJ1c2VybmFtZSI6InVzZXIxIiwiZXhwIjoxNTQ3OTc0MDgyfQ

Signature: 2Ye5_w1z3zpD4dSGdRp3s98ZipCNQqmsHRB9vioOx54


7 - Um exemplo de envio de um JWT via header em uma requisição HTTP:

 GET /foo/bar HTTP/1.1
 Host: www.exemplo.com
 Authorization: Bearer (Header em base64).(Payload em base64).(Signature em base64)


----------------------------------  Implementando JWT ------------------------------

1 - Para instalar o pacote jsonwebtoken : 

 npm install jsonwebtoken

2 -Edite o arquivo controllers/login.js:


const jwt = require('jsonwebtoken');
const secret = 'seusecretdetoken';

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

   const token = jwt.sign({ data: user }, secret, jwtConfig);
   
    res.status(200).json({ token });


3 - Ao fazer uma nova requisição POST para /api/login , passando nome de usuário e senha corretos, obtemos um resultado semelhante ao seguinte:

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJ1c2VybmFtZSI6Iml0YWxzc29kaiIsInBhc3N3b3JkIjoic2VuaGExMjMifSwiaWF0IjoxNjM4OTc1MTMyLCJleHAiOjE2Mzk1Nzk5MzJ9.hnpmu2p61Il8wdQfmUiJ7wiWXgw8UuioOU_D2RnB9kY"
}


4 - Agora vamos criar uma pasta chamada auth dentro do diretório api ; e, dentro dela, um arquivo chamado validateJWT.js . Esse arquivo conterá uma função que será usada como middleware para as nossas requisições, validando todas as rotas em que nós solicitarmos autenticação: auth/api/validateJWT.js


const jwt = require('jsonwebtoken');
const { User } = require('../../models');
const segredo = 'seusecretdetoken';

module.exports = async (req, res, next) => {
 
  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  try {
    
    const decoded = jwt.verify(token, segredo);    

    const user = await User.findOne({ where: { username: decoded.data.username } });
    
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }
    
    req.user = user;
    
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};


5 - Crie um arquivo server.js para definimos as rotas e usarmos esse middleware para adicionar autenticação na nossa rota de listagem de posts.

api/server.js


const validateJWT = require('./auth/validateJWT');

apiRoutes.get('/api/posts', validateJWT, routes.getPosts);


Não queremos autenticar o login e nem criação de usuários, pois precisamos deles para o processo de autenticação! Se houvesse outras rotas protegidas na nossa aplicação, usaríamos o middleware nelas também!

6 - Passamos o token para a API via Headers, que são informações extras que podemos passar em uma requisição.

Adicionamos um header chamado Authorization porque é o que nosso middleware espera. Dê uma olhada de novo no arquivo ./auth/validateJWT.js .

Lembra-se de que o middleware de autenticação recupera o usuário do banco de dados e o coloca no req? Esse objeto é o mesmo que é passado para todos os middlewares e para a callback da rota. Como o middleware de autenticação é executado antes das funções dos controllers, req conterá o usuário logado quando o controller em /controllers/posts for executado, e poderíamos utilizá-lo para fazer uma consulta ao banco de dados que trouxesse somente seus posts. Para confirmar isso, basta colocar um console.log dentro do controller:

module.exports = async (req, res) => {
  console.log(req.user.dataValues);
  const posts = await Post.findAll({ attributes: { exclude: 'id' } });
  res.status(200).json({ mockPosts: posts });
};

Você deverá ver algo assim, no terminal onde executou a API:

{
  id: 3,
  username: 'italssodj',
  password: 'senha123'
}



















