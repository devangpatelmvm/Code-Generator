"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsUpdateOneRequiredWithoutComponentsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateOrConnectWithoutComponentsInput_1 = require("../inputs/ProjectsCreateOrConnectWithoutComponentsInput");
const ProjectsCreateWithoutComponentsInput_1 = require("../inputs/ProjectsCreateWithoutComponentsInput");
const ProjectsUpdateWithoutComponentsInput_1 = require("../inputs/ProjectsUpdateWithoutComponentsInput");
const ProjectsUpsertWithoutComponentsInput_1 = require("../inputs/ProjectsUpsertWithoutComponentsInput");
const ProjectsWhereUniqueInput_1 = require("../inputs/ProjectsWhereUniqueInput");
let ProjectsUpdateOneRequiredWithoutComponentsNestedInput = class ProjectsUpdateOneRequiredWithoutComponentsNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateWithoutComponentsInput_1.ProjectsCreateWithoutComponentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsCreateWithoutComponentsInput_1.ProjectsCreateWithoutComponentsInput)
], ProjectsUpdateOneRequiredWithoutComponentsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateOrConnectWithoutComponentsInput_1.ProjectsCreateOrConnectWithoutComponentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsCreateOrConnectWithoutComponentsInput_1.ProjectsCreateOrConnectWithoutComponentsInput)
], ProjectsUpdateOneRequiredWithoutComponentsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpsertWithoutComponentsInput_1.ProjectsUpsertWithoutComponentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsUpsertWithoutComponentsInput_1.ProjectsUpsertWithoutComponentsInput)
], ProjectsUpdateOneRequiredWithoutComponentsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], ProjectsUpdateOneRequiredWithoutComponentsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateWithoutComponentsInput_1.ProjectsUpdateWithoutComponentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateWithoutComponentsInput_1.ProjectsUpdateWithoutComponentsInput)
], ProjectsUpdateOneRequiredWithoutComponentsNestedInput.prototype, "update", void 0);
ProjectsUpdateOneRequiredWithoutComponentsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsUpdateOneRequiredWithoutComponentsNestedInput", {
        isAbstract: true
    })
], ProjectsUpdateOneRequiredWithoutComponentsNestedInput);
exports.ProjectsUpdateOneRequiredWithoutComponentsNestedInput = ProjectsUpdateOneRequiredWithoutComponentsNestedInput;
