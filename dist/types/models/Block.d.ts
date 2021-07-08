import { Entity } from "@subql/types";
export declare class Block implements Entity {
    constructor(id: string);
    id: string;
    hash: string;
    timestamp: Date;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<Block | undefined>;
    static getByHash(hash: string): Promise<Block[] | undefined>;
    static create(record: any): Block;
}
