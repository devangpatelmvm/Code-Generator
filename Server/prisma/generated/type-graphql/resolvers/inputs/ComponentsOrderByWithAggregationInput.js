"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsAvgOrderByAggregateInput_1 = require("../inputs/ComponentsAvgOrderByAggregateInput");
const ComponentsCountOrderByAggregateInput_1 = require("../inputs/ComponentsCountOrderByAggregateInput");
const ComponentsMaxOrderByAggregateInput_1 = require("../inputs/ComponentsMaxOrderByAggregateInput");
const ComponentsMinOrderByAggregateInput_1 = require("../inputs/ComponentsMinOrderByAggregateInput");
const ComponentsSumOrderByAggregateInput_1 = require("../inputs/ComponentsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ComponentsOrderByWithAggregationInput = class ComponentsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsOrderByWithAggregationInput.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCountOrderByAggregateInput_1.ComponentsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCountOrderByAggregateInput_1.ComponentsCountOrderByAggregateInput)
], ComponentsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsAvgOrderByAggregateInput_1.ComponentsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsAvgOrderByAggregateInput_1.ComponentsAvgOrderByAggregateInput)
], ComponentsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsMaxOrderByAggregateInput_1.ComponentsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsMaxOrderByAggregateInput_1.ComponentsMaxOrderByAggregateInput)
], ComponentsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsMinOrderByAggregateInput_1.ComponentsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsMinOrderByAggregateInput_1.ComponentsMinOrderByAggregateInput)
], ComponentsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsSumOrderByAggregateInput_1.ComponentsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsSumOrderByAggregateInput_1.ComponentsSumOrderByAggregateInput)
], ComponentsOrderByWithAggregationInput.prototype, "_sum", void 0);
ComponentsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsOrderByWithAggregationInput", {
        isAbstract: true
    })
], ComponentsOrderByWithAggregationInput);
exports.ComponentsOrderByWithAggregationInput = ComponentsOrderByWithAggregationInput;
