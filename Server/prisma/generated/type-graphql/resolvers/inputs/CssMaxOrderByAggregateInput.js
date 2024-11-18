"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CssMaxOrderByAggregateInput = class CssMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssMaxOrderByAggregateInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssMaxOrderByAggregateInput.prototype, "componentId", void 0);
CssMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CssMaxOrderByAggregateInput", {
        isAbstract: true
    })
], CssMaxOrderByAggregateInput);
exports.CssMaxOrderByAggregateInput = CssMaxOrderByAggregateInput;
