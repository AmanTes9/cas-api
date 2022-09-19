import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    ManyToOne,
    OneToOne,
    JoinColumn,
  } from "typeorm";
import { User_Certificate } from "./certificate.entity";
  
  @Entity()
  export class Certificate_UID extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({
      nullable: false,
    })
    UUID: string;
  
    @Column()
    Certificate_Image: string;

    @OneToOne(() => User_Certificate)
    @JoinColumn()
    certificate: User_Certificate;

  }
  