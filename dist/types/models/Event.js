"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const tslib_1 = require("tslib");
const assert_1 = tslib_1.__importDefault(require("assert"));
class Event {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        assert_1.default(id !== null, "Cannot save Event entity without an ID");
        await store.set('Event', id.toString(), this);
    }
    static async remove(id) {
        assert_1.default(id !== null, "Cannot remove Event entity without an ID");
        await store.remove('Event', id.toString());
    }
    static async get(id) {
        assert_1.default((id !== null && id !== undefined), "Cannot get Event entity without an ID");
        const record = await store.get('Event', id.toString());
        if (record) {
            return Event.create(record);
        }
        else {
            return;
        }
    }
    static async getByModule(module) {
        const records = await store.getByField('Event', 'module', module);
        return records.map(record => Event.create(record));
    }
    static create(record) {
        let entity = new Event(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.Event = Event;
