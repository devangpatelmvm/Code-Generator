"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsOrderByWithRelationInput_1 = require("../inputs/ProjectsOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PackagesOrderByWithRelationInput = class PackagesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesOrderByWithRelationInput.prototype, "version", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsOrderByWithRelationInput_1.ProjectsOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsOrderByWithRelationInput_1.ProjectsOrderByWithRelationInput)
], PackagesOrderByWithRelationInput.prototype, "project", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesOrderByWithRelationInput.prototype, "projectId", void 0);
PackagesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesOrderByWithRelationInput", {
        isAbstract: true
    })
], PackagesOrderByWithRelationInput);
exports.PackagesOrderByWithRelationInput = PackagesOrderByWithRelationInput;
