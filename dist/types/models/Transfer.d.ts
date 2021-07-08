import { Entity } from "@subql/types";
export declare class Transfer implements Entity {
    constructor(id: string);
    id: string;
    amount?: bigint;
    assetId?: string;
    toId: string;
    fromId: string;
    eventId: string;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<Transfer | undefined>;
    static create(record: any): Transfer;
}
