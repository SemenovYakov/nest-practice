import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('requests')
export class Request{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;
}