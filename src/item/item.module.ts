import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema, item } from './item.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: item.name,
      schema:ItemSchema,
    },]),
  ],
  controllers: [ItemController],
  providers: [ItemService]
})
export class ItemModule {}
