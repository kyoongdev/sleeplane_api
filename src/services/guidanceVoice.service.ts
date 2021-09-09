import { GuidanceVoice, AirLine } from "@src/db/entity";
import { getRepository } from "typeorm";

const getGuidanceVoiceByName = async (name: string): Promise<String> => {
  const guidanceVoice: GuidanceVoice | undefined = await getRepository(
    GuidanceVoice
  )
    .createQueryBuilder("guidanceVoice")
    .leftJoinAndSelect("guidanceVoice.airLine", "airLine")
    .where("airLine.name = :name", { name: name })
    .getOne();

  if (!guidanceVoice || typeof guidanceVoice === undefined) {
    throw Error("guidanceVoice information is empty");
  }

  if (!guidanceVoice.voiceFile) {
    throw Error("Voice file does not exist");
  }

  return guidanceVoice.voiceFile;
};

export default {
  getGuidanceVoiceByName,
};
