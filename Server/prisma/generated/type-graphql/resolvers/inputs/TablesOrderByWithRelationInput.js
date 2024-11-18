"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsOrderByRelationAggregateInput_1 = require("../inputs/ColumnsOrderByRelationAggregateInput");
const ProjectsOrderByWithRelationInput_1 = require("../inputs/ProjectsOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TablesOrderByWithRelationInput = class TablesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsOrderByWithRelationInput_1.ProjectsOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsOrderByWithRelationInput_1.ProjectsOrderByWithRelationInput)
], TablesOrderByWithRelationInput.prototype, "project", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesOrderByWithRelationInput.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsOrderByRelationAggregateInput_1.ColumnsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsOrderByRelationAggregateInput_1.ColumnsOrderByRelationAggregateInput)
], TablesOrderByWithRelationInput.prototype, "column", void 0);
TablesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesOrderByWithRelationInput", {
        isAbstract: true
    })
], TablesOrderByWithRelationInput);
exports.TablesOrderByWithRelationInput = TablesOrderByWithRelationInput;
