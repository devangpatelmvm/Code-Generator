"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesAvgOrderByAggregateInput_1 = require("../inputs/HtmlLinesAvgOrderByAggregateInput");
const HtmlLinesCountOrderByAggregateInput_1 = require("../inputs/HtmlLinesCountOrderByAggregateInput");
const HtmlLinesMaxOrderByAggregateInput_1 = require("../inputs/HtmlLinesMaxOrderByAggregateInput");
const HtmlLinesMinOrderByAggregateInput_1 = require("../inputs/HtmlLinesMinOrderByAggregateInput");
const HtmlLinesSumOrderByAggregateInput_1 = require("../inputs/HtmlLinesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let HtmlLinesOrderByWithAggregationInput = class HtmlLinesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesOrderByWithAggregationInput.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesOrderByWithAggregationInput.prototype, "componentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesCountOrderByAggregateInput_1.HtmlLinesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesCountOrderByAggregateInput_1.HtmlLinesCountOrderByAggregateInput)
], HtmlLinesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesAvgOrderByAggregateInput_1.HtmlLinesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesAvgOrderByAggregateInput_1.HtmlLinesAvgOrderByAggregateInput)
], HtmlLinesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesMaxOrderByAggregateInput_1.HtmlLinesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesMaxOrderByAggregateInput_1.HtmlLinesMaxOrderByAggregateInput)
], HtmlLinesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesMinOrderByAggregateInput_1.HtmlLinesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesMinOrderByAggregateInput_1.HtmlLinesMinOrderByAggregateInput)
], HtmlLinesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesSumOrderByAggregateInput_1.HtmlLinesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesSumOrderByAggregateInput_1.HtmlLinesSumOrderByAggregateInput)
], HtmlLinesOrderByWithAggregationInput.prototype, "_sum", void 0);
HtmlLinesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesOrderByWithAggregationInput", {
        isAbstract: true
    })
], HtmlLinesOrderByWithAggregationInput);
exports.HtmlLinesOrderByWithAggregationInput = HtmlLinesOrderByWithAggregationInput;
