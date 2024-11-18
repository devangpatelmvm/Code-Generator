"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesCreateWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let User_rolesCreateWithoutUsersInput = class User_rolesCreateWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesCreateWithoutUsersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesCreateWithoutUsersInput.prototype, "permissions", void 0);
User_rolesCreateWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("User_rolesCreateWithoutUsersInput", {
        isAbstract: true
    })
], User_rolesCreateWithoutUsersInput);
exports.User_rolesCreateWithoutUsersInput = User_rolesCreateWithoutUsersInput;
