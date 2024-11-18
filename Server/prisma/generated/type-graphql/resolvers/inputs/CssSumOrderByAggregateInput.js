"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CssSumOrderByAggregateInput = class CssSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssSumOrderByAggregateInput.prototype, "componentId", void 0);
CssSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CssSumOrderByAggregateInput", {
        isAbstract: true
    })
], CssSumOrderByAggregateInput);
exports.CssSumOrderByAggregateInput = CssSumOrderByAggregateInput;
