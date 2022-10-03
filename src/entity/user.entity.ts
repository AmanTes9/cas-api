import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";

export enum User_status {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
  BLOCKED = "Blocked",
}

export enum RoleEnum {
  ADMIN = "ADMIN",
  USER = "USER",
  VERIFIER = "VERIFIER",
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    unique: true,
  })
  user_name: string;

  @Column({
    nullable: false,
  })
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @Column({
    type: "enum",
    enum: RoleEnum,
    default: RoleEnum.USER,
  })
  role: RoleEnum;

  @Column({
    type: "enum",
    enum: User_status,
    default: User_status.ACTIVE,
  })
  status: User_status;
}
