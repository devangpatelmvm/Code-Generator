"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPackagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesOrderByWithRelationInput_1 = require("../../../inputs/PackagesOrderByWithRelationInput");
const PackagesWhereInput_1 = require("../../../inputs/PackagesWhereInput");
const PackagesWhereUniqueInput_1 = require("../../../inputs/PackagesWhereUniqueInput");
const PackagesScalarFieldEnum_1 = require("../../../../enums/PackagesScalarFieldEnum");
let FindFirstPackagesArgs = class FindFirstPackagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesWhereInput_1.PackagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesWhereInput_1.PackagesWhereInput)
], FindFirstPackagesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesOrderByWithRelationInput_1.PackagesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPackagesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesWhereUniqueInput_1.PackagesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesWhereUniqueInput_1.PackagesWhereUniqueInput)
], FindFirstPackagesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPackagesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPackagesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesScalarFieldEnum_1.PackagesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPackagesArgs.prototype, "distinct", void 0);
FindFirstPackagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstPackagesArgs);
exports.FindFirstPackagesArgs = FindFirstPackagesArgs;
