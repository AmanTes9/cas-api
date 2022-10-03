import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Category } from "./category.entity";
import { User_Certificate } from "./certificate.entity";
import { User } from "./user.entity";

export enum CompanyStatus {
  PENDING = "Pending",
  ACCEPTED = "Accepted",
  VERIFIED = "VERIFIED",
  BLOCKED = "Blocked",
}

@Entity()
export class Institutions extends BaseEntity {
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
  company_license: string;

  @Column()
  company_logo: string;

  @Column()
  tin: string;

  @ManyToOne(() => Category, (category) => category.company)
  category: Category;

  @OneToMany(() => User_Certificate, (certificate) => certificate.provider)
  certificates: User_Certificate[];

  @Column({
    enum: CompanyStatus,
    default: CompanyStatus.PENDING,
    type: "enum",
  })
  status: CompanyStatus;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @CreateDateColumn()
  created_at: Date;
}
