# API DE FESTAS E SERVIÇOS
ESTA API SERVE PARA TESTAR CONHECIMENTOS DE FORMA PRÁTICA, SIMULANDO UM SERVIÇO DE CADASTRO DE FESTAS(Formaturas, Casamentos etc..) E SERVIÇOS ADJACENTES(Open Bar, Dj etc...) 

##Endpoints
### GET /partiesLTDA/services
Esse endpoint é responsável por retornar a listagem de todos os serviços cadastrados no banco de dados
#### Parametros
Nenhum
#### Respostas
##### OK! 200
Caso essa resposta aconteça, você vai receber a listagem de todos os serviços
Exemplo de Resposta: 
```
[
  {
    "_id": "63cf20b157c6507cce7eed7c",
    "name": "Serviço de Dj",
    "description": "Dj Stove para festas de formaturas",
    "price": 3000,
    "image": "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "createdAt": "2023-01-24T00:05:05.315Z",
    "updatedAt": "2023-01-24T00:05:05.315Z",
    "__v": 0
  },
  {
    "_id": "63cf211157c6507cce7eed7e",
    "name": "Open Bar",
    "description": "Serviço de Open Bar? É pra já",
    "price": 2500,
    "image": "https://images.unsplash.com/photo-1618106547744-68915223cdbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "createdAt": "2023-01-24T00:06:41.317Z",
    "updatedAt": "2023-01-24T00:06:41.317Z",
    "__v": 0
  }
]
```
##### Falha na requisição 400(Bad Request)
Caso essa resposta aconteça, isso significa que aconteceu alguma falha no processo de requisição. Motivos: Erro interno no Servidor
Exemplo de Resposta:
```
{
  "error": "Falha na requisição"
}
```


##Endpoints
### POST /partiesLTDA/service
Esse endpoint é responsável por fazer o processo de cadastro de um serviço
#### Parametros(Corpo da Requisição Post)
name: Nome do Serviço

description: Descrição do tipo de Serviço

price: Preço do Serviço

Imagem: Imagem Ilustrando o Serviço

Exemplo:
```
{
  "name": "Open Bar",
  "description": "Serviço de Open Bar? É pra já",
  "price": "2500",
  "image": "https://images.unsplash.com/photo-1618106547744-68915223cdbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
}

```

##Endpoints
### GET /partiesLTDA/service/:id
Esse endpoint é responsável por retornar um único serviço Cadastrado
#### Parametros:
id: Id do Serviço em especifíco Selecionado
#### Respostas
##### OK! 200
Caso essa resposta aconteça, você vai receber o serviço em especifíco selecionado
Exemplo de Resposta

Exemplo:

```
{
  "_id": "63cf20b157c6507cce7eed7c",
  "name": "Serviço de Dj",
  "description": "Dj Stove para festas de formaturas",
  "price": 3000,
  "image": "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "createdAt": "2023-01-24T00:05:05.315Z",
  "updatedAt": "2023-01-24T00:05:05.315Z",
  "__v": 0
}
```

##### Falha na requisição 404(Not Found)
Caso essa resposta aconteça, isso significa que o id não foi encontrado. Motivos: Id Inválido

Exemplo de Resposta:

```
{
  "msg": "Serviço não encotrado!!!"
}
```



##Endpoints
### PUT /partiesLTDA/service/:id
Esse endpoint é responsável por atualizar os campos de um único serviço já cadastrado
#### Parametros:
id: Id do Serviço em especifíco Selecionado
#### Respostas
##### OK! 200
Caso essa resposta aconteça, você vai receber o serviço em especifíco atualizado
Exemplo de Resposta

```
{
  "_id": "63cf20b157c6507cce7eed7c",
  "name": "Serviço de Dj Baguncinha",
  "description": "Ação e Adrenalina da Califórnia",
  "price": 3000,
  "image": "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "createdAt": "2023-01-24T00:05:05.315Z",
  "updatedAt": "2023-01-24T00:34:44.874Z",
  "__v": 0
}
```

##### Falha na requisição 404(Not Found)
Caso essa resposta aconteça, isso significa que o id não foi encontrado. Motivos: Id Inválido

