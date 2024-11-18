"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyUser_rolesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_rolesWhereInput_1 = require("../../../inputs/User_rolesWhereInput");
let DeleteManyUser_rolesArgs = class DeleteManyUser_rolesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesWhereInput_1.User_rolesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesWhereInput_1.User_rolesWhereInput)
], DeleteManyUser_rolesArgs.prototype, "where", void 0);
DeleteManyUser_rolesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyUser_rolesArgs);
exports.DeleteManyUser_rolesArgs = DeleteManyUser_rolesArgs;
