import { AirLine } from "@src/db/entity";
import { getRepository } from "typeorm";
import { AirLineInterface } from "@src/interfaces/airLine.interface";

const getAllAirLines = async (): Promise<AirLine[]> => {
  const airLines: AirLine[] = await getRepository(AirLine)
    .createQueryBuilder("airLine")
    .getMany();

  if (!airLines) {
    throw new Error("airline information is empty");
  }
  return airLines;
};

const getAirLineBySerialNum = async (serialNum: number): Promise<AirLine> => {
  const airLine: AirLine | undefined = await getRepository(AirLine)
    .createQueryBuilder("airLine")
    .where("airLine.airLineSerialNum = :airLineSerialNum", {
      airLineSerialNum: serialNum,
    })
    .getOne();

  if (!airLine || typeof airLine === undefined) {
    throw new Error("airline information is empty");
  }

  return airLine;
};

const getAirLineByName = async (name: string): Promise<AirLine> => {
  const airLine: AirLine | undefined = await getRepository(AirLine)
    .createQueryBuilder("airLine")
    .where("airLine.name = :name", { name: name })
    .getOne();

  if (!airLine || typeof airLine === undefined) {
    throw new Error("airline information is empty");
  }

  return airLine;
};

const increaseUserNum = async (name: string): Promise<String> => {
  try {
    await getRepository(AirLine)
      .createQueryBuilder("airLine")
      .update(AirLine)
      .set({ passengersNum: () => "airLine.passengersNum + 1" })
      .where("airLine.name = :name", { name })
      .execute();
  } catch (err) {
    throw new Error(err);
  }

  return "increasement successed";
};

export default {
  getAllAirLines,
  getAirLineBySerialNum,
  getAirLineByName,
  increaseUserNum,
};
