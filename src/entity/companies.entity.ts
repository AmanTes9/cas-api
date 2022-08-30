import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";

export enum CompanyStatus {
  PENDING = "Pending",
  ACCEPTED = "Accepted",
  BLOCKED = "Blocked",
}

@Entity()
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  company_name: string;

  @Column()
  business_address: string;

  @Column()
  company_email: string;

  @Column()
  phone_number: string;

  @Column()
  tin: string;

  @Column()
  category: string;

  @Column({
    enum: CompanyStatus,
    default: CompanyStatus.PENDING,
    type: "enum",
  })
  status: CompanyStatus;

  @CreateDateColumn()
  created_at: Date;
}
