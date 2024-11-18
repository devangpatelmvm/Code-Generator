"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateWithoutUserInput_1 = require("../inputs/ProjectsCreateWithoutUserInput");
const ProjectsWhereUniqueInput_1 = require("../inputs/ProjectsWhereUniqueInput");
let ProjectsCreateOrConnectWithoutUserInput = class ProjectsCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], ProjectsCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateWithoutUserInput_1.ProjectsCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsCreateWithoutUserInput_1.ProjectsCreateWithoutUserInput)
], ProjectsCreateOrConnectWithoutUserInput.prototype, "create", void 0);
ProjectsCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], ProjectsCreateOrConnectWithoutUserInput);
exports.ProjectsCreateOrConnectWithoutUserInput = ProjectsCreateOrConnectWithoutUserInput;
