import { PrimaryGeneratedColumn } from "typeorm";

export class CrudEntity {
    @PrimaryGeneratedColumn()
    id: number;
}