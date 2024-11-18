"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyUser_rolesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_rolesOrderByWithRelationInput_1 = require("../../../inputs/User_rolesOrderByWithRelationInput");
const User_rolesWhereInput_1 = require("../../../inputs/User_rolesWhereInput");
const User_rolesWhereUniqueInput_1 = require("../../../inputs/User_rolesWhereUniqueInput");
const User_rolesScalarFieldEnum_1 = require("../../../../enums/User_rolesScalarFieldEnum");
let FindManyUser_rolesArgs = class FindManyUser_rolesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesWhereInput_1.User_rolesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesWhereInput_1.User_rolesWhereInput)
], FindManyUser_rolesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [User_rolesOrderByWithRelationInput_1.User_rolesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyUser_rolesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesWhereUniqueInput_1.User_rolesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesWhereUniqueInput_1.User_rolesWhereUniqueInput)
], FindManyUser_rolesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyUser_rolesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyUser_rolesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [User_rolesScalarFieldEnum_1.User_rolesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyUser_rolesArgs.prototype, "distinct", void 0);
FindManyUser_rolesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyUser_rolesArgs);
exports.FindManyUser_rolesArgs = FindManyUser_rolesArgs;
