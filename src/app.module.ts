import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CvModule } from './cv/cv.module';
import { UserModule } from './user/user.module';
import { SkillModule } from './skill/skill.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { CvEntity } from './cv/entities/cv.entity';
import { SkillEntity } from './skill/entities/skill.entity';
import { ConfigModule } from '@nestjs/config';
import { CrudEntity } from './CRUD/crud.entity';

@Module({
  imports: [CvModule, UserModule, SkillModule, 
    ConfigModule.forRoot({isGlobal: true,}),
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: parseInt('5432'),
          username: 'postgres',
          password: 'admin',
          database: 'cvmanager',
          entities: [CvEntity, UserEntity, SkillEntity, CrudEntity], // You can add other entities here if needed
          synchronize: true,
          }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
