"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let HtmlLinesSumOrderByAggregateInput = class HtmlLinesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesSumOrderByAggregateInput.prototype, "componentId", void 0);
HtmlLinesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesSumOrderByAggregateInput", {
        isAbstract: true
    })
], HtmlLinesSumOrderByAggregateInput);
exports.HtmlLinesSumOrderByAggregateInput = HtmlLinesSumOrderByAggregateInput;
