"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TablesCountOrderByAggregateInput = class TablesCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesCountOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesCountOrderByAggregateInput.prototype, "projectId", void 0);
TablesCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesCountOrderByAggregateInput", {
        isAbstract: true
    })
], TablesCountOrderByAggregateInput);
exports.TablesCountOrderByAggregateInput = TablesCountOrderByAggregateInput;
