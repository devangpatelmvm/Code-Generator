"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let User_rolesMaxOrderByAggregateInput = class User_rolesMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesMaxOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesMaxOrderByAggregateInput.prototype, "permissions", void 0);
User_rolesMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("User_rolesMaxOrderByAggregateInput", {
        isAbstract: true
    })
], User_rolesMaxOrderByAggregateInput);
exports.User_rolesMaxOrderByAggregateInput = User_rolesMaxOrderByAggregateInput;
