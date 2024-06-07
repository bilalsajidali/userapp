import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { item } from './item.schema';
import { CreateItemDTO } from './create-item.dto';
import { UpdateItemDTO } from './update-item.dto';



@Injectable()
export class ItemService {
    constructor(@InjectModel(item.name) private itemModel: Model<item>){}


    addItem(createItemDTO:CreateItemDTO){
        const newItem = new this.itemModel(createItemDTO)
        return newItem.save();
    }

    getItem(){
        return this.itemModel.find();
    }

    getItembyid(id:string){
        return this.itemModel.findById(id);
    }

    updateItem(id:string ,updateItem:UpdateItemDTO){
        return this.itemModel.findByIdAndUpdate(id,updateItem);
    }

    deleteItem(id:string){
        return this.itemModel.findByIdAndDelete(id);
    }
   



}
