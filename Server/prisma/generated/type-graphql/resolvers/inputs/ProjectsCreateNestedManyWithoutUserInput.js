"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateOrConnectWithoutUserInput_1 = require("../inputs/ProjectsCreateOrConnectWithoutUserInput");
const ProjectsCreateWithoutUserInput_1 = require("../inputs/ProjectsCreateWithoutUserInput");
const ProjectsWhereUniqueInput_1 = require("../inputs/ProjectsWhereUniqueInput");
let ProjectsCreateNestedManyWithoutUserInput = class ProjectsCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsCreateWithoutUserInput_1.ProjectsCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectsCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsCreateOrConnectWithoutUserInput_1.ProjectsCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectsCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectsCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
ProjectsCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], ProjectsCreateNestedManyWithoutUserInput);
exports.ProjectsCreateNestedManyWithoutUserInput = ProjectsCreateNestedManyWithoutUserInput;
