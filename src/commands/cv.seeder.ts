import { NestFactory } from '@nestjs/core';
import { AppModule } from "../app.module";
import { CvService } from '../cv/cv.service';
import { SkillService } from '../skill/skill.service';
import { UserService } from '../user/user.service';
import { randFullName, randEmail, randJobTitle, randFirstName, randNumber, randFilePath, randUserName, rand, randPassword, randSkill } from '@ngneat/falso';


async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    console.log('Database connection established.');

    const cvService = app.get(CvService);
    const cvs = Array(10).fill(null).map( () => ({
        name: randFullName(),
        firstname: randFirstName(),
        age: randNumber({min: 16, max: 70}),
        cin: randNumber({min: 1111, max: 9999}),
        path: randFilePath(),
        job: randJobTitle(),
    }))

    for (const cv of cvs) {
        await cvService.create(cv); // Assume `create` method exists in CvService
      }

    const userService = app.get(UserService);
    const users = Array(10).fill(null).map( () => ({
        username: randUserName(),
        email: randEmail(),
        password: randPassword()
    }))

    for (const user of users) {
        await userService.create(user); 
      }
    
    const skillService = app.get(SkillService);
    const skills = Array(10).fill(null).map( () => ({
        designation: randSkill(),
    }))

    for (const skill of skills) {
        await skillService.create(skill); 
      }

    console.log('Database seeded successfully!');
    await app.close();
}
bootstrap();
