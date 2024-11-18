"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneUser_rolesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_rolesCreateInput_1 = require("../../../inputs/User_rolesCreateInput");
let CreateOneUser_rolesArgs = class CreateOneUser_rolesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesCreateInput_1.User_rolesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", User_rolesCreateInput_1.User_rolesCreateInput)
], CreateOneUser_rolesArgs.prototype, "data", void 0);
CreateOneUser_rolesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneUser_rolesArgs);
exports.CreateOneUser_rolesArgs = CreateOneUser_rolesArgs;
