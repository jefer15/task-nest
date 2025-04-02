import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
@PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({unique: true})
  email: string

  @Column({ nullable: false })
  password: string;
}