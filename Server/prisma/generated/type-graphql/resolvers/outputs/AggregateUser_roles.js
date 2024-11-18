"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUser_roles = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_rolesAvgAggregate_1 = require("../outputs/User_rolesAvgAggregate");
const User_rolesCountAggregate_1 = require("../outputs/User_rolesCountAggregate");
const User_rolesMaxAggregate_1 = require("../outputs/User_rolesMaxAggregate");
const User_rolesMinAggregate_1 = require("../outputs/User_rolesMinAggregate");
const User_rolesSumAggregate_1 = require("../outputs/User_rolesSumAggregate");
let AggregateUser_roles = class AggregateUser_roles {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesCountAggregate_1.User_rolesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesCountAggregate_1.User_rolesCountAggregate)
], AggregateUser_roles.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesAvgAggregate_1.User_rolesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesAvgAggregate_1.User_rolesAvgAggregate)
], AggregateUser_roles.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesSumAggregate_1.User_rolesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesSumAggregate_1.User_rolesSumAggregate)
], AggregateUser_roles.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesMinAggregate_1.User_rolesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesMinAggregate_1.User_rolesMinAggregate)
], AggregateUser_roles.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesMaxAggregate_1.User_rolesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesMaxAggregate_1.User_rolesMaxAggregate)
], AggregateUser_roles.prototype, "_max", void 0);
AggregateUser_roles = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateUser_roles", {
        isAbstract: true
    })
], AggregateUser_roles);
exports.AggregateUser_roles = AggregateUser_roles;
