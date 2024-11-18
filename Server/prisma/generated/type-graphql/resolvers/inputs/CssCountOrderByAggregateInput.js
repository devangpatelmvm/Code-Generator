"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CssCountOrderByAggregateInput = class CssCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssCountOrderByAggregateInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssCountOrderByAggregateInput.prototype, "componentId", void 0);
CssCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CssCountOrderByAggregateInput", {
        isAbstract: true
    })
], CssCountOrderByAggregateInput);
exports.CssCountOrderByAggregateInput = CssCountOrderByAggregateInput;
