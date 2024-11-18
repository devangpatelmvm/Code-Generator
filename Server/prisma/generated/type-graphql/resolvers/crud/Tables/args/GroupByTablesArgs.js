"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTablesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesOrderByWithAggregationInput_1 = require("../../../inputs/TablesOrderByWithAggregationInput");
const TablesScalarWhereWithAggregatesInput_1 = require("../../../inputs/TablesScalarWhereWithAggregatesInput");
const TablesWhereInput_1 = require("../../../inputs/TablesWhereInput");
const TablesScalarFieldEnum_1 = require("../../../../enums/TablesScalarFieldEnum");
let GroupByTablesArgs = class GroupByTablesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereInput_1.TablesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesWhereInput_1.TablesWhereInput)
], GroupByTablesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesOrderByWithAggregationInput_1.TablesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTablesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesScalarFieldEnum_1.TablesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTablesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesScalarWhereWithAggregatesInput_1.TablesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesScalarWhereWithAggregatesInput_1.TablesScalarWhereWithAggregatesInput)
], GroupByTablesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTablesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTablesArgs.prototype, "skip", void 0);
GroupByTablesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTablesArgs);
exports.GroupByTablesArgs = GroupByTablesArgs;
