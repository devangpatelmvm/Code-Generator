"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCreateNestedManyWithoutUser_rolesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersCreateOrConnectWithoutUser_rolesInput_1 = require("../inputs/UsersCreateOrConnectWithoutUser_rolesInput");
const UsersCreateWithoutUser_rolesInput_1 = require("../inputs/UsersCreateWithoutUser_rolesInput");
const UsersWhereUniqueInput_1 = require("../inputs/UsersWhereUniqueInput");
let UsersCreateNestedManyWithoutUser_rolesInput = class UsersCreateNestedManyWithoutUser_rolesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersCreateWithoutUser_rolesInput_1.UsersCreateWithoutUser_rolesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersCreateNestedManyWithoutUser_rolesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersCreateOrConnectWithoutUser_rolesInput_1.UsersCreateOrConnectWithoutUser_rolesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersCreateNestedManyWithoutUser_rolesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersWhereUniqueInput_1.UsersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersCreateNestedManyWithoutUser_rolesInput.prototype, "connect", void 0);
UsersCreateNestedManyWithoutUser_rolesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersCreateNestedManyWithoutUser_rolesInput", {
        isAbstract: true
    })
], UsersCreateNestedManyWithoutUser_rolesInput);
exports.UsersCreateNestedManyWithoutUser_rolesInput = UsersCreateNestedManyWithoutUser_rolesInput;
