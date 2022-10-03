import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User_Certificate } from "./certificate.entity";

export enum provider_status {
  VERIFIED_ACTIVE = "verified_active",
  VERIFIED_NOT_ACTIVE = "verified_not_active",
  UNKNOWN = "unknown",
}

@Entity()
export class Companies extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  provider_name: string;

  @Column({
    nullable: false,
  })
  details: string;

  @Column()
  address: string; // provider

  @Column()
  email: string;

  @Column({
    enum: provider_status,
    default: provider_status.UNKNOWN,
    type: "enum",
  })
  status: provider_status;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  phone: string;

  @OneToMany(() => User_Certificate, (certificate) => certificate.provider)
  certificates: User_Certificate[];
}
