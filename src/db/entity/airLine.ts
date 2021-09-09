import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { GuidanceVoice } from "./guidanceVoice";

@Entity()
export class AirLine extends BaseEntity {
  @OneToOne((type) => GuidanceVoice, (guidanceVocie) => guidanceVocie.airLine, {
    nullable: true,
  })
  @JoinColumn()
  guidanceVoice: GuidanceVoice;

  @PrimaryGeneratedColumn()
  airLineSerialNum: number;

  @Column()
  name: string;

  @Column()
  departure: number;

  @Column()
  arrival: number;

  @Column()
  description: string;

  @Column({ default: 0 })
  passengersNum: number;
}
