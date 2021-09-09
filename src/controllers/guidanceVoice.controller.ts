import fp from "fastify-plugin";
import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import guidanceVoice from "../services/guidanceVoice.service";

export default function (fastify: FastifyInstance, opts: any, done: any) {
  fastify.post(
    "/name",
    async (
      req: FastifyRequest<{ Body: { name: string } }>,
      res: FastifyReply
    ) => {
      const voiceFile = await guidanceVoice.getGuidanceVoiceByName(
        req.body.name
      );
      if (voiceFile) {
        res.code(200).send({ voiceFile: voiceFile });
      } else {
        res.code(404).send("VOICE FILE NOT FOUND");
      }
    }
  );

  done();
}
