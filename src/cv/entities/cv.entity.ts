import { CrudEntity } from "../../CRUD/crud.entity";
import { SkillEntity } from "../../skill/entities/skill.entity";
import { UserEntity } from "../../user/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

 @Entity('cv')
export class CvEntity extends CrudEntity {
     

     @Column()
     name: string;

     @Column()
     firstname: string;

     @Column()
     age: number;

     @Column()
     cin: string;

     @Column()
     job: string;

     @Column()
     path: string;

     @ManyToOne(
        () =>UserEntity,
        (user: UserEntity) => user.cvs,
        {
            cascade: true,
            eager: true
        },
     ) user: UserEntity;

     @ManyToMany( 
        () => SkillEntity,
        {
            cascade: true,
            eager: true
        } )
    @JoinTable({
        name: "skill_cv",
        joinColumn: {
            name: "cv_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "skill_id",
            referencedColumnName: "id"

        }
        }) skills: SkillEntity[];
}

