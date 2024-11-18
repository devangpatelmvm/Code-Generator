"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let User_rolesCountAggregate = class User_rolesCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], User_rolesCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], User_rolesCountAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], User_rolesCountAggregate.prototype, "permissions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], User_rolesCountAggregate.prototype, "_all", void 0);
User_rolesCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("User_rolesCountAggregate", {
        isAbstract: true
    })
], User_rolesCountAggregate);
exports.User_rolesCountAggregate = User_rolesCountAggregate;
