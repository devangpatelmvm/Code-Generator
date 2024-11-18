"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ColumnsSumOrderByAggregateInput = class ColumnsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsSumOrderByAggregateInput.prototype, "tableId", void 0);
ColumnsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsSumOrderByAggregateInput", {
        isAbstract: true
    })
], ColumnsSumOrderByAggregateInput);
exports.ColumnsSumOrderByAggregateInput = ColumnsSumOrderByAggregateInput;
