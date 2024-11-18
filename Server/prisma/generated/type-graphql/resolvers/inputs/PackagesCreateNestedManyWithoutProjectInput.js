"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesCreateNestedManyWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesCreateOrConnectWithoutProjectInput_1 = require("../inputs/PackagesCreateOrConnectWithoutProjectInput");
const PackagesCreateWithoutProjectInput_1 = require("../inputs/PackagesCreateWithoutProjectInput");
const PackagesWhereUniqueInput_1 = require("../inputs/PackagesWhereUniqueInput");
let PackagesCreateNestedManyWithoutProjectInput = class PackagesCreateNestedManyWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesCreateWithoutProjectInput_1.PackagesCreateWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PackagesCreateNestedManyWithoutProjectInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesCreateOrConnectWithoutProjectInput_1.PackagesCreateOrConnectWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PackagesCreateNestedManyWithoutProjectInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesWhereUniqueInput_1.PackagesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PackagesCreateNestedManyWithoutProjectInput.prototype, "connect", void 0);
PackagesCreateNestedManyWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesCreateNestedManyWithoutProjectInput", {
        isAbstract: true
    })
], PackagesCreateNestedManyWithoutProjectInput);
exports.PackagesCreateNestedManyWithoutProjectInput = PackagesCreateNestedManyWithoutProjectInput;
