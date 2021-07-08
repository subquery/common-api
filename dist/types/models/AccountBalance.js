"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountBalance = void 0;
const tslib_1 = require("tslib");
const assert_1 = tslib_1.__importDefault(require("assert"));
class AccountBalance {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        assert_1.default(id !== null, "Cannot save AccountBalance entity without an ID");
        await store.set('AccountBalance', id.toString(), this);
    }
    static async remove(id) {
        assert_1.default(id !== null, "Cannot remove AccountBalance entity without an ID");
        await store.remove('AccountBalance', id.toString());
    }
    static async get(id) {
        assert_1.default((id !== null && id !== undefined), "Cannot get AccountBalance entity without an ID");
        const record = await store.get('AccountBalance', id.toString());
        if (record) {
            return AccountBalance.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        let entity = new AccountBalance(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.AccountBalance = AccountBalance;
