<div align="center">
<h2>Express Js Typescript Server</h2>
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

<h2>Consumption</h2>

<h6>Clone the Server file [Express JS Server TypeScript!](https://github.com/andrewkariuki/express-server-ts.git)</h6>
<pre height="3px">
  <code>
    git clone https://github.com/andrewkariuki/express-server-ts.git
  </code>
</pre>

<h6>install all the dependencies</h6>
<pre height="3px">
  <code>
   cd express-server-ts && yarn || npm install
  </code>
</pre>

<h6>Running the server in development</h6>
<pre height="3px">
  <code>
   yarn develop  || npm run develop
  </code>
</pre>

<h6>Compile TypeScript</h6>
<pre height="3px">
  <code>
   yarn compile  || npm run compile
  </code>
</pre>

<h6>Running the server in production</h6>
<pre height="3px">
  <code>
   yarn start  || npm run start || node ./build/app.js
  </code>
</pre>

<h6>****Point to note****</h6>
<p>The server is currently running on pug as its templating engine but you have an option to use the like of <i>Twig, Handlebars, Mustache, Ejs and any other templating engine<i/>
. All you have to do it install their corresponding dependences the change this piece of code in your app.ts and you are good to go.
</p>
<pre>
  <code>
   app.set("view engine", "pug" //replace with your favorite templating engine after install);
  </code>
</pre>


<p>
  <i> ... more to come functinalities to come like - Auth, Tests with Jest, ORM - TypeORM and Mongoose etc.<i>
</p>
