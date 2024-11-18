"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsCreateNestedOneWithoutComponentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateOrConnectWithoutComponentsInput_1 = require("../inputs/ProjectsCreateOrConnectWithoutComponentsInput");
const ProjectsCreateWithoutComponentsInput_1 = require("../inputs/ProjectsCreateWithoutComponentsInput");
const ProjectsWhereUniqueInput_1 = require("../inputs/ProjectsWhereUniqueInput");
let ProjectsCreateNestedOneWithoutComponentsInput = class ProjectsCreateNestedOneWithoutComponentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateWithoutComponentsInput_1.ProjectsCreateWithoutComponentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsCreateWithoutComponentsInput_1.ProjectsCreateWithoutComponentsInput)
], ProjectsCreateNestedOneWithoutComponentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateOrConnectWithoutComponentsInput_1.ProjectsCreateOrConnectWithoutComponentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsCreateOrConnectWithoutComponentsInput_1.ProjectsCreateOrConnectWithoutComponentsInput)
], ProjectsCreateNestedOneWithoutComponentsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], ProjectsCreateNestedOneWithoutComponentsInput.prototype, "connect", void 0);
ProjectsCreateNestedOneWithoutComponentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsCreateNestedOneWithoutComponentsInput", {
        isAbstract: true
    })
], ProjectsCreateNestedOneWithoutComponentsInput);
exports.ProjectsCreateNestedOneWithoutComponentsInput = ProjectsCreateNestedOneWithoutComponentsInput;
