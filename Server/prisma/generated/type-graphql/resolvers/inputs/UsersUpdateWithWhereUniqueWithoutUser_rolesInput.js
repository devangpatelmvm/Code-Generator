"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersUpdateWithWhereUniqueWithoutUser_rolesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersUpdateWithoutUser_rolesInput_1 = require("../inputs/UsersUpdateWithoutUser_rolesInput");
const UsersWhereUniqueInput_1 = require("../inputs/UsersWhereUniqueInput");
let UsersUpdateWithWhereUniqueWithoutUser_rolesInput = class UsersUpdateWithWhereUniqueWithoutUser_rolesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereUniqueInput_1.UsersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersWhereUniqueInput_1.UsersWhereUniqueInput)
], UsersUpdateWithWhereUniqueWithoutUser_rolesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersUpdateWithoutUser_rolesInput_1.UsersUpdateWithoutUser_rolesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersUpdateWithoutUser_rolesInput_1.UsersUpdateWithoutUser_rolesInput)
], UsersUpdateWithWhereUniqueWithoutUser_rolesInput.prototype, "data", void 0);
UsersUpdateWithWhereUniqueWithoutUser_rolesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersUpdateWithWhereUniqueWithoutUser_rolesInput", {
        isAbstract: true
    })
], UsersUpdateWithWhereUniqueWithoutUser_rolesInput);
exports.UsersUpdateWithWhereUniqueWithoutUser_rolesInput = UsersUpdateWithWhereUniqueWithoutUser_rolesInput;
