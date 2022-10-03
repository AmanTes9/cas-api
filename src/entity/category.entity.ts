import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Institutions } from "./companies.entity";
import { User } from "./user.entity";

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  category_name: string;

  @Column({
    nullable: false,
  })
  details: string;

  @OneToMany(() => Institutions, (company) => company.category)
  company: Institutions[];
}
