import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCvDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    firstname: string;
    @IsInt()
    @IsNotEmpty()
    age: number;

    @IsString()
    @IsNotEmpty()
    cin: string;

    @IsString()
    @IsNotEmpty()
    job: string;

    @IsString()
    path: string;
}
