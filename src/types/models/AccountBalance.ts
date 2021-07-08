// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';

import {
    LockedBalance,
} from '../interfaces'


export class AccountBalance implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public assetId: string;

    public accountId: string;

    public freeAmount: bigint;

    public reservedAmount: bigint;

    public locked?: LockedBalance[];


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save AccountBalance entity without an ID");
        await store.set('AccountBalance', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove AccountBalance entity without an ID");
        await store.remove('AccountBalance', id.toString());
    }

    static async get(id:string): Promise<AccountBalance | undefined>{
        assert((id !== null && id !== undefined), "Cannot get AccountBalance entity without an ID");
        const record = await store.get('AccountBalance', id.toString());
        if (record){
            return AccountBalance.create(record);
        }else{
            return;
        }
    }



    static create(record){
        let entity = new AccountBalance(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
