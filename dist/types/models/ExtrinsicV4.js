"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtrinsicV4 = void 0;
const tslib_1 = require("tslib");
const assert_1 = tslib_1.__importDefault(require("assert"));
class ExtrinsicV4 {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        assert_1.default(id !== null, "Cannot save ExtrinsicV4 entity without an ID");
        await store.set('ExtrinsicV4', id.toString(), this);
    }
    static async remove(id) {
        assert_1.default(id !== null, "Cannot remove ExtrinsicV4 entity without an ID");
        await store.remove('ExtrinsicV4', id.toString());
    }
    static async get(id) {
        assert_1.default((id !== null && id !== undefined), "Cannot get ExtrinsicV4 entity without an ID");
        const record = await store.get('ExtrinsicV4', id.toString());
        if (record) {
            return ExtrinsicV4.create(record);
        }
        else {
            return;
        }
    }
    static async getByModule(module) {
        const records = await store.getByField('ExtrinsicV4', 'module', module);
        return records.map(record => ExtrinsicV4.create(record));
    }
    static create(record) {
        let entity = new ExtrinsicV4(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.ExtrinsicV4 = ExtrinsicV4;
