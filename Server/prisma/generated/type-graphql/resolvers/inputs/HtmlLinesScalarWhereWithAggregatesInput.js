"use strict";
var HtmlLinesScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
let HtmlLinesScalarWhereWithAggregatesInput = HtmlLinesScalarWhereWithAggregatesInput_1 = class HtmlLinesScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], HtmlLinesScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], HtmlLinesScalarWhereWithAggregatesInput.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], HtmlLinesScalarWhereWithAggregatesInput.prototype, "componentId", void 0);
HtmlLinesScalarWhereWithAggregatesInput = HtmlLinesScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], HtmlLinesScalarWhereWithAggregatesInput);
exports.HtmlLinesScalarWhereWithAggregatesInput = HtmlLinesScalarWhereWithAggregatesInput;
