"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersUpdateManyWithWhereWithoutUser_rolesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersScalarWhereInput_1 = require("../inputs/UsersScalarWhereInput");
const UsersUpdateManyMutationInput_1 = require("../inputs/UsersUpdateManyMutationInput");
let UsersUpdateManyWithWhereWithoutUser_rolesInput = class UsersUpdateManyWithWhereWithoutUser_rolesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersScalarWhereInput_1.UsersScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersScalarWhereInput_1.UsersScalarWhereInput)
], UsersUpdateManyWithWhereWithoutUser_rolesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersUpdateManyMutationInput_1.UsersUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersUpdateManyMutationInput_1.UsersUpdateManyMutationInput)
], UsersUpdateManyWithWhereWithoutUser_rolesInput.prototype, "data", void 0);
UsersUpdateManyWithWhereWithoutUser_rolesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersUpdateManyWithWhereWithoutUser_rolesInput", {
        isAbstract: true
    })
], UsersUpdateManyWithWhereWithoutUser_rolesInput);
exports.UsersUpdateManyWithWhereWithoutUser_rolesInput = UsersUpdateManyWithWhereWithoutUser_rolesInput;
