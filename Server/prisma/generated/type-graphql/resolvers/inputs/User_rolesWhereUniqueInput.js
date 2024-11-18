"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let User_rolesWhereUniqueInput = class User_rolesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], User_rolesWhereUniqueInput.prototype, "id", void 0);
User_rolesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("User_rolesWhereUniqueInput", {
        isAbstract: true
    })
], User_rolesWhereUniqueInput);
exports.User_rolesWhereUniqueInput = User_rolesWhereUniqueInput;
