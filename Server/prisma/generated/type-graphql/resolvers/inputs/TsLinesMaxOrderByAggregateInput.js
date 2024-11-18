"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TsLinesMaxOrderByAggregateInput = class TsLinesMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesMaxOrderByAggregateInput.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesMaxOrderByAggregateInput.prototype, "componentId", void 0);
TsLinesMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesMaxOrderByAggregateInput", {
        isAbstract: true
    })
], TsLinesMaxOrderByAggregateInput);
exports.TsLinesMaxOrderByAggregateInput = TsLinesMaxOrderByAggregateInput;
