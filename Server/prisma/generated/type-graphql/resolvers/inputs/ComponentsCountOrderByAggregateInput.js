"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ComponentsCountOrderByAggregateInput = class ComponentsCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsCountOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsCountOrderByAggregateInput.prototype, "projectId", void 0);
ComponentsCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsCountOrderByAggregateInput", {
        isAbstract: true
    })
], ComponentsCountOrderByAggregateInput);
exports.ComponentsCountOrderByAggregateInput = ComponentsCountOrderByAggregateInput;
