"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCreateOrConnectWithoutUser_rolesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersCreateWithoutUser_rolesInput_1 = require("../inputs/UsersCreateWithoutUser_rolesInput");
const UsersWhereUniqueInput_1 = require("../inputs/UsersWhereUniqueInput");
let UsersCreateOrConnectWithoutUser_rolesInput = class UsersCreateOrConnectWithoutUser_rolesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereUniqueInput_1.UsersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersWhereUniqueInput_1.UsersWhereUniqueInput)
], UsersCreateOrConnectWithoutUser_rolesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersCreateWithoutUser_rolesInput_1.UsersCreateWithoutUser_rolesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersCreateWithoutUser_rolesInput_1.UsersCreateWithoutUser_rolesInput)
], UsersCreateOrConnectWithoutUser_rolesInput.prototype, "create", void 0);
UsersCreateOrConnectWithoutUser_rolesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersCreateOrConnectWithoutUser_rolesInput", {
        isAbstract: true
    })
], UsersCreateOrConnectWithoutUser_rolesInput);
exports.UsersCreateOrConnectWithoutUser_rolesInput = UsersCreateOrConnectWithoutUser_rolesInput;
