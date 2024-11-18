"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_roles = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_rolesCount_1 = require("../resolvers/outputs/User_rolesCount");
let User_roles = class User_roles {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], User_roles.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], User_roles.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], User_roles.prototype, "permissions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesCount_1.User_rolesCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesCount_1.User_rolesCount)
], User_roles.prototype, "_count", void 0);
User_roles = tslib_1.__decorate([
    TypeGraphQL.ObjectType("User_roles", {
        isAbstract: true
    })
], User_roles);
exports.User_roles = User_roles;
