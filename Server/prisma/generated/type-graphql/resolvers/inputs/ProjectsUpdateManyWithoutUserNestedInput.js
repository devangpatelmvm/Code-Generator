"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateOrConnectWithoutUserInput_1 = require("../inputs/ProjectsCreateOrConnectWithoutUserInput");
const ProjectsCreateWithoutUserInput_1 = require("../inputs/ProjectsCreateWithoutUserInput");
const ProjectsScalarWhereInput_1 = require("../inputs/ProjectsScalarWhereInput");
const ProjectsUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/ProjectsUpdateManyWithWhereWithoutUserInput");
const ProjectsUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/ProjectsUpdateWithWhereUniqueWithoutUserInput");
const ProjectsUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/ProjectsUpsertWithWhereUniqueWithoutUserInput");
const ProjectsWhereUniqueInput_1 = require("../inputs/ProjectsWhereUniqueInput");
let ProjectsUpdateManyWithoutUserNestedInput = class ProjectsUpdateManyWithoutUserNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsCreateWithoutUserInput_1.ProjectsCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectsUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsCreateOrConnectWithoutUserInput_1.ProjectsCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectsUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsUpsertWithWhereUniqueWithoutUserInput_1.ProjectsUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectsUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectsUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectsUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectsUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectsUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsUpdateWithWhereUniqueWithoutUserInput_1.ProjectsUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectsUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsUpdateManyWithWhereWithoutUserInput_1.ProjectsUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectsUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsScalarWhereInput_1.ProjectsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectsUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
ProjectsUpdateManyWithoutUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsUpdateManyWithoutUserNestedInput", {
        isAbstract: true
    })
], ProjectsUpdateManyWithoutUserNestedInput);
exports.ProjectsUpdateManyWithoutUserNestedInput = ProjectsUpdateManyWithoutUserNestedInput;
