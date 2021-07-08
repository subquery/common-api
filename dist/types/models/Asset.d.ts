import { Entity } from "@subql/types";
export declare class Asset implements Entity {
    constructor(id: string);
    id: string;
    symbol: string;
    decimal: number;
    totalIssuance: bigint;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<Asset | undefined>;
    static getBySymbol(symbol: string): Promise<Asset[] | undefined>;
    static create(record: any): Asset;
}
