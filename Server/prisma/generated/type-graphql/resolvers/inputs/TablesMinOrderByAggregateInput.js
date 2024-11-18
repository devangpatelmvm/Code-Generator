"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TablesMinOrderByAggregateInput = class TablesMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesMinOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesMinOrderByAggregateInput.prototype, "projectId", void 0);
TablesMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesMinOrderByAggregateInput", {
        isAbstract: true
    })
], TablesMinOrderByAggregateInput);
exports.TablesMinOrderByAggregateInput = TablesMinOrderByAggregateInput;
