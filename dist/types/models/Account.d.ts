import { Entity } from "@subql/types";
import { Identity } from '../interfaces';
export declare class Account implements Entity {
    constructor(id: string);
    id: string;
    pubKey: string;
    identity?: Identity;
    nonce?: number;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<Account | undefined>;
    static getByPubKey(pubKey: string): Promise<Account[] | undefined>;
    static create(record: any): Account;
}
