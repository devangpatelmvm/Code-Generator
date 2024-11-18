"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let HtmlLinesMaxOrderByAggregateInput = class HtmlLinesMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesMaxOrderByAggregateInput.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesMaxOrderByAggregateInput.prototype, "componentId", void 0);
HtmlLinesMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesMaxOrderByAggregateInput", {
        isAbstract: true
    })
], HtmlLinesMaxOrderByAggregateInput);
exports.HtmlLinesMaxOrderByAggregateInput = HtmlLinesMaxOrderByAggregateInput;
