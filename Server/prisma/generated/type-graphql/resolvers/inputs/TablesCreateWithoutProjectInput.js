"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesCreateWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsCreateNestedManyWithoutTableInput_1 = require("../inputs/ColumnsCreateNestedManyWithoutTableInput");
let TablesCreateWithoutProjectInput = class TablesCreateWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesCreateWithoutProjectInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsCreateNestedManyWithoutTableInput_1.ColumnsCreateNestedManyWithoutTableInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsCreateNestedManyWithoutTableInput_1.ColumnsCreateNestedManyWithoutTableInput)
], TablesCreateWithoutProjectInput.prototype, "column", void 0);
TablesCreateWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesCreateWithoutProjectInput", {
        isAbstract: true
    })
], TablesCreateWithoutProjectInput);
exports.TablesCreateWithoutProjectInput = TablesCreateWithoutProjectInput;
