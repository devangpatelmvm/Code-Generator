"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByComponentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsOrderByWithAggregationInput_1 = require("../../../inputs/ComponentsOrderByWithAggregationInput");
const ComponentsScalarWhereWithAggregatesInput_1 = require("../../../inputs/ComponentsScalarWhereWithAggregatesInput");
const ComponentsWhereInput_1 = require("../../../inputs/ComponentsWhereInput");
const ComponentsScalarFieldEnum_1 = require("../../../../enums/ComponentsScalarFieldEnum");
let GroupByComponentsArgs = class GroupByComponentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereInput_1.ComponentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsWhereInput_1.ComponentsWhereInput)
], GroupByComponentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsOrderByWithAggregationInput_1.ComponentsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByComponentsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsScalarFieldEnum_1.ComponentsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByComponentsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsScalarWhereWithAggregatesInput_1.ComponentsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsScalarWhereWithAggregatesInput_1.ComponentsScalarWhereWithAggregatesInput)
], GroupByComponentsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByComponentsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByComponentsArgs.prototype, "skip", void 0);
GroupByComponentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByComponentsArgs);
exports.GroupByComponentsArgs = GroupByComponentsArgs;
