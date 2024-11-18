"use strict";
var ColumnsScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ColumnsScalarWhereInput = ColumnsScalarWhereInput_1 = class ColumnsScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColumnsScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColumnsScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColumnsScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ColumnsScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ColumnsScalarWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ColumnsScalarWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ColumnsScalarWhereInput.prototype, "constraint", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ColumnsScalarWhereInput.prototype, "tableId", void 0);
ColumnsScalarWhereInput = ColumnsScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsScalarWhereInput", {
        isAbstract: true
    })
], ColumnsScalarWhereInput);
exports.ColumnsScalarWhereInput = ColumnsScalarWhereInput;
