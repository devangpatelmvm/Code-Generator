"use strict";
var UsersScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const IntNullableWithAggregatesFilter_1 = require("../inputs/IntNullableWithAggregatesFilter");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let UsersScalarWhereWithAggregatesInput = UsersScalarWhereWithAggregatesInput_1 = class UsersScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], UsersScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], UsersScalarWhereWithAggregatesInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], UsersScalarWhereWithAggregatesInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], UsersScalarWhereWithAggregatesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], UsersScalarWhereWithAggregatesInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], UsersScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], UsersScalarWhereWithAggregatesInput.prototype, "user_rolesId", void 0);
UsersScalarWhereWithAggregatesInput = UsersScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], UsersScalarWhereWithAggregatesInput);
exports.UsersScalarWhereWithAggregatesInput = UsersScalarWhereWithAggregatesInput;
