"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesCreateOrConnectWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesCreateWithoutProjectInput_1 = require("../inputs/PackagesCreateWithoutProjectInput");
const PackagesWhereUniqueInput_1 = require("../inputs/PackagesWhereUniqueInput");
let PackagesCreateOrConnectWithoutProjectInput = class PackagesCreateOrConnectWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesWhereUniqueInput_1.PackagesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PackagesWhereUniqueInput_1.PackagesWhereUniqueInput)
], PackagesCreateOrConnectWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesCreateWithoutProjectInput_1.PackagesCreateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PackagesCreateWithoutProjectInput_1.PackagesCreateWithoutProjectInput)
], PackagesCreateOrConnectWithoutProjectInput.prototype, "create", void 0);
PackagesCreateOrConnectWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesCreateOrConnectWithoutProjectInput", {
        isAbstract: true
    })
], PackagesCreateOrConnectWithoutProjectInput);
exports.PackagesCreateOrConnectWithoutProjectInput = PackagesCreateOrConnectWithoutProjectInput;
