"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let HtmlLinesMinOrderByAggregateInput = class HtmlLinesMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesMinOrderByAggregateInput.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesMinOrderByAggregateInput.prototype, "componentId", void 0);
HtmlLinesMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesMinOrderByAggregateInput", {
        isAbstract: true
    })
], HtmlLinesMinOrderByAggregateInput);
exports.HtmlLinesMinOrderByAggregateInput = HtmlLinesMinOrderByAggregateInput;
