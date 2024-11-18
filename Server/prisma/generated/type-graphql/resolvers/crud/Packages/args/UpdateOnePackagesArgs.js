"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnePackagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesUpdateInput_1 = require("../../../inputs/PackagesUpdateInput");
const PackagesWhereUniqueInput_1 = require("../../../inputs/PackagesWhereUniqueInput");
let UpdateOnePackagesArgs = class UpdateOnePackagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesUpdateInput_1.PackagesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PackagesUpdateInput_1.PackagesUpdateInput)
], UpdateOnePackagesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesWhereUniqueInput_1.PackagesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PackagesWhereUniqueInput_1.PackagesWhereUniqueInput)
], UpdateOnePackagesArgs.prototype, "where", void 0);
UpdateOnePackagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOnePackagesArgs);
exports.UpdateOnePackagesArgs = UpdateOnePackagesArgs;
