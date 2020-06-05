# Ecoleta

Projeto do bootcamp Next Level Week 1.0 do Rocketseat que ocorreu entre os dias 01/06 e 05/06.


O desenvolvimento foi feito em typescript no back-end, react no front-end web e react-native no front-end mobile.

---

## Começando

Para executar o projeto será necessário os seguintes programas:

* [Node.js](https://nodejs.org/en/): Necessário para executar o projeto.

* [Visual Studio Code](https://code.visualstudio.com/): Para desenvolvimento do projeto.

## Execução

Para executar o back-end *(porta: 3000)*:
```javascript
npm run dev
```

Para executar o front-end web *(porta: 3333)*:
```javascript
npm start
```

Para executar o front-end mobile:
``` ? ```

## Features

Sistema de pontos de coleta de resíduos, que busca conectar empresas que coletam resíduos orgânicos e inorgânicos as pessoas que precisam descartar esses resíduos.

Listar pontos de coletas:

**```get```** ```/points```

Mostrar ponto de coleta específico:

**```get```** ```/points/:id```

Criar novo ponto de coleta:

**```post```** ```/points```

Listar itens:

**```get```** ```/items```

## Banco de dados

Foi utilizado o banco SQLite.
Para acessar as tabelas:
```/src/database/database.sqlite```

