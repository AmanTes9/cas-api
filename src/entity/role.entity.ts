import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    ManyToOne,
    OneToMany,
  } from "typeorm";
import { User } from "./user.entity";
  
  @Entity()
  export class Role extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({
      nullable: false,
    })
    role_name: string;
  
    @Column({
      nullable: false,
    })
    detail: string;
  
    @OneToMany(() => User, (user) => user.role)
    users: User[];
  
  }
  