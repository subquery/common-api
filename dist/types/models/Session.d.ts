import { Entity } from "@subql/types";
export declare class Session implements Entity {
    constructor(id: string);
    id: string;
    blockId: string;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<Session | undefined>;
    static create(record: any): Session;
}
