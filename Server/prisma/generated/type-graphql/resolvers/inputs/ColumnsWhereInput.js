"use strict";
var ColumnsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TablesRelationFilter_1 = require("../inputs/TablesRelationFilter");
let ColumnsWhereInput = ColumnsWhereInput_1 = class ColumnsWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColumnsWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColumnsWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColumnsWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ColumnsWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ColumnsWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ColumnsWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ColumnsWhereInput.prototype, "constraint", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesRelationFilter_1.TablesRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesRelationFilter_1.TablesRelationFilter)
], ColumnsWhereInput.prototype, "table", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ColumnsWhereInput.prototype, "tableId", void 0);
ColumnsWhereInput = ColumnsWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsWhereInput", {
        isAbstract: true
    })
], ColumnsWhereInput);
exports.ColumnsWhereInput = ColumnsWhereInput;
