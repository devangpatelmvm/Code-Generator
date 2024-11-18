"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let User_rolesAvgAggregate = class User_rolesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], User_rolesAvgAggregate.prototype, "id", void 0);
User_rolesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("User_rolesAvgAggregate", {
        isAbstract: true
    })
], User_rolesAvgAggregate);
exports.User_rolesAvgAggregate = User_rolesAvgAggregate;
