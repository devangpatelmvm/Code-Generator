"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TsLinesAvgOrderByAggregateInput = class TsLinesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesAvgOrderByAggregateInput.prototype, "componentId", void 0);
TsLinesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], TsLinesAvgOrderByAggregateInput);
exports.TsLinesAvgOrderByAggregateInput = TsLinesAvgOrderByAggregateInput;
