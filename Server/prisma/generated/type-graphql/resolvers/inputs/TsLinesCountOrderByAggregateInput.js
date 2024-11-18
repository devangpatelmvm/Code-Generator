"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TsLinesCountOrderByAggregateInput = class TsLinesCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesCountOrderByAggregateInput.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesCountOrderByAggregateInput.prototype, "componentId", void 0);
TsLinesCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesCountOrderByAggregateInput", {
        isAbstract: true
    })
], TsLinesCountOrderByAggregateInput);
exports.TsLinesCountOrderByAggregateInput = TsLinesCountOrderByAggregateInput;
