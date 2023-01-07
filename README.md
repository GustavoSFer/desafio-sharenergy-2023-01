# Bem vindo!

## Tecnologias utilizadas
- React
- React-router-dom
- Dotenv
- React test library
- Axios
- Node.js
- Express
- MongoDB
- Mongoose
- Mocha | Chai | Sinon.js | RTL

## Objetivo do projeto:
  * Criar uma aplicação com algumas telas, consumindo Apis externa.
  
    <ul>
      <li>Cadastrar usuário.</li>
      <li>Realizar login.</li>
      <li>Autenticar usuário.</li>
      <li>Visualizar usuários.</li>
      <li>Status Code Http Cat.</li>
      <li>Random Dog.</li>
      <li>Criar lista de clientes.</li>
    </ul>
<br><br><br>

# Instruções para iniciar o projeto
  1 - Clone o repositório
  * Chave SSH
    * git clone git@github.com:GustavoSFer/desafio-sharenergy-2023-01.git

  * Chave HTTPS
    * git clone https://github.com/GustavoSFer/desafio-sharenergy-2023-01.git

  * Entre na pasta do repositório que você acabou de clonar:
    * cd desafio-sharenergy-2023-01


2 - Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * npm install
  * Para instalar as dependências individual: (opcional)
    * npm run start:back (back-end)
    * npm run start:front (front-end)
  
  * Inicialize o projeto: `obs: antes de inicializar faça as configurações do banco`
    * npm start - `Caso não abrir a pagina no nagevar, inicie separado`
      * cd banck-end 
      ``` npm start```
      * cd front-end 
      ``` npm start```

## Conexão com o Banco: (pasta back-end)
Na raiz do projeto **renomeie o arquivo `.env.example` para `.env`** com as variáveis de ambiente.

```sh
DB_URI=bancoDeDados
PORT=3001
```

Caso não seja informado, será utilizado por padão `'mongodb://localhost:27017/sharenergy'`.
onde /sharenergy é o nome da coleção no banco MongoDB.

**⚠️ IMPORTANTE! ⚠️**


**Este passo é obrigatório**
Crie um arquivo na raiz do projeto de back-end chamado `secret.txt`, e informe uma senha, para que seja usado no token.

Comando que pode utilizar pelo terminal:
```
  * cd back-end
  * touch secret.txt
  * cat > secret.txt
  * segredo
```

## Conexão com o Front End e o Back End:

**⚠️ IMPORTANTE! ⚠️**

Crie um arquivo .env e informe nele a URL do banco 
```
REACT_APP_API_URL=
```
Se não for informado, por padão será utilizado
**`http://localhost:3001`** 

Dentro da pasta `src/Service` que é informado o banco.


<br>
<br>