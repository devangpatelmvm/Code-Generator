"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsCreateWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateNestedManyWithoutProjectInput_1 = require("../inputs/ComponentsCreateNestedManyWithoutProjectInput");
const PackagesCreateNestedManyWithoutProjectInput_1 = require("../inputs/PackagesCreateNestedManyWithoutProjectInput");
const UsersCreateNestedOneWithoutProjectInput_1 = require("../inputs/UsersCreateNestedOneWithoutProjectInput");
let ProjectsCreateWithoutTableInput = class ProjectsCreateWithoutTableInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutTableInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutTableInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutTableInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutTableInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutTableInput.prototype, "framework", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesCreateNestedManyWithoutProjectInput_1.PackagesCreateNestedManyWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesCreateNestedManyWithoutProjectInput_1.PackagesCreateNestedManyWithoutProjectInput)
], ProjectsCreateWithoutTableInput.prototype, "Package", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersCreateNestedOneWithoutProjectInput_1.UsersCreateNestedOneWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersCreateNestedOneWithoutProjectInput_1.UsersCreateNestedOneWithoutProjectInput)
], ProjectsCreateWithoutTableInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateNestedManyWithoutProjectInput_1.ComponentsCreateNestedManyWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCreateNestedManyWithoutProjectInput_1.ComponentsCreateNestedManyWithoutProjectInput)
], ProjectsCreateWithoutTableInput.prototype, "Components", void 0);
ProjectsCreateWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsCreateWithoutTableInput", {
        isAbstract: true
    })
], ProjectsCreateWithoutTableInput);
exports.ProjectsCreateWithoutTableInput = ProjectsCreateWithoutTableInput;
