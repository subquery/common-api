// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';


export class Block implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public hash: string;

    public timestamp: Date;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Block entity without an ID");
        await store.set('Block', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Block entity without an ID");
        await store.remove('Block', id.toString());
    }

    static async get(id:string): Promise<Block | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Block entity without an ID");
        const record = await store.get('Block', id.toString());
        if (record){
            return Block.create(record);
        }else{
            return;
        }
    }


    static async getByHash(hash: string): Promise<Block[] | undefined>{
      
      const records = await store.getByField('Block', 'hash', hash);
      return records.map(record => Block.create(record));
      
    }


    static create(record){
        let entity = new Block(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
