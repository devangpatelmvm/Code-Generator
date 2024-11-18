"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnePackagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesCreateInput_1 = require("../../../inputs/PackagesCreateInput");
let CreateOnePackagesArgs = class CreateOnePackagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesCreateInput_1.PackagesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PackagesCreateInput_1.PackagesCreateInput)
], CreateOnePackagesArgs.prototype, "data", void 0);
CreateOnePackagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOnePackagesArgs);
exports.CreateOnePackagesArgs = CreateOnePackagesArgs;
