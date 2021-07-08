import { Entity } from "@subql/types";
export declare class ExtrinsicV4 implements Entity {
    constructor(id: string);
    id: string;
    module: string;
    call: string;
    blockId?: string;
    success: boolean;
    isSigned: boolean;
    nonce: number;
    signature: string;
    parameters: string;
    sender: string;
    fee: bigint;
    tip: bigint;
    lifeTime?: number[];
    version: number;
    extension?: string;
    timestamp: Date;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<ExtrinsicV4 | undefined>;
    static getByModule(module: string): Promise<ExtrinsicV4[] | undefined>;
    static create(record: any): ExtrinsicV4;
}
