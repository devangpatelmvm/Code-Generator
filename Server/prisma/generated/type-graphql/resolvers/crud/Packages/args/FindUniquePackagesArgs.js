"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePackagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesWhereUniqueInput_1 = require("../../../inputs/PackagesWhereUniqueInput");
let FindUniquePackagesArgs = class FindUniquePackagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesWhereUniqueInput_1.PackagesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PackagesWhereUniqueInput_1.PackagesWhereUniqueInput)
], FindUniquePackagesArgs.prototype, "where", void 0);
FindUniquePackagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniquePackagesArgs);
exports.FindUniquePackagesArgs = FindUniquePackagesArgs;
