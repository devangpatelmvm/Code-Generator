"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateNestedManyWithoutProjectInput_1 = require("../inputs/ComponentsCreateNestedManyWithoutProjectInput");
const PackagesCreateNestedManyWithoutProjectInput_1 = require("../inputs/PackagesCreateNestedManyWithoutProjectInput");
const TablesCreateNestedManyWithoutProjectInput_1 = require("../inputs/TablesCreateNestedManyWithoutProjectInput");
let ProjectsCreateWithoutUserInput = class ProjectsCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutUserInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutUserInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutUserInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutUserInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsCreateWithoutUserInput.prototype, "framework", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesCreateNestedManyWithoutProjectInput_1.PackagesCreateNestedManyWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesCreateNestedManyWithoutProjectInput_1.PackagesCreateNestedManyWithoutProjectInput)
], ProjectsCreateWithoutUserInput.prototype, "Package", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesCreateNestedManyWithoutProjectInput_1.TablesCreateNestedManyWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesCreateNestedManyWithoutProjectInput_1.TablesCreateNestedManyWithoutProjectInput)
], ProjectsCreateWithoutUserInput.prototype, "table", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateNestedManyWithoutProjectInput_1.ComponentsCreateNestedManyWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCreateNestedManyWithoutProjectInput_1.ComponentsCreateNestedManyWithoutProjectInput)
], ProjectsCreateWithoutUserInput.prototype, "Components", void 0);
ProjectsCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsCreateWithoutUserInput", {
        isAbstract: true
    })
], ProjectsCreateWithoutUserInput);
exports.ProjectsCreateWithoutUserInput = ProjectsCreateWithoutUserInput;
