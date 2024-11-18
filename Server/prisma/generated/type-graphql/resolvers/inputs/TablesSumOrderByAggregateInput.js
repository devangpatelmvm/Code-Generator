"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TablesSumOrderByAggregateInput = class TablesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesSumOrderByAggregateInput.prototype, "projectId", void 0);
TablesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesSumOrderByAggregateInput", {
        isAbstract: true
    })
], TablesSumOrderByAggregateInput);
exports.TablesSumOrderByAggregateInput = TablesSumOrderByAggregateInput;
