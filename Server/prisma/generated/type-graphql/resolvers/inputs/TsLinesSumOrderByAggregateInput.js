"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TsLinesSumOrderByAggregateInput = class TsLinesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesSumOrderByAggregateInput.prototype, "componentId", void 0);
TsLinesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesSumOrderByAggregateInput", {
        isAbstract: true
    })
], TsLinesSumOrderByAggregateInput);
exports.TsLinesSumOrderByAggregateInput = TsLinesSumOrderByAggregateInput;
