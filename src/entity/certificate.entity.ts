import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Certificate_Provider } from "./certificate_provider.entity";

export enum CompanyStatus {
  PENDING = "Pending",
  ACCEPTED = "Accepted",
  BLOCKED = "Blocked",
}

@Entity()
export class User_Certificate extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  certificate_name: string;

  @ManyToOne(() => Certificate_Provider, (provider) => provider.certificates)
  provider: Certificate_Provider

  @Column({
    nullable: false,
  })
  certificate_owner_name: string;

  @Column()
  certificate_type: string;

  @Column()
  issued_date: string;

  @Column()
  certificate_uid: string;

  @CreateDateColumn()
  created_at: Date;


}
