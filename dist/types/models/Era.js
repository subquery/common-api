"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Era = void 0;
const tslib_1 = require("tslib");
const assert_1 = tslib_1.__importDefault(require("assert"));
class Era {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        assert_1.default(id !== null, "Cannot save Era entity without an ID");
        await store.set('Era', id.toString(), this);
    }
    static async remove(id) {
        assert_1.default(id !== null, "Cannot remove Era entity without an ID");
        await store.remove('Era', id.toString());
    }
    static async get(id) {
        assert_1.default((id !== null && id !== undefined), "Cannot get Era entity without an ID");
        const record = await store.get('Era', id.toString());
        if (record) {
            return Era.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        let entity = new Era(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.Era = Era;
