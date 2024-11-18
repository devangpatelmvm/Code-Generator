"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PackagesSumOrderByAggregateInput = class PackagesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesSumOrderByAggregateInput.prototype, "projectId", void 0);
PackagesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesSumOrderByAggregateInput", {
        isAbstract: true
    })
], PackagesSumOrderByAggregateInput);
exports.PackagesSumOrderByAggregateInput = PackagesSumOrderByAggregateInput;
