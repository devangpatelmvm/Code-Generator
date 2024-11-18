"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersUpsertWithWhereUniqueWithoutUser_rolesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersCreateWithoutUser_rolesInput_1 = require("../inputs/UsersCreateWithoutUser_rolesInput");
const UsersUpdateWithoutUser_rolesInput_1 = require("../inputs/UsersUpdateWithoutUser_rolesInput");
const UsersWhereUniqueInput_1 = require("../inputs/UsersWhereUniqueInput");
let UsersUpsertWithWhereUniqueWithoutUser_rolesInput = class UsersUpsertWithWhereUniqueWithoutUser_rolesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereUniqueInput_1.UsersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersWhereUniqueInput_1.UsersWhereUniqueInput)
], UsersUpsertWithWhereUniqueWithoutUser_rolesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersUpdateWithoutUser_rolesInput_1.UsersUpdateWithoutUser_rolesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersUpdateWithoutUser_rolesInput_1.UsersUpdateWithoutUser_rolesInput)
], UsersUpsertWithWhereUniqueWithoutUser_rolesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersCreateWithoutUser_rolesInput_1.UsersCreateWithoutUser_rolesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersCreateWithoutUser_rolesInput_1.UsersCreateWithoutUser_rolesInput)
], UsersUpsertWithWhereUniqueWithoutUser_rolesInput.prototype, "create", void 0);
UsersUpsertWithWhereUniqueWithoutUser_rolesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersUpsertWithWhereUniqueWithoutUser_rolesInput", {
        isAbstract: true
    })
], UsersUpsertWithWhereUniqueWithoutUser_rolesInput);
exports.UsersUpsertWithWhereUniqueWithoutUser_rolesInput = UsersUpsertWithWhereUniqueWithoutUser_rolesInput;
