import { CrudEntity } from "../../CRUD/crud.entity";
import { CvEntity } from "../../cv/entities/cv.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('skill')
export class SkillEntity extends CrudEntity {

    @Column()
    designation: string;

    @ManyToMany(() => CvEntity)
    cvs: CvEntity[];
}
