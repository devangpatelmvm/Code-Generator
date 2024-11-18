"use strict";
var User_rolesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UsersListRelationFilter_1 = require("../inputs/UsersListRelationFilter");
let User_rolesWhereInput = User_rolesWhereInput_1 = class User_rolesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [User_rolesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], User_rolesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [User_rolesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], User_rolesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [User_rolesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], User_rolesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], User_rolesWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], User_rolesWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], User_rolesWhereInput.prototype, "permissions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersListRelationFilter_1.UsersListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersListRelationFilter_1.UsersListRelationFilter)
], User_rolesWhereInput.prototype, "users", void 0);
User_rolesWhereInput = User_rolesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("User_rolesWhereInput", {
        isAbstract: true
    })
], User_rolesWhereInput);
exports.User_rolesWhereInput = User_rolesWhereInput;
