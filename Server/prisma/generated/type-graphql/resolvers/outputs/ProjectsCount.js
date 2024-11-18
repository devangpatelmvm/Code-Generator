"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProjectsCount = class ProjectsCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProjectsCount.prototype, "Package", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProjectsCount.prototype, "table", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProjectsCount.prototype, "Components", void 0);
ProjectsCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProjectsCount", {
        isAbstract: true
    })
], ProjectsCount);
exports.ProjectsCount = ProjectsCount;
