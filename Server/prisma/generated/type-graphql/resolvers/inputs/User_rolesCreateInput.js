"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersCreateNestedManyWithoutUser_rolesInput_1 = require("../inputs/UsersCreateNestedManyWithoutUser_rolesInput");
let User_rolesCreateInput = class User_rolesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesCreateInput.prototype, "permissions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersCreateNestedManyWithoutUser_rolesInput_1.UsersCreateNestedManyWithoutUser_rolesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersCreateNestedManyWithoutUser_rolesInput_1.UsersCreateNestedManyWithoutUser_rolesInput)
], User_rolesCreateInput.prototype, "users", void 0);
User_rolesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("User_rolesCreateInput", {
        isAbstract: true
    })
], User_rolesCreateInput);
exports.User_rolesCreateInput = User_rolesCreateInput;
