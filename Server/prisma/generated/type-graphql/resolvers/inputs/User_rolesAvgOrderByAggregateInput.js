"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let User_rolesAvgOrderByAggregateInput = class User_rolesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesAvgOrderByAggregateInput.prototype, "id", void 0);
User_rolesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("User_rolesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], User_rolesAvgOrderByAggregateInput);
exports.User_rolesAvgOrderByAggregateInput = User_rolesAvgOrderByAggregateInput;
