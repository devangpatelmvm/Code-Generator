"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePackagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesOrderByWithRelationInput_1 = require("../../../inputs/PackagesOrderByWithRelationInput");
const PackagesWhereInput_1 = require("../../../inputs/PackagesWhereInput");
const PackagesWhereUniqueInput_1 = require("../../../inputs/PackagesWhereUniqueInput");
let AggregatePackagesArgs = class AggregatePackagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesWhereInput_1.PackagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesWhereInput_1.PackagesWhereInput)
], AggregatePackagesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesOrderByWithRelationInput_1.PackagesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregatePackagesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesWhereUniqueInput_1.PackagesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesWhereUniqueInput_1.PackagesWhereUniqueInput)
], AggregatePackagesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePackagesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePackagesArgs.prototype, "skip", void 0);
AggregatePackagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregatePackagesArgs);
exports.AggregatePackagesArgs = AggregatePackagesArgs;
