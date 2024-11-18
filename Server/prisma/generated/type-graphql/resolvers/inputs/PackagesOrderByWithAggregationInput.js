"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesAvgOrderByAggregateInput_1 = require("../inputs/PackagesAvgOrderByAggregateInput");
const PackagesCountOrderByAggregateInput_1 = require("../inputs/PackagesCountOrderByAggregateInput");
const PackagesMaxOrderByAggregateInput_1 = require("../inputs/PackagesMaxOrderByAggregateInput");
const PackagesMinOrderByAggregateInput_1 = require("../inputs/PackagesMinOrderByAggregateInput");
const PackagesSumOrderByAggregateInput_1 = require("../inputs/PackagesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PackagesOrderByWithAggregationInput = class PackagesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesOrderByWithAggregationInput.prototype, "version", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesOrderByWithAggregationInput.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesCountOrderByAggregateInput_1.PackagesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesCountOrderByAggregateInput_1.PackagesCountOrderByAggregateInput)
], PackagesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesAvgOrderByAggregateInput_1.PackagesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesAvgOrderByAggregateInput_1.PackagesAvgOrderByAggregateInput)
], PackagesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesMaxOrderByAggregateInput_1.PackagesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesMaxOrderByAggregateInput_1.PackagesMaxOrderByAggregateInput)
], PackagesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesMinOrderByAggregateInput_1.PackagesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesMinOrderByAggregateInput_1.PackagesMinOrderByAggregateInput)
], PackagesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesSumOrderByAggregateInput_1.PackagesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesSumOrderByAggregateInput_1.PackagesSumOrderByAggregateInput)
], PackagesOrderByWithAggregationInput.prototype, "_sum", void 0);
PackagesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesOrderByWithAggregationInput", {
        isAbstract: true
    })
], PackagesOrderByWithAggregationInput);
exports.PackagesOrderByWithAggregationInput = PackagesOrderByWithAggregationInput;
