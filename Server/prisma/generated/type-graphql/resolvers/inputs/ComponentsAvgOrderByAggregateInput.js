"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ComponentsAvgOrderByAggregateInput = class ComponentsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsAvgOrderByAggregateInput.prototype, "projectId", void 0);
ComponentsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ComponentsAvgOrderByAggregateInput);
exports.ComponentsAvgOrderByAggregateInput = ComponentsAvgOrderByAggregateInput;
