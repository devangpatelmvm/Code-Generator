"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesOrderByWithRelationInput_1 = require("../inputs/TablesOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ColumnsOrderByWithRelationInput = class ColumnsOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsOrderByWithRelationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsOrderByWithRelationInput.prototype, "constraint", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesOrderByWithRelationInput_1.TablesOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesOrderByWithRelationInput_1.TablesOrderByWithRelationInput)
], ColumnsOrderByWithRelationInput.prototype, "table", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsOrderByWithRelationInput.prototype, "tableId", void 0);
ColumnsOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsOrderByWithRelationInput", {
        isAbstract: true
    })
], ColumnsOrderByWithRelationInput);
exports.ColumnsOrderByWithRelationInput = ColumnsOrderByWithRelationInput;
