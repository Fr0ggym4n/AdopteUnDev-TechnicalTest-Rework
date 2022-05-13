import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import cors from 'cors';
import * as data from './subscription.json' assert {type: "json"};

const app = express();

const server = http.createServer(app);
const port = process.env.PORT || 3001;
dotenv.config();


app.get("/subscription", async (req, res, next) => {
    console.log("Hello form subscribe!", data);
});

server.listen(port, () => console.log(`Listening on port: ${port}`));