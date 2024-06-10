
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class item {
    @Prop()
    img: string;
    @Prop()
    title: string;
    @Prop()
    description: string;
    @Prop()
    amount: number;
    @Prop()
    color: string;
    @Prop()
    size: string;
}

export const ItemSchema = SchemaFactory.createForClass(item);
