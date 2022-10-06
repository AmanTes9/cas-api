import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Institutions } from "./companies.entity";

export enum CertificateStatus {
  ACTIVE = "Active",
  BLOCKED = "Blocked",
}

@Entity()
export class User_Certificate extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({
    nullable: false,
  })
  certificate_name: string;

  @ManyToOne(() => Institutions, (provider) => provider.certificates)
  provider: Institutions;

  @Column({
    nullable: false,
  })
  certificate_owner_name: string;

  @Column()
  certificate_type: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column({
    enum: CertificateStatus,
    default: CertificateStatus.ACTIVE,
    type: "enum",
  })
  status: CertificateStatus;

  @Column()
  issued_date: string;

  @CreateDateColumn()
  created_at: Date;
}
