"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesCreateNestedOneWithoutColumnInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesCreateOrConnectWithoutColumnInput_1 = require("../inputs/TablesCreateOrConnectWithoutColumnInput");
const TablesCreateWithoutColumnInput_1 = require("../inputs/TablesCreateWithoutColumnInput");
const TablesWhereUniqueInput_1 = require("../inputs/TablesWhereUniqueInput");
let TablesCreateNestedOneWithoutColumnInput = class TablesCreateNestedOneWithoutColumnInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesCreateWithoutColumnInput_1.TablesCreateWithoutColumnInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesCreateWithoutColumnInput_1.TablesCreateWithoutColumnInput)
], TablesCreateNestedOneWithoutColumnInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesCreateOrConnectWithoutColumnInput_1.TablesCreateOrConnectWithoutColumnInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesCreateOrConnectWithoutColumnInput_1.TablesCreateOrConnectWithoutColumnInput)
], TablesCreateNestedOneWithoutColumnInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereUniqueInput_1.TablesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesWhereUniqueInput_1.TablesWhereUniqueInput)
], TablesCreateNestedOneWithoutColumnInput.prototype, "connect", void 0);
TablesCreateNestedOneWithoutColumnInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesCreateNestedOneWithoutColumnInput", {
        isAbstract: true
    })
], TablesCreateNestedOneWithoutColumnInput);
exports.TablesCreateNestedOneWithoutColumnInput = TablesCreateNestedOneWithoutColumnInput;
