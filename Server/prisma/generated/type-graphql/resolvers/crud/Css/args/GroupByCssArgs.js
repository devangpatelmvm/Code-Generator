"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCssArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssOrderByWithAggregationInput_1 = require("../../../inputs/CssOrderByWithAggregationInput");
const CssScalarWhereWithAggregatesInput_1 = require("../../../inputs/CssScalarWhereWithAggregatesInput");
const CssWhereInput_1 = require("../../../inputs/CssWhereInput");
const CssScalarFieldEnum_1 = require("../../../../enums/CssScalarFieldEnum");
let GroupByCssArgs = class GroupByCssArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssWhereInput_1.CssWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssWhereInput_1.CssWhereInput)
], GroupByCssArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssOrderByWithAggregationInput_1.CssOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCssArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssScalarFieldEnum_1.CssScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCssArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssScalarWhereWithAggregatesInput_1.CssScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssScalarWhereWithAggregatesInput_1.CssScalarWhereWithAggregatesInput)
], GroupByCssArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCssArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCssArgs.prototype, "skip", void 0);
GroupByCssArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCssArgs);
exports.GroupByCssArgs = GroupByCssArgs;
