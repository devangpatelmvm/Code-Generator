"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TsLinesMinOrderByAggregateInput = class TsLinesMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesMinOrderByAggregateInput.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesMinOrderByAggregateInput.prototype, "componentId", void 0);
TsLinesMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesMinOrderByAggregateInput", {
        isAbstract: true
    })
], TsLinesMinOrderByAggregateInput);
exports.TsLinesMinOrderByAggregateInput = TsLinesMinOrderByAggregateInput;
