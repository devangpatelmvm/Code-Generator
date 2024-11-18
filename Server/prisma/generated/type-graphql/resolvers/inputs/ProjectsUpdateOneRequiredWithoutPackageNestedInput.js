"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsUpdateOneRequiredWithoutPackageNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateOrConnectWithoutPackageInput_1 = require("../inputs/ProjectsCreateOrConnectWithoutPackageInput");
const ProjectsCreateWithoutPackageInput_1 = require("../inputs/ProjectsCreateWithoutPackageInput");
const ProjectsUpdateWithoutPackageInput_1 = require("../inputs/ProjectsUpdateWithoutPackageInput");
const ProjectsUpsertWithoutPackageInput_1 = require("../inputs/ProjectsUpsertWithoutPackageInput");
const ProjectsWhereUniqueInput_1 = require("../inputs/ProjectsWhereUniqueInput");
let ProjectsUpdateOneRequiredWithoutPackageNestedInput = class ProjectsUpdateOneRequiredWithoutPackageNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateWithoutPackageInput_1.ProjectsCreateWithoutPackageInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsCreateWithoutPackageInput_1.ProjectsCreateWithoutPackageInput)
], ProjectsUpdateOneRequiredWithoutPackageNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateOrConnectWithoutPackageInput_1.ProjectsCreateOrConnectWithoutPackageInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsCreateOrConnectWithoutPackageInput_1.ProjectsCreateOrConnectWithoutPackageInput)
], ProjectsUpdateOneRequiredWithoutPackageNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpsertWithoutPackageInput_1.ProjectsUpsertWithoutPackageInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsUpsertWithoutPackageInput_1.ProjectsUpsertWithoutPackageInput)
], ProjectsUpdateOneRequiredWithoutPackageNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], ProjectsUpdateOneRequiredWithoutPackageNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateWithoutPackageInput_1.ProjectsUpdateWithoutPackageInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateWithoutPackageInput_1.ProjectsUpdateWithoutPackageInput)
], ProjectsUpdateOneRequiredWithoutPackageNestedInput.prototype, "update", void 0);
ProjectsUpdateOneRequiredWithoutPackageNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsUpdateOneRequiredWithoutPackageNestedInput", {
        isAbstract: true
    })
], ProjectsUpdateOneRequiredWithoutPackageNestedInput);
exports.ProjectsUpdateOneRequiredWithoutPackageNestedInput = ProjectsUpdateOneRequiredWithoutPackageNestedInput;
