// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';


export class Session implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public blockId: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Session entity without an ID");
        await store.set('Session', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Session entity without an ID");
        await store.remove('Session', id.toString());
    }

    static async get(id:string): Promise<Session | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Session entity without an ID");
        const record = await store.get('Session', id.toString());
        if (record){
            return Session.create(record);
        }else{
            return;
        }
    }



    static create(record){
        let entity = new Session(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
