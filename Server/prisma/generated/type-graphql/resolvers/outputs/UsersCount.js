"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UsersCount = class UsersCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], UsersCount.prototype, "project", void 0);
UsersCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UsersCount", {
        isAbstract: true
    })
], UsersCount);
exports.UsersCount = UsersCount;
