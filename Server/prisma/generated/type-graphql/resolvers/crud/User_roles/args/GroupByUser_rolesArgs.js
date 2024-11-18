"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUser_rolesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_rolesOrderByWithAggregationInput_1 = require("../../../inputs/User_rolesOrderByWithAggregationInput");
const User_rolesScalarWhereWithAggregatesInput_1 = require("../../../inputs/User_rolesScalarWhereWithAggregatesInput");
const User_rolesWhereInput_1 = require("../../../inputs/User_rolesWhereInput");
const User_rolesScalarFieldEnum_1 = require("../../../../enums/User_rolesScalarFieldEnum");
let GroupByUser_rolesArgs = class GroupByUser_rolesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesWhereInput_1.User_rolesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesWhereInput_1.User_rolesWhereInput)
], GroupByUser_rolesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [User_rolesOrderByWithAggregationInput_1.User_rolesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByUser_rolesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [User_rolesScalarFieldEnum_1.User_rolesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByUser_rolesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesScalarWhereWithAggregatesInput_1.User_rolesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesScalarWhereWithAggregatesInput_1.User_rolesScalarWhereWithAggregatesInput)
], GroupByUser_rolesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByUser_rolesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByUser_rolesArgs.prototype, "skip", void 0);
GroupByUser_rolesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByUser_rolesArgs);
exports.GroupByUser_rolesArgs = GroupByUser_rolesArgs;
