import fastify from "fastify";
import dotenv from "dotenv";
import db from "./db/db";
import airLine from "./controllers/airLine.controllers";
import guidanceVoice from "./controllers/guidanceVoice.controller";

dotenv.config();

const server = fastify();

server.register(db);

server.register(airLine, { prefix: "/airLine" });
server.register(guidanceVoice, { prefix: "/guidanceVoice" });

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    throw new Error("error");
  }
  console.log(`Server listening at ${address}`);
});
