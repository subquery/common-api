import { Entity } from "@subql/types";
import { LockedBalance } from '../interfaces';
export declare class AccountBalance implements Entity {
    constructor(id: string);
    id: string;
    assetId: string;
    accountId: string;
    freeAmount: bigint;
    reservedAmount: bigint;
    locked?: LockedBalance[];
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<AccountBalance | undefined>;
    static create(record: any): AccountBalance;
}
