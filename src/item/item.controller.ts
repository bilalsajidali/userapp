import { Body, Controller, Delete, Get,Param,Patch,Post } from '@nestjs/common';
import { CreateItemDTO } from './create-item.dto';
import { ItemService } from './item.service';
import { UpdateItemDTO } from './update-item.dto';



@Controller('item')
export class ItemController {
    constructor(private itemService:ItemService){}


    //add item
    @Post()
    addItem(@Body() createItemDTO:CreateItemDTO){
        return this.itemService.addItem(createItemDTO);
    }



    //get all items
    @Get()
    getItem(){
        return this.itemService.getItem()
    }


    //get by id
    @Get(":id")
    getItembyid(@Param("id") id:string){
        return this.itemService.getItembyid(id)
    }

    //update item
    @Patch(":id")
    updateItem(@Param("id") id:string , @Body() updateItemDTO:UpdateItemDTO){
        return this.itemService.updateItem(id,updateItemDTO);
    }


    //delete item
    @Delete(":id")
    deleteItem(@Param('id') id:string){
        return this.itemService.deleteItem(id)

    }
    


    

}
