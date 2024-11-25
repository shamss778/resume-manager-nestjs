import { CvEntity } from "../../cv/entities/cv.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CrudEntity } from "../../CRUD/crud.entity";

@Entity('user')
export class UserEntity extends CrudEntity {

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(
        () => CvEntity, 
        (cv: CvEntity) => cv.user ,)
    cvs: CvEntity[];
}
