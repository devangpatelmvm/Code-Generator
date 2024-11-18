"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TablesMaxOrderByAggregateInput = class TablesMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesMaxOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesMaxOrderByAggregateInput.prototype, "projectId", void 0);
TablesMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesMaxOrderByAggregateInput", {
        isAbstract: true
    })
], TablesMaxOrderByAggregateInput);
exports.TablesMaxOrderByAggregateInput = TablesMaxOrderByAggregateInput;