Exemplo de Resposta:

```
{
  "msg": "Serviço não encotrado!!!"
}
```

##Endpoints
### DELETE /partiesLTDA/service/:id
Esse endpoint é responsável por deletar um único serviço já cadastrado
#### Parametros:
id: Id do Serviço em especifíco Selecionado
#### Respostas
##### OK! 200
Caso essa resposta aconteça, você vai receber uma mensagem informando que o serviço foi deletado
Exemplo de Resposta

```
{
  "deleteService": {
    "_id": "63cf20b157c6507cce7eed7c",
    "name": "Serviço de Dj Baguncinha",
    "description": "Ação e Adrenalina da Califórnia",
    "price": 3000,
    "image": "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "createdAt": "2023-01-24T00:05:05.315Z",
    "updatedAt": "2023-01-24T00:34:44.874Z",
    "__v": 0
  },
  "mensagem": "Serviço excluído com Sucesso"
}
```

##### Falha na requisição 404(Not Found)
Caso essa resposta aconteça, isso significa que o id não foi encontrado. Motivos: Id Inválido

Exemplo de Resposta:

```
{
  "msg": "Serviço não encotrado!!!"
}
```


**FESTAS**


##Endpoints
### GET /partiesLTDA/parties
Esse endpoint é responsável por retornar a listagem de todas as festas cadastradas no banco de dados
#### Parametros
Nenhum
#### Respostas
##### OK! 200
Caso essa resposta aconteça, você vai receber a listagem de todas as festas

```
[
  {
    "_id": "63cf302119d880e5d03c503b",
    "title": "Formatura de Medicina",
    "author": "Leonardo Rodrigues",
    "description": "Festa para os Formandos em Medicina",
    "budget": 9000,
    "image": "https://plus.unsplash.com/premium_photo-1664474865451-a15999296765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "services": [
      {
        "name": "Open Bar",
        "description": "Serviço de Open Bar? É pra já",
        "price": 2500,
        "image": "https://images.unsplash.com/photo-1618106547744-68915223cdbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "_id": "63cf302119d880e5d03c503c",
        "createdAt": "2023-01-24T01:10:57.406Z",
        "updatedAt": "2023-01-24T01:10:57.406Z"
      }
    ],
    "createdAt": "2023-01-24T01:10:57.408Z",
    "updatedAt": "2023-01-24T01:10:57.408Z",
    "__v": 0
  },
  {
    "_id": "63cf31d519d880e5d03c503e",
    "title": "Casamento da Júlia",
    "author": "Leonardo Rodrigues",
    "description": "Casamento para o casal: Júlia e Márcio",
    "budget": 9000,
    "image": "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "services": [
      {
        "name": "Open Bar",
        "description": "Serviço de Open Bar? É pra já",
        "price": 2500,
        "image": "https://images.unsplash.com/photo-1618106547744-68915223cdbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "_id": "63cf31d519d880e5d03c503f",
        "createdAt": "2023-01-24T01:18:13.466Z",
        "updatedAt": "2023-01-24T01:18:13.466Z"
      },
      {
        "name": "Serviço de Dj",
        "description": "Dj Stove para festas de formaturas",
        "price": 3000,
        "image": "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "_id": "63cf20b157c6507cce7eed7c",
        "createdAt": "2023-01-24T01:18:13.467Z",
        "updatedAt": "2023-01-24T01:18:13.467Z"
      }
    ],
    "createdAt": "2023-01-24T01:18:13.467Z",
    "updatedAt": "2023-01-24T01:18:13.467Z",
    "__v": 0
  }
]
```

##### Falha na requisição 400(Bad Request)
Caso essa resposta aconteça, isso significa que aconteceu alguma falha no processo de requisição. Motivos: Erro interno no Servidor
Exemplo de Resposta:
```
{
  "error": "Falha na requisição"
}
```

##Endpoints
### POST /partiesLTDA/party
Esse endpoint é responsável por fazer o processo de cadastro de uma festa
#### Parametros(Corpo da Requisição Post)
name: Nome da Festa

author: Coordenador da Festa

description: Descrição da Festa

Imagem: Imagem Ilustrando a Festa

