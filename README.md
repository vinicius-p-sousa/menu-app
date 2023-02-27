# Menu-app 🍕

⚠**Ainda em desenvolvimento**

Um projeto que nasceu de uma dúvida: ***'como uma pizzaria mantém seu cardápio sempre em dia?'***,
partindo disso eu pensei em criar um sistema de ponta a ponta usando tudo oque tenho estudado, para uma que pizzaria 
ou qualquer outro estabelecimento manterem seus cardápios sempre atualizados.

# Tecnologias
Essas são algumas das tecnologias usadas:
### Front-End:
- React
- Vite
- framer-motion
- react-toastify
- axios
- e algumas outras...

### Back-End
- Express
- prisma
- docker e docker compose
- postgress
- jsonwebtoken
- e algumas outras...

# Rodando o projeto 👨‍💻

Para rodar esse projeto você precisa ter instalado na sua maquina:
- docker compose
- yarn
- node (v18.14.1)

Primeiro instale as dependências nas pastas **frontend** e **backend** com:
```
$ yarn 
```  

Na pasta **backend** execute:

```
$ docker compose up -d
$ yarn prisma db push
$ yarn prisma db seed
$ yarn run dev
```  

Já na pasta **frontend** basta executar:

```
$ yarn run dev
```

---
uma dica: para testar a funcionalidade de admin use a conta: 
 - **email:** 'teste@email.com'
 - **senha:** 'teste123'
