// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';


export class Epoch implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public blockId: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Epoch entity without an ID");
        await store.set('Epoch', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Epoch entity without an ID");
        await store.remove('Epoch', id.toString());
    }

    static async get(id:string): Promise<Epoch | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Epoch entity without an ID");
        const record = await store.get('Epoch', id.toString());
        if (record){
            return Epoch.create(record);
        }else{
            return;
        }
    }



    static create(record){
        let entity = new Epoch(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
