"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_rolesAvgAggregate_1 = require("../outputs/User_rolesAvgAggregate");
const User_rolesCountAggregate_1 = require("../outputs/User_rolesCountAggregate");
const User_rolesMaxAggregate_1 = require("../outputs/User_rolesMaxAggregate");
const User_rolesMinAggregate_1 = require("../outputs/User_rolesMinAggregate");
const User_rolesSumAggregate_1 = require("../outputs/User_rolesSumAggregate");
let User_rolesGroupBy = class User_rolesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], User_rolesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesGroupBy.prototype, "permissions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesCountAggregate_1.User_rolesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesCountAggregate_1.User_rolesCountAggregate)
], User_rolesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesAvgAggregate_1.User_rolesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesAvgAggregate_1.User_rolesAvgAggregate)
], User_rolesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesSumAggregate_1.User_rolesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesSumAggregate_1.User_rolesSumAggregate)
], User_rolesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesMinAggregate_1.User_rolesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesMinAggregate_1.User_rolesMinAggregate)
], User_rolesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesMaxAggregate_1.User_rolesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesMaxAggregate_1.User_rolesMaxAggregate)
], User_rolesGroupBy.prototype, "_max", void 0);
User_rolesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("User_rolesGroupBy", {
        isAbstract: true
    })
], User_rolesGroupBy);
exports.User_rolesGroupBy = User_rolesGroupBy;
