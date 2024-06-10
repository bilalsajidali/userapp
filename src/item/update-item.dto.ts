import { CreateItemDTO } from "./create-item.dto";
import { IsOptional,IsNotEmpty,IsString,IsNumber } from "class-validator";

export class UpdateItemDTO extends CreateItemDTO{

    @IsOptional()
    img: string;
    
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description: string;
    

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsOptional()
    @IsNotEmpty()
    color: string;
    
    @IsOptional()
    @IsString()
    size: string;



}