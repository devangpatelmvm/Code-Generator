"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_rolesWhereInput_1 = require("../inputs/User_rolesWhereInput");
let User_rolesRelationFilter = class User_rolesRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesWhereInput_1.User_rolesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesWhereInput_1.User_rolesWhereInput)
], User_rolesRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesWhereInput_1.User_rolesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesWhereInput_1.User_rolesWhereInput)
], User_rolesRelationFilter.prototype, "isNot", void 0);
User_rolesRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("User_rolesRelationFilter", {
        isAbstract: true
    })
], User_rolesRelationFilter);
exports.User_rolesRelationFilter = User_rolesRelationFilter;
