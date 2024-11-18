"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsCreateOrConnectWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateWithoutTableInput_1 = require("../inputs/ProjectsCreateWithoutTableInput");
const ProjectsWhereUniqueInput_1 = require("../inputs/ProjectsWhereUniqueInput");
let ProjectsCreateOrConnectWithoutTableInput = class ProjectsCreateOrConnectWithoutTableInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], ProjectsCreateOrConnectWithoutTableInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateWithoutTableInput_1.ProjectsCreateWithoutTableInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsCreateWithoutTableInput_1.ProjectsCreateWithoutTableInput)
], ProjectsCreateOrConnectWithoutTableInput.prototype, "create", void 0);
ProjectsCreateOrConnectWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsCreateOrConnectWithoutTableInput", {
        isAbstract: true
    })
], ProjectsCreateOrConnectWithoutTableInput);
exports.ProjectsCreateOrConnectWithoutTableInput = ProjectsCreateOrConnectWithoutTableInput;
