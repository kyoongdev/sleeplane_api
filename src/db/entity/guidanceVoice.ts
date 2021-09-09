import {
  Column,
  PrimaryColumn,
  BaseEntity,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  NamingStrategyNotFoundError,
} from "typeorm";
import { AirLine } from "./airLine";

@Entity()
export class GuidanceVoice extends BaseEntity {
  @OneToOne((type) => AirLine, (airLine) => airLine.guidanceVoice)
  airLine: AirLine;

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  voiceFile: string;
}
