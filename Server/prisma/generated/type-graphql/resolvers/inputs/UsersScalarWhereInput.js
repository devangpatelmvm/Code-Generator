"use strict";
var UsersScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let UsersScalarWhereInput = UsersScalarWhereInput_1 = class UsersScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], UsersScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UsersScalarWhereInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UsersScalarWhereInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UsersScalarWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UsersScalarWhereInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UsersScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], UsersScalarWhereInput.prototype, "user_rolesId", void 0);
UsersScalarWhereInput = UsersScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersScalarWhereInput", {
        isAbstract: true
    })
], UsersScalarWhereInput);
exports.UsersScalarWhereInput = UsersScalarWhereInput;
