"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyUser_rolesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_rolesUpdateManyMutationInput_1 = require("../../../inputs/User_rolesUpdateManyMutationInput");
const User_rolesWhereInput_1 = require("../../../inputs/User_rolesWhereInput");
let UpdateManyUser_rolesArgs = class UpdateManyUser_rolesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesUpdateManyMutationInput_1.User_rolesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", User_rolesUpdateManyMutationInput_1.User_rolesUpdateManyMutationInput)
], UpdateManyUser_rolesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesWhereInput_1.User_rolesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesWhereInput_1.User_rolesWhereInput)
], UpdateManyUser_rolesArgs.prototype, "where", void 0);
UpdateManyUser_rolesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyUser_rolesArgs);
exports.UpdateManyUser_rolesArgs = UpdateManyUser_rolesArgs;
