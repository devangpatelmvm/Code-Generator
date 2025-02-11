"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CssAvgOrderByAggregateInput = class CssAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssAvgOrderByAggregateInput.prototype, "componentId", void 0);
CssAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CssAvgOrderByAggregateInput", {
        isAbstract: true
    })
], CssAvgOrderByAggregateInput);
exports.CssAvgOrderByAggregateInput = CssAvgOrderByAggregateInput;
