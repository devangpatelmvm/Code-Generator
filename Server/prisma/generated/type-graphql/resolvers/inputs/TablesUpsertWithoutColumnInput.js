"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesUpsertWithoutColumnInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesCreateWithoutColumnInput_1 = require("../inputs/TablesCreateWithoutColumnInput");
const TablesUpdateWithoutColumnInput_1 = require("../inputs/TablesUpdateWithoutColumnInput");
let TablesUpsertWithoutColumnInput = class TablesUpsertWithoutColumnInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesUpdateWithoutColumnInput_1.TablesUpdateWithoutColumnInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesUpdateWithoutColumnInput_1.TablesUpdateWithoutColumnInput)
], TablesUpsertWithoutColumnInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesCreateWithoutColumnInput_1.TablesCreateWithoutColumnInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesCreateWithoutColumnInput_1.TablesCreateWithoutColumnInput)
], TablesUpsertWithoutColumnInput.prototype, "create", void 0);
TablesUpsertWithoutColumnInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesUpsertWithoutColumnInput", {
        isAbstract: true
    })
], TablesUpsertWithoutColumnInput);
exports.TablesUpsertWithoutColumnInput = TablesUpsertWithoutColumnInput;
