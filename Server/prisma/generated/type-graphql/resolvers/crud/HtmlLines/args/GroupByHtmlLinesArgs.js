"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByHtmlLinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesOrderByWithAggregationInput_1 = require("../../../inputs/HtmlLinesOrderByWithAggregationInput");
const HtmlLinesScalarWhereWithAggregatesInput_1 = require("../../../inputs/HtmlLinesScalarWhereWithAggregatesInput");
const HtmlLinesWhereInput_1 = require("../../../inputs/HtmlLinesWhereInput");
const HtmlLinesScalarFieldEnum_1 = require("../../../../enums/HtmlLinesScalarFieldEnum");
let GroupByHtmlLinesArgs = class GroupByHtmlLinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesWhereInput_1.HtmlLinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesWhereInput_1.HtmlLinesWhereInput)
], GroupByHtmlLinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesOrderByWithAggregationInput_1.HtmlLinesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByHtmlLinesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesScalarFieldEnum_1.HtmlLinesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByHtmlLinesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesScalarWhereWithAggregatesInput_1.HtmlLinesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesScalarWhereWithAggregatesInput_1.HtmlLinesScalarWhereWithAggregatesInput)
], GroupByHtmlLinesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByHtmlLinesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByHtmlLinesArgs.prototype, "skip", void 0);
GroupByHtmlLinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByHtmlLinesArgs);
exports.GroupByHtmlLinesArgs = GroupByHtmlLinesArgs;
