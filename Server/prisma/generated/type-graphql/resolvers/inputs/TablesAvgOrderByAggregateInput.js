"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TablesAvgOrderByAggregateInput = class TablesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesAvgOrderByAggregateInput.prototype, "projectId", void 0);
TablesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], TablesAvgOrderByAggregateInput);
exports.TablesAvgOrderByAggregateInput = TablesAvgOrderByAggregateInput;
