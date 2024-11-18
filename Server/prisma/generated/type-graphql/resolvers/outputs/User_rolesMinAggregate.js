"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let User_rolesMinAggregate = class User_rolesMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], User_rolesMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesMinAggregate.prototype, "permissions", void 0);
User_rolesMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("User_rolesMinAggregate", {
        isAbstract: true
    })
], User_rolesMinAggregate);
exports.User_rolesMinAggregate = User_rolesMinAggregate;
