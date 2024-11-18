"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneUser_rolesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_rolesWhereUniqueInput_1 = require("../../../inputs/User_rolesWhereUniqueInput");
let DeleteOneUser_rolesArgs = class DeleteOneUser_rolesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesWhereUniqueInput_1.User_rolesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", User_rolesWhereUniqueInput_1.User_rolesWhereUniqueInput)
], DeleteOneUser_rolesArgs.prototype, "where", void 0);
DeleteOneUser_rolesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneUser_rolesArgs);
exports.DeleteOneUser_rolesArgs = DeleteOneUser_rolesArgs;
