"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PackagesOrderByRelationAggregateInput = class PackagesOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesOrderByRelationAggregateInput.prototype, "_count", void 0);
PackagesOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesOrderByRelationAggregateInput", {
        isAbstract: true
    })
], PackagesOrderByRelationAggregateInput);
exports.PackagesOrderByRelationAggregateInput = PackagesOrderByRelationAggregateInput;
