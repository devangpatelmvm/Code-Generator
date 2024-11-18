"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let HtmlLinesAvgOrderByAggregateInput = class HtmlLinesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesAvgOrderByAggregateInput.prototype, "componentId", void 0);
HtmlLinesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], HtmlLinesAvgOrderByAggregateInput);
exports.HtmlLinesAvgOrderByAggregateInput = HtmlLinesAvgOrderByAggregateInput;
