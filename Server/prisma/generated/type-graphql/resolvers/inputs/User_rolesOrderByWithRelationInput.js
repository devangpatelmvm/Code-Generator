"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersOrderByRelationAggregateInput_1 = require("../inputs/UsersOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let User_rolesOrderByWithRelationInput = class User_rolesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesOrderByWithRelationInput.prototype, "permissions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersOrderByRelationAggregateInput_1.UsersOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersOrderByRelationAggregateInput_1.UsersOrderByRelationAggregateInput)
], User_rolesOrderByWithRelationInput.prototype, "users", void 0);
User_rolesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("User_rolesOrderByWithRelationInput", {
        isAbstract: true
    })
], User_rolesOrderByWithRelationInput);
exports.User_rolesOrderByWithRelationInput = User_rolesOrderByWithRelationInput;
