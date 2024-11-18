"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_rolesAvgOrderByAggregateInput_1 = require("../inputs/User_rolesAvgOrderByAggregateInput");
const User_rolesCountOrderByAggregateInput_1 = require("../inputs/User_rolesCountOrderByAggregateInput");
const User_rolesMaxOrderByAggregateInput_1 = require("../inputs/User_rolesMaxOrderByAggregateInput");
const User_rolesMinOrderByAggregateInput_1 = require("../inputs/User_rolesMinOrderByAggregateInput");
const User_rolesSumOrderByAggregateInput_1 = require("../inputs/User_rolesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let User_rolesOrderByWithAggregationInput = class User_rolesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesOrderByWithAggregationInput.prototype, "permissions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesCountOrderByAggregateInput_1.User_rolesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesCountOrderByAggregateInput_1.User_rolesCountOrderByAggregateInput)
], User_rolesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesAvgOrderByAggregateInput_1.User_rolesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesAvgOrderByAggregateInput_1.User_rolesAvgOrderByAggregateInput)
], User_rolesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesMaxOrderByAggregateInput_1.User_rolesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesMaxOrderByAggregateInput_1.User_rolesMaxOrderByAggregateInput)
], User_rolesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesMinOrderByAggregateInput_1.User_rolesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesMinOrderByAggregateInput_1.User_rolesMinOrderByAggregateInput)
], User_rolesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesSumOrderByAggregateInput_1.User_rolesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesSumOrderByAggregateInput_1.User_rolesSumOrderByAggregateInput)
], User_rolesOrderByWithAggregationInput.prototype, "_sum", void 0);
User_rolesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("User_rolesOrderByWithAggregationInput", {
        isAbstract: true
    })
], User_rolesOrderByWithAggregationInput);
exports.User_rolesOrderByWithAggregationInput = User_rolesOrderByWithAggregationInput;
