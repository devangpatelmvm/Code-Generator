"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesCreateOrConnectWithoutColumnInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesCreateWithoutColumnInput_1 = require("../inputs/TablesCreateWithoutColumnInput");
const TablesWhereUniqueInput_1 = require("../inputs/TablesWhereUniqueInput");
let TablesCreateOrConnectWithoutColumnInput = class TablesCreateOrConnectWithoutColumnInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereUniqueInput_1.TablesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesWhereUniqueInput_1.TablesWhereUniqueInput)
], TablesCreateOrConnectWithoutColumnInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesCreateWithoutColumnInput_1.TablesCreateWithoutColumnInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesCreateWithoutColumnInput_1.TablesCreateWithoutColumnInput)
], TablesCreateOrConnectWithoutColumnInput.prototype, "create", void 0);
TablesCreateOrConnectWithoutColumnInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesCreateOrConnectWithoutColumnInput", {
        isAbstract: true
    })
], TablesCreateOrConnectWithoutColumnInput);
exports.TablesCreateOrConnectWithoutColumnInput = TablesCreateOrConnectWithoutColumnInput;
