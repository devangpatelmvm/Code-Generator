"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOnePackagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesWhereUniqueInput_1 = require("../../../inputs/PackagesWhereUniqueInput");
let DeleteOnePackagesArgs = class DeleteOnePackagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesWhereUniqueInput_1.PackagesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PackagesWhereUniqueInput_1.PackagesWhereUniqueInput)
], DeleteOnePackagesArgs.prototype, "where", void 0);
DeleteOnePackagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOnePackagesArgs);
exports.DeleteOnePackagesArgs = DeleteOnePackagesArgs;
