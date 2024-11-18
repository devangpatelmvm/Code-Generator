"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ColumnsOrderByRelationAggregateInput = class ColumnsOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsOrderByRelationAggregateInput.prototype, "_count", void 0);
ColumnsOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsOrderByRelationAggregateInput", {
        isAbstract: true
    })
], ColumnsOrderByRelationAggregateInput);
exports.ColumnsOrderByRelationAggregateInput = ColumnsOrderByRelationAggregateInput;
