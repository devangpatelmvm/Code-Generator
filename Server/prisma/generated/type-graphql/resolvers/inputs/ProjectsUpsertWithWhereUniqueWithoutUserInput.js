"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateWithoutUserInput_1 = require("../inputs/ProjectsCreateWithoutUserInput");
const ProjectsUpdateWithoutUserInput_1 = require("../inputs/ProjectsUpdateWithoutUserInput");
const ProjectsWhereUniqueInput_1 = require("../inputs/ProjectsWhereUniqueInput");
let ProjectsUpsertWithWhereUniqueWithoutUserInput = class ProjectsUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], ProjectsUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateWithoutUserInput_1.ProjectsUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateWithoutUserInput_1.ProjectsUpdateWithoutUserInput)
], ProjectsUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateWithoutUserInput_1.ProjectsCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsCreateWithoutUserInput_1.ProjectsCreateWithoutUserInput)
], ProjectsUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
ProjectsUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], ProjectsUpsertWithWhereUniqueWithoutUserInput);
exports.ProjectsUpsertWithWhereUniqueWithoutUserInput = ProjectsUpsertWithWhereUniqueWithoutUserInput;
