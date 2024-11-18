"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssAvgOrderByAggregateInput_1 = require("../inputs/CssAvgOrderByAggregateInput");
const CssCountOrderByAggregateInput_1 = require("../inputs/CssCountOrderByAggregateInput");
const CssMaxOrderByAggregateInput_1 = require("../inputs/CssMaxOrderByAggregateInput");
const CssMinOrderByAggregateInput_1 = require("../inputs/CssMinOrderByAggregateInput");
const CssSumOrderByAggregateInput_1 = require("../inputs/CssSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CssOrderByWithAggregationInput = class CssOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssOrderByWithAggregationInput.prototype, "componentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssCountOrderByAggregateInput_1.CssCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssCountOrderByAggregateInput_1.CssCountOrderByAggregateInput)
], CssOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssAvgOrderByAggregateInput_1.CssAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssAvgOrderByAggregateInput_1.CssAvgOrderByAggregateInput)
], CssOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssMaxOrderByAggregateInput_1.CssMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssMaxOrderByAggregateInput_1.CssMaxOrderByAggregateInput)
], CssOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssMinOrderByAggregateInput_1.CssMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssMinOrderByAggregateInput_1.CssMinOrderByAggregateInput)
], CssOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssSumOrderByAggregateInput_1.CssSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssSumOrderByAggregateInput_1.CssSumOrderByAggregateInput)
], CssOrderByWithAggregationInput.prototype, "_sum", void 0);
CssOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CssOrderByWithAggregationInput", {
        isAbstract: true
    })
], CssOrderByWithAggregationInput);
exports.CssOrderByWithAggregationInput = CssOrderByWithAggregationInput;
