"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsUpdateOneRequiredWithoutTableNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateOrConnectWithoutTableInput_1 = require("../inputs/ProjectsCreateOrConnectWithoutTableInput");
const ProjectsCreateWithoutTableInput_1 = require("../inputs/ProjectsCreateWithoutTableInput");
const ProjectsUpdateWithoutTableInput_1 = require("../inputs/ProjectsUpdateWithoutTableInput");
const ProjectsUpsertWithoutTableInput_1 = require("../inputs/ProjectsUpsertWithoutTableInput");
const ProjectsWhereUniqueInput_1 = require("../inputs/ProjectsWhereUniqueInput");
let ProjectsUpdateOneRequiredWithoutTableNestedInput = class ProjectsUpdateOneRequiredWithoutTableNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateWithoutTableInput_1.ProjectsCreateWithoutTableInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsCreateWithoutTableInput_1.ProjectsCreateWithoutTableInput)
], ProjectsUpdateOneRequiredWithoutTableNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateOrConnectWithoutTableInput_1.ProjectsCreateOrConnectWithoutTableInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsCreateOrConnectWithoutTableInput_1.ProjectsCreateOrConnectWithoutTableInput)
], ProjectsUpdateOneRequiredWithoutTableNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpsertWithoutTableInput_1.ProjectsUpsertWithoutTableInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsUpsertWithoutTableInput_1.ProjectsUpsertWithoutTableInput)
], ProjectsUpdateOneRequiredWithoutTableNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], ProjectsUpdateOneRequiredWithoutTableNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateWithoutTableInput_1.ProjectsUpdateWithoutTableInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateWithoutTableInput_1.ProjectsUpdateWithoutTableInput)
], ProjectsUpdateOneRequiredWithoutTableNestedInput.prototype, "update", void 0);
ProjectsUpdateOneRequiredWithoutTableNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsUpdateOneRequiredWithoutTableNestedInput", {
        isAbstract: true
    })
], ProjectsUpdateOneRequiredWithoutTableNestedInput);
exports.ProjectsUpdateOneRequiredWithoutTableNestedInput = ProjectsUpdateOneRequiredWithoutTableNestedInput;
