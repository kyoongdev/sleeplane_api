import fp from "fastify-plugin";
import { createConnection, getConnectionOptions } from "typeorm";
import * as model from "./entity";

export default fp(async (fastify) => {
  try {
    const connectionOptions = await getConnectionOptions();
    console.log(connectionOptions);
    const connection = await createConnection(connectionOptions);

    // const guidance1 = new model.GuidanceVoice();
    // guidance1.voiceFile = "example path";
    // await connection.manager.save(guidance1);

    // const airLine1 = new model.AirLine();
    // airLine1.name = "korea";
    // airLine1.arrival = 1100;
    // airLine1.departure = 1120;
    // airLine1.description = "Join example";
    // airLine1.guidanceVoice = guidance1;
    // await connection.manager.save(airLine1);

    // const airLine = await connection
    //   .getRepository(model.AirLine)
    //   .createQueryBuilder("airLine")
    //   .leftJoinAndSelect("airLine.guidanceVoice", "guidanceVoice")
    //   .getMany();

    // console.log(airLine);
  } catch (error) {
    //TODO : 콘솔로그에서 로깅으로 바꿔야함
    console.log(error);
  }
});
