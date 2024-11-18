"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsCreateOrConnectWithoutPackageInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateWithoutPackageInput_1 = require("../inputs/ProjectsCreateWithoutPackageInput");
const ProjectsWhereUniqueInput_1 = require("../inputs/ProjectsWhereUniqueInput");
let ProjectsCreateOrConnectWithoutPackageInput = class ProjectsCreateOrConnectWithoutPackageInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], ProjectsCreateOrConnectWithoutPackageInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateWithoutPackageInput_1.ProjectsCreateWithoutPackageInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsCreateWithoutPackageInput_1.ProjectsCreateWithoutPackageInput)
], ProjectsCreateOrConnectWithoutPackageInput.prototype, "create", void 0);
ProjectsCreateOrConnectWithoutPackageInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsCreateOrConnectWithoutPackageInput", {
        isAbstract: true
    })
], ProjectsCreateOrConnectWithoutPackageInput);
exports.ProjectsCreateOrConnectWithoutPackageInput = ProjectsCreateOrConnectWithoutPackageInput;
