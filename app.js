const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <html>
  <head>
      <title>Enterprise Deployment Dashboard</title>
      <style>
      body{
          font-family:Arial;
          background:#f5f5f5;
          text-align:center;
          padding:50px;
      }

      .card{
          background:white;
          padding:30px;
          width:700px;
          margin:auto;
          border-radius:10px;
          box-shadow:0px 0px 10px #ccc;
      }

      h1{
          color:#232f3e;
      }

      .status{
          color:green;
          font-size:20px;
      }
      </style>
  </head>

  <body>

  <div class="card">

      <h1>Enterprise Software Deployment Automation</h1>

      <h3>AWS + Docker + GitHub Actions</h3>

      <hr>

      <p class="status">✓ Application Running</p>

      <p>Cloud Platform : AWS EC2</p>

      <p>Container : Docker</p>

      <p>CI/CD Tool : GitHub Actions</p>

      <p>Version : 1.0</p>

  </div>

  </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log("Server Running on Port 3000");
});