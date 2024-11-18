"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByColumnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsOrderByWithAggregationInput_1 = require("../../../inputs/ColumnsOrderByWithAggregationInput");
const ColumnsScalarWhereWithAggregatesInput_1 = require("../../../inputs/ColumnsScalarWhereWithAggregatesInput");
const ColumnsWhereInput_1 = require("../../../inputs/ColumnsWhereInput");
const ColumnsScalarFieldEnum_1 = require("../../../../enums/ColumnsScalarFieldEnum");
let GroupByColumnsArgs = class GroupByColumnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsWhereInput_1.ColumnsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsWhereInput_1.ColumnsWhereInput)
], GroupByColumnsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsOrderByWithAggregationInput_1.ColumnsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByColumnsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsScalarFieldEnum_1.ColumnsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByColumnsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsScalarWhereWithAggregatesInput_1.ColumnsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsScalarWhereWithAggregatesInput_1.ColumnsScalarWhereWithAggregatesInput)
], GroupByColumnsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByColumnsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByColumnsArgs.prototype, "skip", void 0);
GroupByColumnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByColumnsArgs);
exports.GroupByColumnsArgs = GroupByColumnsArgs;
