"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PackagesMaxOrderByAggregateInput = class PackagesMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesMaxOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesMaxOrderByAggregateInput.prototype, "version", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesMaxOrderByAggregateInput.prototype, "projectId", void 0);
PackagesMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesMaxOrderByAggregateInput", {
        isAbstract: true
    })
], PackagesMaxOrderByAggregateInput);
exports.PackagesMaxOrderByAggregateInput = PackagesMaxOrderByAggregateInput;
