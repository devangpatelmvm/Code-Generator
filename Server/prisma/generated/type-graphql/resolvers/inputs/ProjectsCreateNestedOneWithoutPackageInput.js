"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsCreateNestedOneWithoutPackageInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateOrConnectWithoutPackageInput_1 = require("../inputs/ProjectsCreateOrConnectWithoutPackageInput");
const ProjectsCreateWithoutPackageInput_1 = require("../inputs/ProjectsCreateWithoutPackageInput");
const ProjectsWhereUniqueInput_1 = require("../inputs/ProjectsWhereUniqueInput");
let ProjectsCreateNestedOneWithoutPackageInput = class ProjectsCreateNestedOneWithoutPackageInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateWithoutPackageInput_1.ProjectsCreateWithoutPackageInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsCreateWithoutPackageInput_1.ProjectsCreateWithoutPackageInput)
], ProjectsCreateNestedOneWithoutPackageInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateOrConnectWithoutPackageInput_1.ProjectsCreateOrConnectWithoutPackageInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsCreateOrConnectWithoutPackageInput_1.ProjectsCreateOrConnectWithoutPackageInput)
], ProjectsCreateNestedOneWithoutPackageInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], ProjectsCreateNestedOneWithoutPackageInput.prototype, "connect", void 0);
ProjectsCreateNestedOneWithoutPackageInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsCreateNestedOneWithoutPackageInput", {
        isAbstract: true
    })
], ProjectsCreateNestedOneWithoutPackageInput);
exports.ProjectsCreateNestedOneWithoutPackageInput = ProjectsCreateNestedOneWithoutPackageInput;
