"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Epoch = void 0;
const tslib_1 = require("tslib");
const assert_1 = tslib_1.__importDefault(require("assert"));
class Epoch {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        assert_1.default(id !== null, "Cannot save Epoch entity without an ID");
        await store.set('Epoch', id.toString(), this);
    }
    static async remove(id) {
        assert_1.default(id !== null, "Cannot remove Epoch entity without an ID");
        await store.remove('Epoch', id.toString());
    }
    static async get(id) {
        assert_1.default((id !== null && id !== undefined), "Cannot get Epoch entity without an ID");
        const record = await store.get('Epoch', id.toString());
        if (record) {
            return Epoch.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        let entity = new Epoch(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.Epoch = Epoch;
