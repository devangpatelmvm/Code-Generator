"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsCreateWithoutComponentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesCreateNestedManyWithoutProjectInput_1 = require("../inputs/PackagesCreateNestedManyWithoutProjectInput");
const TablesCreateNestedManyWithoutProjectInput_1 = require("../inputs/TablesCreateNestedManyWithoutProjectInput");
const UsersCreateNestedOneWithoutProjectInput_1 = require("../inputs/UsersCreateNestedOneWithoutProjectInput");
let ProjectsCreateWithoutComponentsInput = class ProjectsCreateWithoutComponentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutComponentsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutComponentsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutComponentsInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutComponentsInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutComponentsInput.prototype, "framework", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesCreateNestedManyWithoutProjectInput_1.PackagesCreateNestedManyWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesCreateNestedManyWithoutProjectInput_1.PackagesCreateNestedManyWithoutProjectInput)
], ProjectsCreateWithoutComponentsInput.prototype, "Package", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesCreateNestedManyWithoutProjectInput_1.TablesCreateNestedManyWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesCreateNestedManyWithoutProjectInput_1.TablesCreateNestedManyWithoutProjectInput)
], ProjectsCreateWithoutComponentsInput.prototype, "table", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersCreateNestedOneWithoutProjectInput_1.UsersCreateNestedOneWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersCreateNestedOneWithoutProjectInput_1.UsersCreateNestedOneWithoutProjectInput)
], ProjectsCreateWithoutComponentsInput.prototype, "user", void 0);
ProjectsCreateWithoutComponentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsCreateWithoutComponentsInput", {
        isAbstract: true
    })
], ProjectsCreateWithoutComponentsInput);
exports.ProjectsCreateWithoutComponentsInput = ProjectsCreateWithoutComponentsInput;
