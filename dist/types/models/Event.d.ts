import { Entity } from "@subql/types";
export declare class Event implements Entity {
    constructor(id: string);
    id: string;
    module: string;
    event: string;
    blockId: string;
    extrinsicId?: string;
    timestamp: Date;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<Event | undefined>;
    static getByModule(module: string): Promise<Event[] | undefined>;
    static create(record: any): Event;
}
