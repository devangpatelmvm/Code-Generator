"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let User_rolesSumOrderByAggregateInput = class User_rolesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], User_rolesSumOrderByAggregateInput.prototype, "id", void 0);
User_rolesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("User_rolesSumOrderByAggregateInput", {
        isAbstract: true
    })
], User_rolesSumOrderByAggregateInput);
exports.User_rolesSumOrderByAggregateInput = User_rolesSumOrderByAggregateInput;
