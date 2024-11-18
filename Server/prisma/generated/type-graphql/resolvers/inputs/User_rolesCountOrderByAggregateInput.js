"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let User_rolesCountOrderByAggregateInput = class User_rolesCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesCountOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesCountOrderByAggregateInput.prototype, "permissions", void 0);
User_rolesCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("User_rolesCountOrderByAggregateInput", {
        isAbstract: true
    })
], User_rolesCountOrderByAggregateInput);
exports.User_rolesCountOrderByAggregateInput = User_rolesCountOrderByAggregateInput;
