"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesCreateOrConnectWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_rolesCreateWithoutUsersInput_1 = require("../inputs/User_rolesCreateWithoutUsersInput");
const User_rolesWhereUniqueInput_1 = require("../inputs/User_rolesWhereUniqueInput");
let User_rolesCreateOrConnectWithoutUsersInput = class User_rolesCreateOrConnectWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesWhereUniqueInput_1.User_rolesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", User_rolesWhereUniqueInput_1.User_rolesWhereUniqueInput)
], User_rolesCreateOrConnectWithoutUsersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesCreateWithoutUsersInput_1.User_rolesCreateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", User_rolesCreateWithoutUsersInput_1.User_rolesCreateWithoutUsersInput)
], User_rolesCreateOrConnectWithoutUsersInput.prototype, "create", void 0);
User_rolesCreateOrConnectWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("User_rolesCreateOrConnectWithoutUsersInput", {
        isAbstract: true
    })
], User_rolesCreateOrConnectWithoutUsersInput);
exports.User_rolesCreateOrConnectWithoutUsersInput = User_rolesCreateOrConnectWithoutUsersInput;
