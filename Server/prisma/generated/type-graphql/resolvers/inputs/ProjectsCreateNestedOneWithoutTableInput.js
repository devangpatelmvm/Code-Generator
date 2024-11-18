"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsCreateNestedOneWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateOrConnectWithoutTableInput_1 = require("../inputs/ProjectsCreateOrConnectWithoutTableInput");
const ProjectsCreateWithoutTableInput_1 = require("../inputs/ProjectsCreateWithoutTableInput");
const ProjectsWhereUniqueInput_1 = require("../inputs/ProjectsWhereUniqueInput");
let ProjectsCreateNestedOneWithoutTableInput = class ProjectsCreateNestedOneWithoutTableInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateWithoutTableInput_1.ProjectsCreateWithoutTableInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsCreateWithoutTableInput_1.ProjectsCreateWithoutTableInput)
], ProjectsCreateNestedOneWithoutTableInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateOrConnectWithoutTableInput_1.ProjectsCreateOrConnectWithoutTableInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsCreateOrConnectWithoutTableInput_1.ProjectsCreateOrConnectWithoutTableInput)
], ProjectsCreateNestedOneWithoutTableInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], ProjectsCreateNestedOneWithoutTableInput.prototype, "connect", void 0);
ProjectsCreateNestedOneWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsCreateNestedOneWithoutTableInput", {
        isAbstract: true
    })
], ProjectsCreateNestedOneWithoutTableInput);
exports.ProjectsCreateNestedOneWithoutTableInput = ProjectsCreateNestedOneWithoutTableInput;
