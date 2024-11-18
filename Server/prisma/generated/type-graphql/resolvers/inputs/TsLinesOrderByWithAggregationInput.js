"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TsLinesAvgOrderByAggregateInput_1 = require("../inputs/TsLinesAvgOrderByAggregateInput");
const TsLinesCountOrderByAggregateInput_1 = require("../inputs/TsLinesCountOrderByAggregateInput");
const TsLinesMaxOrderByAggregateInput_1 = require("../inputs/TsLinesMaxOrderByAggregateInput");
const TsLinesMinOrderByAggregateInput_1 = require("../inputs/TsLinesMinOrderByAggregateInput");
const TsLinesSumOrderByAggregateInput_1 = require("../inputs/TsLinesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TsLinesOrderByWithAggregationInput = class TsLinesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesOrderByWithAggregationInput.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesOrderByWithAggregationInput.prototype, "componentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesCountOrderByAggregateInput_1.TsLinesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesCountOrderByAggregateInput_1.TsLinesCountOrderByAggregateInput)
], TsLinesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesAvgOrderByAggregateInput_1.TsLinesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesAvgOrderByAggregateInput_1.TsLinesAvgOrderByAggregateInput)
], TsLinesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesMaxOrderByAggregateInput_1.TsLinesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesMaxOrderByAggregateInput_1.TsLinesMaxOrderByAggregateInput)
], TsLinesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesMinOrderByAggregateInput_1.TsLinesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesMinOrderByAggregateInput_1.TsLinesMinOrderByAggregateInput)
], TsLinesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesSumOrderByAggregateInput_1.TsLinesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesSumOrderByAggregateInput_1.TsLinesSumOrderByAggregateInput)
], TsLinesOrderByWithAggregationInput.prototype, "_sum", void 0);
TsLinesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesOrderByWithAggregationInput", {
        isAbstract: true
    })
], TsLinesOrderByWithAggregationInput);
exports.TsLinesOrderByWithAggregationInput = TsLinesOrderByWithAggregationInput;
