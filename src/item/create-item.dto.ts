import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";




export class CreateItemDTO{
    
    @IsOptional()
    img: string;
    
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsString()
    description : string;
    
    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    color: string;
    
    @IsOptional()
    @IsString()
    size: string;
}