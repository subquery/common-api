// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';


export class Event implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public module: string;

    public event: string;

    public blockId: string;

    public extrinsicId?: string;

    public timestamp: Date;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Event entity without an ID");
        await store.set('Event', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Event entity without an ID");
        await store.remove('Event', id.toString());
    }

    static async get(id:string): Promise<Event | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Event entity without an ID");
        const record = await store.get('Event', id.toString());
        if (record){
            return Event.create(record);
        }else{
            return;
        }
    }


    static async getByModule(module: string): Promise<Event[] | undefined>{
      
      const records = await store.getByField('Event', 'module', module);
      return records.map(record => Event.create(record));
      
    }


    static create(record){
        let entity = new Event(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
