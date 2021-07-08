// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';


export class Asset implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public symbol: string;

    public decimal: number;

    public totalIssuance: bigint;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Asset entity without an ID");
        await store.set('Asset', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Asset entity without an ID");
        await store.remove('Asset', id.toString());
    }

    static async get(id:string): Promise<Asset | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Asset entity without an ID");
        const record = await store.get('Asset', id.toString());
        if (record){
            return Asset.create(record);
        }else{
            return;
        }
    }


    static async getBySymbol(symbol: string): Promise<Asset[] | undefined>{
      
      const records = await store.getByField('Asset', 'symbol', symbol);
      return records.map(record => Asset.create(record));
      
    }


    static create(record){
        let entity = new Asset(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
