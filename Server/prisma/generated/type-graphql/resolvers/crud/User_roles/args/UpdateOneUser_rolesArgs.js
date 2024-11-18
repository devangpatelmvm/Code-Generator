"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneUser_rolesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_rolesUpdateInput_1 = require("../../../inputs/User_rolesUpdateInput");
const User_rolesWhereUniqueInput_1 = require("../../../inputs/User_rolesWhereUniqueInput");
let UpdateOneUser_rolesArgs = class UpdateOneUser_rolesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesUpdateInput_1.User_rolesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", User_rolesUpdateInput_1.User_rolesUpdateInput)
], UpdateOneUser_rolesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesWhereUniqueInput_1.User_rolesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", User_rolesWhereUniqueInput_1.User_rolesWhereUniqueInput)
], UpdateOneUser_rolesArgs.prototype, "where", void 0);
UpdateOneUser_rolesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneUser_rolesArgs);
exports.UpdateOneUser_rolesArgs = UpdateOneUser_rolesArgs;
