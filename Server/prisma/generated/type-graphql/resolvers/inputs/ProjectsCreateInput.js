"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateNestedManyWithoutProjectInput_1 = require("../inputs/ComponentsCreateNestedManyWithoutProjectInput");
const PackagesCreateNestedManyWithoutProjectInput_1 = require("../inputs/PackagesCreateNestedManyWithoutProjectInput");
const TablesCreateNestedManyWithoutProjectInput_1 = require("../inputs/TablesCreateNestedManyWithoutProjectInput");
const UsersCreateNestedOneWithoutProjectInput_1 = require("../inputs/UsersCreateNestedOneWithoutProjectInput");
let ProjectsCreateInput = class ProjectsCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateInput.prototype, "framework", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesCreateNestedManyWithoutProjectInput_1.PackagesCreateNestedManyWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesCreateNestedManyWithoutProjectInput_1.PackagesCreateNestedManyWithoutProjectInput)
], ProjectsCreateInput.prototype, "Package", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesCreateNestedManyWithoutProjectInput_1.TablesCreateNestedManyWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesCreateNestedManyWithoutProjectInput_1.TablesCreateNestedManyWithoutProjectInput)
], ProjectsCreateInput.prototype, "table", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersCreateNestedOneWithoutProjectInput_1.UsersCreateNestedOneWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersCreateNestedOneWithoutProjectInput_1.UsersCreateNestedOneWithoutProjectInput)
], ProjectsCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateNestedManyWithoutProjectInput_1.ComponentsCreateNestedManyWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCreateNestedManyWithoutProjectInput_1.ComponentsCreateNestedManyWithoutProjectInput)
], ProjectsCreateInput.prototype, "Components", void 0);
ProjectsCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsCreateInput", {
        isAbstract: true
    })
], ProjectsCreateInput);
exports.ProjectsCreateInput = ProjectsCreateInput;
