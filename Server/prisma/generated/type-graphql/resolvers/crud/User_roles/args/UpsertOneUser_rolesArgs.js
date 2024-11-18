"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneUser_rolesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_rolesCreateInput_1 = require("../../../inputs/User_rolesCreateInput");
const User_rolesUpdateInput_1 = require("../../../inputs/User_rolesUpdateInput");
const User_rolesWhereUniqueInput_1 = require("../../../inputs/User_rolesWhereUniqueInput");
let UpsertOneUser_rolesArgs = class UpsertOneUser_rolesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesWhereUniqueInput_1.User_rolesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", User_rolesWhereUniqueInput_1.User_rolesWhereUniqueInput)
], UpsertOneUser_rolesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesCreateInput_1.User_rolesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", User_rolesCreateInput_1.User_rolesCreateInput)
], UpsertOneUser_rolesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesUpdateInput_1.User_rolesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", User_rolesUpdateInput_1.User_rolesUpdateInput)
], UpsertOneUser_rolesArgs.prototype, "update", void 0);
UpsertOneUser_rolesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneUser_rolesArgs);
exports.UpsertOneUser_rolesArgs = UpsertOneUser_rolesArgs;
