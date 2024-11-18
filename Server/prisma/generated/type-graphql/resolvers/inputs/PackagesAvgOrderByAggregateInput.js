"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PackagesAvgOrderByAggregateInput = class PackagesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesAvgOrderByAggregateInput.prototype, "projectId", void 0);
PackagesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], PackagesAvgOrderByAggregateInput);
exports.PackagesAvgOrderByAggregateInput = PackagesAvgOrderByAggregateInput;
