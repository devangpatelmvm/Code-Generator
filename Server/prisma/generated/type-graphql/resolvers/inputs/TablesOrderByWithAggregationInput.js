"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesAvgOrderByAggregateInput_1 = require("../inputs/TablesAvgOrderByAggregateInput");
const TablesCountOrderByAggregateInput_1 = require("../inputs/TablesCountOrderByAggregateInput");
const TablesMaxOrderByAggregateInput_1 = require("../inputs/TablesMaxOrderByAggregateInput");
const TablesMinOrderByAggregateInput_1 = require("../inputs/TablesMinOrderByAggregateInput");
const TablesSumOrderByAggregateInput_1 = require("../inputs/TablesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TablesOrderByWithAggregationInput = class TablesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesOrderByWithAggregationInput.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesCountOrderByAggregateInput_1.TablesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesCountOrderByAggregateInput_1.TablesCountOrderByAggregateInput)
], TablesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesAvgOrderByAggregateInput_1.TablesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesAvgOrderByAggregateInput_1.TablesAvgOrderByAggregateInput)
], TablesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesMaxOrderByAggregateInput_1.TablesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesMaxOrderByAggregateInput_1.TablesMaxOrderByAggregateInput)
], TablesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesMinOrderByAggregateInput_1.TablesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesMinOrderByAggregateInput_1.TablesMinOrderByAggregateInput)
], TablesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesSumOrderByAggregateInput_1.TablesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesSumOrderByAggregateInput_1.TablesSumOrderByAggregateInput)
], TablesOrderByWithAggregationInput.prototype, "_sum", void 0);
TablesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesOrderByWithAggregationInput", {
        isAbstract: true
    })
], TablesOrderByWithAggregationInput);
exports.TablesOrderByWithAggregationInput = TablesOrderByWithAggregationInput;
