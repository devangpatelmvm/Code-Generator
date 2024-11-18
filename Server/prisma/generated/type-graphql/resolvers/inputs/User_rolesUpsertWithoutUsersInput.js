"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesUpsertWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_rolesCreateWithoutUsersInput_1 = require("../inputs/User_rolesCreateWithoutUsersInput");
const User_rolesUpdateWithoutUsersInput_1 = require("../inputs/User_rolesUpdateWithoutUsersInput");
let User_rolesUpsertWithoutUsersInput = class User_rolesUpsertWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesUpdateWithoutUsersInput_1.User_rolesUpdateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", User_rolesUpdateWithoutUsersInput_1.User_rolesUpdateWithoutUsersInput)
], User_rolesUpsertWithoutUsersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesCreateWithoutUsersInput_1.User_rolesCreateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", User_rolesCreateWithoutUsersInput_1.User_rolesCreateWithoutUsersInput)
], User_rolesUpsertWithoutUsersInput.prototype, "create", void 0);
User_rolesUpsertWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("User_rolesUpsertWithoutUsersInput", {
        isAbstract: true
    })
], User_rolesUpsertWithoutUsersInput);
exports.User_rolesUpsertWithoutUsersInput = User_rolesUpsertWithoutUsersInput;
