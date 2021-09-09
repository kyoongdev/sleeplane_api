import fp from "fastify-plugin";
import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import airLine from "../services/airLine.service";
import airLineService from "../services/airLine.service";

export default function (fastify: FastifyInstance, opts: any, done: any) {
  fastify.get("/all", async (req: FastifyRequest, res: FastifyReply) => {
    const airLines = await airLine.getAllAirLines();

    if (airLines) {
      res.code(200).send({ airLines });
    } else {
      res.code(404).send("NO AIR LINES FOUND");
    }
  });

  fastify.get(
    "/serialNum",
    async (
      req: FastifyRequest<{ Body: { serialNum: number } }>,
      res: FastifyReply
    ) => {
      const airLine = await airLineService.getAirLineBySerialNum(
        req.body.serialNum
      );

      if (airLine) {
        res.code(200).send({ airLine });
      } else {
        res.code(404).send("NO AIR LINE FOUND");
      }
    }
  );
  fastify.get(
    "/name",
    async (
      req: FastifyRequest<{ Body: { name: string } }>,
      res: FastifyReply
    ) => {
      const airLine = await airLineService.getAirLineByName(req.body.name);

      if (airLine) {
        res.code(200).send({ airLine });
      } else {
        res.code(404).send("NO AIR LINE FOUND");
      }
    }
  );

  fastify.get(
    "/increase",
    async (
      req: FastifyRequest<{ Body: { name: string } }>,
      res: FastifyReply
    ) => {
      const result = await airLineService.increaseUserNum(req.body.name);

      if (result === "increasement successed") {
        res.code(200).send(result);
      } else {
        res.code(404).send("FAILED TO INCREASE PASSENGER NUMBER");
      }
    }
  );

  done();
}