services: Serviços Adjacentes à festa {Serviço de Dj, Serviço de Open Bar}

Exemplo: 

```
{
  "title": "Casamento da Júlia",
  "author": "Leonardo Rodrigues",
  "description": "Casamento para o casal: Júlia e Márcio",
  "budget": 9000,
  "image": "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "services": [
      {
        "name": "Open Bar",
        "description": "Serviço de Open Bar? É pra já",
        "price": 2500,
        "image": "https://images.unsplash.com/photo-1618106547744-68915223cdbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      {
         "_id": "63cf20b157c6507cce7eed7c",
          "name": "Serviço de Dj",
          "description": "Dj Stove para festas de formaturas",
          "price": 3000,
          "image": "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      }
    
    ]
}
```

**RESPOSTA**

```
[
  {
    "_id": "63cf302119d880e5d03c503b",
    "title": "Formatura de Medicina",
    "author": "Leonardo Rodrigues",
    "description": "Festa para os Formandos em Medicina",
    "budget": 9000,
    "image": "https://plus.unsplash.com/premium_photo-1664474865451-a15999296765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "services": [
      {
        "name": "Open Bar",
        "description": "Serviço de Open Bar? É pra já",
        "price": 2500,
        "image": "https://images.unsplash.com/photo-1618106547744-68915223cdbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "_id": "63cf302119d880e5d03c503c",
        "createdAt": "2023-01-24T01:10:57.406Z",
        "updatedAt": "2023-01-24T01:10:57.406Z"
      }
    ],
    "createdAt": "2023-01-24T01:10:57.408Z",
    "updatedAt": "2023-01-24T01:10:57.408Z",
    "__v": 0
  },
  {
    "_id": "63cf31d519d880e5d03c503e",
    "title": "Casamento da Júlia",
    "author": "Leonardo Rodrigues",
    "description": "Casamento para o casal: Júlia e Márcio",
    "budget": 9000,
    "image": "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "services": [
      {
        "name": "Open Bar",
        "description": "Serviço de Open Bar? É pra já",
        "price": 2500,
        "image": "https://images.unsplash.com/photo-1618106547744-68915223cdbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "_id": "63cf31d519d880e5d03c503f",
        "createdAt": "2023-01-24T01:18:13.466Z",
        "updatedAt": "2023-01-24T01:18:13.466Z"
      },
      {
        "name": "Serviço de Dj",
        "description": "Dj Stove para festas de formaturas",
        "price": 3000,
        "image": "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "_id": "63cf20b157c6507cce7eed7c",
        "createdAt": "2023-01-24T01:18:13.467Z",
        "updatedAt": "2023-01-24T01:18:13.467Z"
      }
    ],
    "createdAt": "2023-01-24T01:18:13.467Z",
    "updatedAt": "2023-01-24T01:18:13.467Z",
    "__v": 0
  }
]
```


**OBS!!!**

**Se o valor do Budget(Orçamento da Festa) for inferior à soma dos preços dos serviços, então não será possível efetuar o cadastro da festa e o usuário terá como resposta a seguinte mensagem:**

```
{
  "mensagem": "O seu Orçamento não é o suficiente"
}
```


##Endpoints
### GET /partiesLTDA/party/:id
Esse endpoint é responsável por retornar uma única festa Cadastrada
#### Parametros:
id: Id da Festa em especifíco Selecionada
#### Respostas
##### OK! 200
Caso essa resposta aconteça, você vai receber a festa em especifíca selecionada
Exemplo de Resposta

```
{
  "party": {
    "_id": "63cf302119d880e5d03c503b",
    "title": "Formatura de Medicina",
    "author": "Leonardo Rodrigues",
    "description": "Festa para os Formandos em Medicina",
    "budget": 9000,
    "image": "https://plus.unsplash.com/premium_photo-1664474865451-a15999296765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "services": [
      {
        "name": "Open Bar",
        "description": "Serviço de Open Bar? É pra já",
        "price": 2500,
        "image": "https://images.unsplash.com/photo-1618106547744-68915223cdbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "_id": "63cf302119d880e5d03c503c",
        "createdAt": "2023-01-24T01:10:57.406Z",
        "updatedAt": "2023-01-24T01:10:57.406Z"
      }
    ],
    "createdAt": "2023-01-24T01:10:57.408Z",
    "updatedAt": "2023-01-24T01:10:57.408Z",
    "__v": 0
  },
  "mensagem": "Festa encontrada"
}
```

