"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsCreateWithoutPackageInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateNestedManyWithoutProjectInput_1 = require("../inputs/ComponentsCreateNestedManyWithoutProjectInput");
const TablesCreateNestedManyWithoutProjectInput_1 = require("../inputs/TablesCreateNestedManyWithoutProjectInput");
const UsersCreateNestedOneWithoutProjectInput_1 = require("../inputs/UsersCreateNestedOneWithoutProjectInput");
let ProjectsCreateWithoutPackageInput = class ProjectsCreateWithoutPackageInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutPackageInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutPackageInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutPackageInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutPackageInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutPackageInput.prototype, "framework", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesCreateNestedManyWithoutProjectInput_1.TablesCreateNestedManyWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesCreateNestedManyWithoutProjectInput_1.TablesCreateNestedManyWithoutProjectInput)
], ProjectsCreateWithoutPackageInput.prototype, "table", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersCreateNestedOneWithoutProjectInput_1.UsersCreateNestedOneWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersCreateNestedOneWithoutProjectInput_1.UsersCreateNestedOneWithoutProjectInput)
], ProjectsCreateWithoutPackageInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateNestedManyWithoutProjectInput_1.ComponentsCreateNestedManyWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCreateNestedManyWithoutProjectInput_1.ComponentsCreateNestedManyWithoutProjectInput)
], ProjectsCreateWithoutPackageInput.prototype, "Components", void 0);
ProjectsCreateWithoutPackageInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsCreateWithoutPackageInput", {
        isAbstract: true
    })
], ProjectsCreateWithoutPackageInput);
exports.ProjectsCreateWithoutPackageInput = ProjectsCreateWithoutPackageInput;
