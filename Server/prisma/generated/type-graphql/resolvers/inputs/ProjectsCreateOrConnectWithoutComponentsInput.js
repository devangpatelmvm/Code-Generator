"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsCreateOrConnectWithoutComponentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateWithoutComponentsInput_1 = require("../inputs/ProjectsCreateWithoutComponentsInput");
const ProjectsWhereUniqueInput_1 = require("../inputs/ProjectsWhereUniqueInput");
let ProjectsCreateOrConnectWithoutComponentsInput = class ProjectsCreateOrConnectWithoutComponentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], ProjectsCreateOrConnectWithoutComponentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateWithoutComponentsInput_1.ProjectsCreateWithoutComponentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsCreateWithoutComponentsInput_1.ProjectsCreateWithoutComponentsInput)
], ProjectsCreateOrConnectWithoutComponentsInput.prototype, "create", void 0);
ProjectsCreateOrConnectWithoutComponentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsCreateOrConnectWithoutComponentsInput", {
        isAbstract: true
    })
], ProjectsCreateOrConnectWithoutComponentsInput);
exports.ProjectsCreateOrConnectWithoutComponentsInput = ProjectsCreateOrConnectWithoutComponentsInput;
