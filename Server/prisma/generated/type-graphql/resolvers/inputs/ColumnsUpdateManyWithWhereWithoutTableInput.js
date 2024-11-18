"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsUpdateManyWithWhereWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsScalarWhereInput_1 = require("../inputs/ColumnsScalarWhereInput");
const ColumnsUpdateManyMutationInput_1 = require("../inputs/ColumnsUpdateManyMutationInput");
let ColumnsUpdateManyWithWhereWithoutTableInput = class ColumnsUpdateManyWithWhereWithoutTableInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsScalarWhereInput_1.ColumnsScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColumnsScalarWhereInput_1.ColumnsScalarWhereInput)
], ColumnsUpdateManyWithWhereWithoutTableInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsUpdateManyMutationInput_1.ColumnsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColumnsUpdateManyMutationInput_1.ColumnsUpdateManyMutationInput)
], ColumnsUpdateManyWithWhereWithoutTableInput.prototype, "data", void 0);
ColumnsUpdateManyWithWhereWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsUpdateManyWithWhereWithoutTableInput", {
        isAbstract: true
    })
], ColumnsUpdateManyWithWhereWithoutTableInput);
exports.ColumnsUpdateManyWithWhereWithoutTableInput = ColumnsUpdateManyWithWhereWithoutTableInput;