##### Falha na requisição 404(Not Found)
Caso essa resposta aconteça, isso significa que o id não foi encontrado. Motivos: Id Inválido

Exemplo de Resposta:

```
{
  "msg": "Festa não encotrada!!!"
}
```

##Endpoints
### PUT /partiesLTDA/party/:id
Esse endpoint é responsável por atualizar os campos de uma única festa já cadastrada
#### Parametros:
id: Id da festa em especifíca Selecionada
#### Respostas
##### OK! 200
Caso essa resposta aconteça, você vai receber a festa em especifíca atualizada

Exemplo de Resposta

**Corpo da Requisição PUT**

```
{
  "title": "Casamento da Fernanda",
  "author": "Jurandir Messias",
  "description": "Casamento para o casal: Júlia e Márcio",
  "budget": 9000,
  "image": "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "services": [
      {
        "name": "Open Bar",
        "description": "Serviço de Open Bar? É pra já",
        "price": 3500,
        "image": "https://images.unsplash.com/photo-1618106547744-68915223cdbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      {
         "_id": "63cf20b157c6507cce7eed7c",
          "name": "Serviço de Dj",
          "description": "Dj Stove para festas de formaturas",
          "price": 3000,
          "image": "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      }
    
    ]
}
```

**RESPOSTA**

```
{
  "party": {
    "title": "Casamento da Fernanda",
    "author": "Jurandir Messias",
    "description": "Casamento para o casal: Júlia e Márcio",
    "budget": 9000,
    "image": "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "services": [
      {
        "name": "Open Bar",
        "description": "Serviço de Open Bar? É pra já",
        "price": 3500,
        "image": "https://images.unsplash.com/photo-1618106547744-68915223cdbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      {
        "_id": "63cf20b157c6507cce7eed7c",
        "name": "Serviço de Dj",
        "description": "Dj Stove para festas de formaturas",
        "price": 3000,
        "image": "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      }
    ]
  },
  "mensagem": "Festa Atualizada com Sucesso"
}
```

##Endpoints
### DELETE /partiesLTDA/party/:id
Esse endpoint é responsável por deletar uma única festa já cadastrada
#### Parametros:
id: Id da Festa em especifíco Selecionada
#### Respostas
##### OK! 200
Caso essa resposta aconteça, você vai receber uma mensagem informando que a festa foi deletada do sistema
Exemplo de Resposta

```
{
  "deletedParty": {
    "_id": "63cf31d519d880e5d03c503e",
    "title": "Casamento da Júlia",
    "author": "Leonardo Rodrigues",
    "description": "Casamento para o casal: Júlia e Márcio",
    "budget": 9000,
    "image": "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "services": [
      {
        "name": "Open Bar",
        "description": "Serviço de Open Bar? É pra já",
        "price": 2500,
        "image": "https://images.unsplash.com/photo-1618106547744-68915223cdbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "_id": "63cf31d519d880e5d03c503f",
        "createdAt": "2023-01-24T01:18:13.466Z",
        "updatedAt": "2023-01-24T01:18:13.466Z"
      },
      {
        "name": "Serviço de Dj",
        "description": "Dj Stove para festas de formaturas",
        "price": 3000,
        "image": "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "_id": "63cf20b157c6507cce7eed7c",
        "createdAt": "2023-01-24T01:18:13.467Z",
        "updatedAt": "2023-01-24T01:18:13.467Z"
      }
    ],
    "createdAt": "2023-01-24T01:18:13.467Z",
    "updatedAt": "2023-01-24T01:18:13.467Z",
    "__v": 0
  },
  "mensagem": "Festa excluída do sistema"
}
```

##### Falha na requisição 404(Not Found)
Caso essa resposta aconteça, isso significa que o id da festa não foi encontrado. Motivos: Id Inválido

Exemplo de Resposta:

```
{
  "mensagem": "Festa não encontrada"
}
```

