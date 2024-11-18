"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsScalarWhereInput_1 = require("../inputs/ProjectsScalarWhereInput");
const ProjectsUpdateManyMutationInput_1 = require("../inputs/ProjectsUpdateManyMutationInput");
let ProjectsUpdateManyWithWhereWithoutUserInput = class ProjectsUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsScalarWhereInput_1.ProjectsScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsScalarWhereInput_1.ProjectsScalarWhereInput)
], ProjectsUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateManyMutationInput_1.ProjectsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateManyMutationInput_1.ProjectsUpdateManyMutationInput)
], ProjectsUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
ProjectsUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], ProjectsUpdateManyWithWhereWithoutUserInput);
exports.ProjectsUpdateManyWithWhereWithoutUserInput = ProjectsUpdateManyWithWhereWithoutUserInput;
