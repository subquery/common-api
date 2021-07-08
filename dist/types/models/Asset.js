"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asset = void 0;
const tslib_1 = require("tslib");
const assert_1 = tslib_1.__importDefault(require("assert"));
class Asset {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        assert_1.default(id !== null, "Cannot save Asset entity without an ID");
        await store.set('Asset', id.toString(), this);
    }
    static async remove(id) {
        assert_1.default(id !== null, "Cannot remove Asset entity without an ID");
        await store.remove('Asset', id.toString());
    }
    static async get(id) {
        assert_1.default((id !== null && id !== undefined), "Cannot get Asset entity without an ID");
        const record = await store.get('Asset', id.toString());
        if (record) {
            return Asset.create(record);
        }
        else {
            return;
        }
    }
    static async getBySymbol(symbol) {
        const records = await store.getByField('Asset', 'symbol', symbol);
        return records.map(record => Asset.create(record));
    }
    static create(record) {
        let entity = new Asset(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.Asset = Asset;
