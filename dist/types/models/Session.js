"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
const tslib_1 = require("tslib");
const assert_1 = tslib_1.__importDefault(require("assert"));
class Session {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        assert_1.default(id !== null, "Cannot save Session entity without an ID");
        await store.set('Session', id.toString(), this);
    }
    static async remove(id) {
        assert_1.default(id !== null, "Cannot remove Session entity without an ID");
        await store.remove('Session', id.toString());
    }
    static async get(id) {
        assert_1.default((id !== null && id !== undefined), "Cannot get Session entity without an ID");
        const record = await store.get('Session', id.toString());
        if (record) {
            return Session.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        let entity = new Session(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.Session = Session;
