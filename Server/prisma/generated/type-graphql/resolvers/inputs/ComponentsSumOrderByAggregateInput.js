"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ComponentsSumOrderByAggregateInput = class ComponentsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsSumOrderByAggregateInput.prototype, "projectId", void 0);
ComponentsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsSumOrderByAggregateInput", {
        isAbstract: true
    })
], ComponentsSumOrderByAggregateInput);
exports.ComponentsSumOrderByAggregateInput = ComponentsSumOrderByAggregateInput;
