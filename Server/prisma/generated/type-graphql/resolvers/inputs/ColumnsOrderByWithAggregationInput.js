"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsAvgOrderByAggregateInput_1 = require("../inputs/ColumnsAvgOrderByAggregateInput");
const ColumnsCountOrderByAggregateInput_1 = require("../inputs/ColumnsCountOrderByAggregateInput");
const ColumnsMaxOrderByAggregateInput_1 = require("../inputs/ColumnsMaxOrderByAggregateInput");
const ColumnsMinOrderByAggregateInput_1 = require("../inputs/ColumnsMinOrderByAggregateInput");
const ColumnsSumOrderByAggregateInput_1 = require("../inputs/ColumnsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ColumnsOrderByWithAggregationInput = class ColumnsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsOrderByWithAggregationInput.prototype, "constraint", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsOrderByWithAggregationInput.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsCountOrderByAggregateInput_1.ColumnsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsCountOrderByAggregateInput_1.ColumnsCountOrderByAggregateInput)
], ColumnsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsAvgOrderByAggregateInput_1.ColumnsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsAvgOrderByAggregateInput_1.ColumnsAvgOrderByAggregateInput)
], ColumnsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsMaxOrderByAggregateInput_1.ColumnsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsMaxOrderByAggregateInput_1.ColumnsMaxOrderByAggregateInput)
], ColumnsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsMinOrderByAggregateInput_1.ColumnsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsMinOrderByAggregateInput_1.ColumnsMinOrderByAggregateInput)
], ColumnsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsSumOrderByAggregateInput_1.ColumnsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsSumOrderByAggregateInput_1.ColumnsSumOrderByAggregateInput)
], ColumnsOrderByWithAggregationInput.prototype, "_sum", void 0);
ColumnsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsOrderByWithAggregationInput", {
        isAbstract: true
    })
], ColumnsOrderByWithAggregationInput);
exports.ColumnsOrderByWithAggregationInput = ColumnsOrderByWithAggregationInput;
