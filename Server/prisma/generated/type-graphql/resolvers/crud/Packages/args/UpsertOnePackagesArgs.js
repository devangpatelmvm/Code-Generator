"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOnePackagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesCreateInput_1 = require("../../../inputs/PackagesCreateInput");
const PackagesUpdateInput_1 = require("../../../inputs/PackagesUpdateInput");
const PackagesWhereUniqueInput_1 = require("../../../inputs/PackagesWhereUniqueInput");
let UpsertOnePackagesArgs = class UpsertOnePackagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesWhereUniqueInput_1.PackagesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PackagesWhereUniqueInput_1.PackagesWhereUniqueInput)
], UpsertOnePackagesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesCreateInput_1.PackagesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PackagesCreateInput_1.PackagesCreateInput)
], UpsertOnePackagesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesUpdateInput_1.PackagesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PackagesUpdateInput_1.PackagesUpdateInput)
], UpsertOnePackagesArgs.prototype, "update", void 0);
UpsertOnePackagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOnePackagesArgs);
exports.UpsertOnePackagesArgs = UpsertOnePackagesArgs;
