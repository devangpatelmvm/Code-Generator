"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let User_rolesCount = class User_rolesCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], User_rolesCount.prototype, "users", void 0);
User_rolesCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("User_rolesCount", {
        isAbstract: true
    })
], User_rolesCount);
exports.User_rolesCount = User_rolesCount;
