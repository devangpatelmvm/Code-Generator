"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsUpdateWithoutUserInput_1 = require("../inputs/ProjectsUpdateWithoutUserInput");
const ProjectsWhereUniqueInput_1 = require("../inputs/ProjectsWhereUniqueInput");
let ProjectsUpdateWithWhereUniqueWithoutUserInput = class ProjectsUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], ProjectsUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateWithoutUserInput_1.ProjectsUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateWithoutUserInput_1.ProjectsUpdateWithoutUserInput)
], ProjectsUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
ProjectsUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], ProjectsUpdateWithWhereUniqueWithoutUserInput);
exports.ProjectsUpdateWithWhereUniqueWithoutUserInput = ProjectsUpdateWithWhereUniqueWithoutUserInput;
