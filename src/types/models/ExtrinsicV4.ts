// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';


export class ExtrinsicV4 implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public module: string;

    public call: string;

    public blockId?: string;

    public success: boolean;

    public isSigned: boolean;

    public nonce: number;

    public signature: string;

    public parameters: string;

    public sender: string;

    public fee: bigint;

    public tip: bigint;

    public lifeTime?: number[];

    public version: number;

    public extension?: string;

    public timestamp: Date;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save ExtrinsicV4 entity without an ID");
        await store.set('ExtrinsicV4', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove ExtrinsicV4 entity without an ID");
        await store.remove('ExtrinsicV4', id.toString());
    }

    static async get(id:string): Promise<ExtrinsicV4 | undefined>{
        assert((id !== null && id !== undefined), "Cannot get ExtrinsicV4 entity without an ID");
        const record = await store.get('ExtrinsicV4', id.toString());
        if (record){
            return ExtrinsicV4.create(record);
        }else{
            return;
        }
    }


    static async getByModule(module: string): Promise<ExtrinsicV4[] | undefined>{
      
      const records = await store.getByField('ExtrinsicV4', 'module', module);
      return records.map(record => ExtrinsicV4.create(record));
      
    }


    static create(record){
        let entity = new ExtrinsicV4(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
