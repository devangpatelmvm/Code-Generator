"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPackagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesUpdateManyMutationInput_1 = require("../../../inputs/PackagesUpdateManyMutationInput");
const PackagesWhereInput_1 = require("../../../inputs/PackagesWhereInput");
let UpdateManyPackagesArgs = class UpdateManyPackagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesUpdateManyMutationInput_1.PackagesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PackagesUpdateManyMutationInput_1.PackagesUpdateManyMutationInput)
], UpdateManyPackagesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesWhereInput_1.PackagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesWhereInput_1.PackagesWhereInput)
], UpdateManyPackagesArgs.prototype, "where", void 0);
UpdateManyPackagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyPackagesArgs);
exports.UpdateManyPackagesArgs = UpdateManyPackagesArgs;
