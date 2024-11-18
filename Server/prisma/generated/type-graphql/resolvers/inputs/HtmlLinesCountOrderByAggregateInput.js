"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let HtmlLinesCountOrderByAggregateInput = class HtmlLinesCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesCountOrderByAggregateInput.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesCountOrderByAggregateInput.prototype, "componentId", void 0);
HtmlLinesCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesCountOrderByAggregateInput", {
        isAbstract: true
    })
], HtmlLinesCountOrderByAggregateInput);
exports.HtmlLinesCountOrderByAggregateInput = HtmlLinesCountOrderByAggregateInput;
