import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    ManyToOne,
  } from "typeorm";
import { Role } from "./role.entity";
  
  export enum User_status {
    ACTIVE = "Active",
    INACTIVE = "Inactive",
    BLOCKED = "Blocked",
  }
  
  @Entity()
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({
      nullable: false,
    })
    user_name: string;
  
    @Column({
      nullable: false,
    })
    password: string;
  
    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => Role, (role) => role.users)
    role: Role;
}
  