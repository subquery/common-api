"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const tslib_1 = require("tslib");
const assert_1 = tslib_1.__importDefault(require("assert"));
class Account {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        assert_1.default(id !== null, "Cannot save Account entity without an ID");
        await store.set('Account', id.toString(), this);
    }
    static async remove(id) {
        assert_1.default(id !== null, "Cannot remove Account entity without an ID");
        await store.remove('Account', id.toString());
    }
    static async get(id) {
        assert_1.default((id !== null && id !== undefined), "Cannot get Account entity without an ID");
        const record = await store.get('Account', id.toString());
        if (record) {
            return Account.create(record);
        }
        else {
            return;
        }
    }
    static async getByPubKey(pubKey) {
        const records = await store.getByField('Account', 'pubKey', pubKey);
        return records.map(record => Account.create(record));
    }
    static create(record) {
        let entity = new Account(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.Account = Account;
