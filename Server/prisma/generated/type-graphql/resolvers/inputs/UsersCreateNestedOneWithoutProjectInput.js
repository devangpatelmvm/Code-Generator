"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCreateNestedOneWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersCreateOrConnectWithoutProjectInput_1 = require("../inputs/UsersCreateOrConnectWithoutProjectInput");
const UsersCreateWithoutProjectInput_1 = require("../inputs/UsersCreateWithoutProjectInput");
const UsersWhereUniqueInput_1 = require("../inputs/UsersWhereUniqueInput");
let UsersCreateNestedOneWithoutProjectInput = class UsersCreateNestedOneWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersCreateWithoutProjectInput_1.UsersCreateWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersCreateWithoutProjectInput_1.UsersCreateWithoutProjectInput)
], UsersCreateNestedOneWithoutProjectInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutProjectInput_1.UsersCreateOrConnectWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersCreateOrConnectWithoutProjectInput_1.UsersCreateOrConnectWithoutProjectInput)
], UsersCreateNestedOneWithoutProjectInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereUniqueInput_1.UsersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersWhereUniqueInput_1.UsersWhereUniqueInput)
], UsersCreateNestedOneWithoutProjectInput.prototype, "connect", void 0);
UsersCreateNestedOneWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersCreateNestedOneWithoutProjectInput", {
        isAbstract: true
    })
], UsersCreateNestedOneWithoutProjectInput);
exports.UsersCreateNestedOneWithoutProjectInput = UsersCreateNestedOneWithoutProjectInput;
