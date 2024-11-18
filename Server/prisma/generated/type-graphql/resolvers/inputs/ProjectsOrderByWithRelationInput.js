"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsOrderByRelationAggregateInput_1 = require("../inputs/ComponentsOrderByRelationAggregateInput");
const PackagesOrderByRelationAggregateInput_1 = require("../inputs/PackagesOrderByRelationAggregateInput");
const TablesOrderByRelationAggregateInput_1 = require("../inputs/TablesOrderByRelationAggregateInput");
const UsersOrderByWithRelationInput_1 = require("../inputs/UsersOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProjectsOrderByWithRelationInput = class ProjectsOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsOrderByWithRelationInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsOrderByWithRelationInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsOrderByWithRelationInput.prototype, "framework", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesOrderByRelationAggregateInput_1.PackagesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesOrderByRelationAggregateInput_1.PackagesOrderByRelationAggregateInput)
], ProjectsOrderByWithRelationInput.prototype, "Package", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesOrderByRelationAggregateInput_1.TablesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesOrderByRelationAggregateInput_1.TablesOrderByRelationAggregateInput)
], ProjectsOrderByWithRelationInput.prototype, "table", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersOrderByWithRelationInput_1.UsersOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersOrderByWithRelationInput_1.UsersOrderByWithRelationInput)
], ProjectsOrderByWithRelationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsOrderByRelationAggregateInput_1.ComponentsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsOrderByRelationAggregateInput_1.ComponentsOrderByRelationAggregateInput)
], ProjectsOrderByWithRelationInput.prototype, "Components", void 0);
ProjectsOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsOrderByWithRelationInput", {
        isAbstract: true
    })
], ProjectsOrderByWithRelationInput);
exports.ProjectsOrderByWithRelationInput = ProjectsOrderByWithRelationInput;
