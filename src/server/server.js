import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../components/App";
import config from "./config";
import {data} from '../testData';
const server = express();
server.use(express.static("dist"));

server.get("/", (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(<App />);
  res.send(`
    <html>
      <head>
        <title>Advanced React App</title>
      </head>
      <body>
        <div id="mountNode">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `);

});
//to serve data api
server.get("/data",(req,res)=>{
  res.send(data)
});

server.listen(config.port, () =>
  console.log(`React Server is running on ${config.port}...`)
);
