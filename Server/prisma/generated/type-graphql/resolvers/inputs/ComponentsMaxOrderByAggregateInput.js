"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ComponentsMaxOrderByAggregateInput = class ComponentsMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsMaxOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsMaxOrderByAggregateInput.prototype, "projectId", void 0);
ComponentsMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsMaxOrderByAggregateInput", {
        isAbstract: true
    })
], ComponentsMaxOrderByAggregateInput);
exports.ComponentsMaxOrderByAggregateInput = ComponentsMaxOrderByAggregateInput;
