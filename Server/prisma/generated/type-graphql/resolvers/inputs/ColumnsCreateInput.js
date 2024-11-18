"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesCreateNestedOneWithoutColumnInput_1 = require("../inputs/TablesCreateNestedOneWithoutColumnInput");
let ColumnsCreateInput = class ColumnsCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsCreateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsCreateInput.prototype, "constraint", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesCreateNestedOneWithoutColumnInput_1.TablesCreateNestedOneWithoutColumnInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesCreateNestedOneWithoutColumnInput_1.TablesCreateNestedOneWithoutColumnInput)
], ColumnsCreateInput.prototype, "table", void 0);
ColumnsCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsCreateInput", {
        isAbstract: true
    })
], ColumnsCreateInput);
exports.ColumnsCreateInput = ColumnsCreateInput;
