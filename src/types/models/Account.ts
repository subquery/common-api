// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';

import {
    Identity,
} from '../interfaces'


export class Account implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public pubKey: string;

    public identity?: Identity;

    public nonce?: number;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Account entity without an ID");
        await store.set('Account', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Account entity without an ID");
        await store.remove('Account', id.toString());
    }

    static async get(id:string): Promise<Account | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Account entity without an ID");
        const record = await store.get('Account', id.toString());
        if (record){
            return Account.create(record);
        }else{
            return;
        }
    }


    static async getByPubKey(pubKey: string): Promise<Account[] | undefined>{
      
      const records = await store.getByField('Account', 'pubKey', pubKey);
      return records.map(record => Account.create(record));
      
    }


    static create(record){
        let entity = new Account(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
