"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let User_rolesMaxAggregate = class User_rolesMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], User_rolesMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesMaxAggregate.prototype, "permissions", void 0);
User_rolesMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("User_rolesMaxAggregate", {
        isAbstract: true
    })
], User_rolesMaxAggregate);
exports.User_rolesMaxAggregate = User_rolesMaxAggregate;
