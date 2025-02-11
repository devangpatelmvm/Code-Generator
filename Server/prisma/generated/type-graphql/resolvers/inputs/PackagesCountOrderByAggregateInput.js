"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PackagesCountOrderByAggregateInput = class PackagesCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesCountOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesCountOrderByAggregateInput.prototype, "version", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesCountOrderByAggregateInput.prototype, "projectId", void 0);
PackagesCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesCountOrderByAggregateInput", {
        isAbstract: true
    })
], PackagesCountOrderByAggregateInput);
exports.PackagesCountOrderByAggregateInput = PackagesCountOrderByAggregateInput;
