"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PackagesMinOrderByAggregateInput = class PackagesMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesMinOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesMinOrderByAggregateInput.prototype, "version", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesMinOrderByAggregateInput.prototype, "projectId", void 0);
PackagesMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesMinOrderByAggregateInput", {
        isAbstract: true
    })
], PackagesMinOrderByAggregateInput);
exports.PackagesMinOrderByAggregateInput = PackagesMinOrderByAggregateInput;
