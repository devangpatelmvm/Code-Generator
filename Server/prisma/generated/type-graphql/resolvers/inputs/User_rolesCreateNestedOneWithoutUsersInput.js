"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesCreateNestedOneWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_rolesCreateOrConnectWithoutUsersInput_1 = require("../inputs/User_rolesCreateOrConnectWithoutUsersInput");
const User_rolesCreateWithoutUsersInput_1 = require("../inputs/User_rolesCreateWithoutUsersInput");
const User_rolesWhereUniqueInput_1 = require("../inputs/User_rolesWhereUniqueInput");
let User_rolesCreateNestedOneWithoutUsersInput = class User_rolesCreateNestedOneWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesCreateWithoutUsersInput_1.User_rolesCreateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesCreateWithoutUsersInput_1.User_rolesCreateWithoutUsersInput)
], User_rolesCreateNestedOneWithoutUsersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesCreateOrConnectWithoutUsersInput_1.User_rolesCreateOrConnectWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesCreateOrConnectWithoutUsersInput_1.User_rolesCreateOrConnectWithoutUsersInput)
], User_rolesCreateNestedOneWithoutUsersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesWhereUniqueInput_1.User_rolesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesWhereUniqueInput_1.User_rolesWhereUniqueInput)
], User_rolesCreateNestedOneWithoutUsersInput.prototype, "connect", void 0);
User_rolesCreateNestedOneWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("User_rolesCreateNestedOneWithoutUsersInput", {
        isAbstract: true
    })
], User_rolesCreateNestedOneWithoutUsersInput);
exports.User_rolesCreateNestedOneWithoutUsersInput = User_rolesCreateNestedOneWithoutUsersInput;
