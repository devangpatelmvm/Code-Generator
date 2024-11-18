"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPackagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesWhereInput_1 = require("../../../inputs/PackagesWhereInput");
let DeleteManyPackagesArgs = class DeleteManyPackagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesWhereInput_1.PackagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesWhereInput_1.PackagesWhereInput)
], DeleteManyPackagesArgs.prototype, "where", void 0);
DeleteManyPackagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyPackagesArgs);
exports.DeleteManyPackagesArgs = DeleteManyPackagesArgs;
