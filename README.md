## Express Js Typescript Server {align=center}

<div align="center">
<h2></h2>
<p>
  <i>
    Node Js / TypeScript / Express Js Server Boilerplate.
  <i>
</p>
</div>
<p align="center">
 <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript" />&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" alt="Node.js" />&nbsp;&nbsp;
</p>

## Consumption

##### Clone the Server file [Express JS Server TypeScript!](https://github.com/andrewkariuki/express-server-ts.git)
 
```shell
  git clone https://github.com/andrewkariuki/express-server-ts.git
```
  
##### install all the dependencies
 
```shell
  cd express-server-ts && yarn || npm install
```
  
##### Running the server in development

```shell
  yarn develop  || npm run develop
```
  
##### Compile TypeScript
 
```shell
  yarn compile  || npm run compile
```

##### Running the server in production
  
```shell
  yarn start  || npm run start || node ./build/app.js
```

##### ****Point to note****
  
The server is currently running on pug as its templating engine but you have an option to use the like of *Twig, Handlebars, Mustache, Ejs and any other templating engine.* All you have to do it install their corresponding dependences the change this piece of code in your app.ts and you are good to go.

```js
   app.set("view engine", "pug" //replace with your favorite templating engine after install);
```
##### What's next for Express Server TypeScript
 
*...more to come functinalities to come like - Auth, Tests with Jest, ORM - TypeORM and Mongoose etc.*

