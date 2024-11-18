"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPackagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesOrderByWithAggregationInput_1 = require("../../../inputs/PackagesOrderByWithAggregationInput");
const PackagesScalarWhereWithAggregatesInput_1 = require("../../../inputs/PackagesScalarWhereWithAggregatesInput");
const PackagesWhereInput_1 = require("../../../inputs/PackagesWhereInput");
const PackagesScalarFieldEnum_1 = require("../../../../enums/PackagesScalarFieldEnum");
let GroupByPackagesArgs = class GroupByPackagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesWhereInput_1.PackagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesWhereInput_1.PackagesWhereInput)
], GroupByPackagesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesOrderByWithAggregationInput_1.PackagesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPackagesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesScalarFieldEnum_1.PackagesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPackagesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesScalarWhereWithAggregatesInput_1.PackagesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesScalarWhereWithAggregatesInput_1.PackagesScalarWhereWithAggregatesInput)
], GroupByPackagesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPackagesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPackagesArgs.prototype, "skip", void 0);
GroupByPackagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByPackagesArgs);
exports.GroupByPackagesArgs = GroupByPackagesArgs;
