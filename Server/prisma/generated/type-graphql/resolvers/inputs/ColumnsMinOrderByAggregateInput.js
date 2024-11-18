"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ColumnsMinOrderByAggregateInput = class ColumnsMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsMinOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsMinOrderByAggregateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsMinOrderByAggregateInput.prototype, "constraint", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsMinOrderByAggregateInput.prototype, "tableId", void 0);
ColumnsMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsMinOrderByAggregateInput", {
        isAbstract: true
    })
], ColumnsMinOrderByAggregateInput);
exports.ColumnsMinOrderByAggregateInput = ColumnsMinOrderByAggregateInput;
