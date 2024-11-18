"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let User_rolesMinOrderByAggregateInput = class User_rolesMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesMinOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesMinOrderByAggregateInput.prototype, "permissions", void 0);
User_rolesMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("User_rolesMinOrderByAggregateInput", {
        isAbstract: true
    })
], User_rolesMinOrderByAggregateInput);
exports.User_rolesMinOrderByAggregateInput = User_rolesMinOrderByAggregateInput;
