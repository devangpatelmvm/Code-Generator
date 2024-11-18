"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProjectsWhereUniqueInput = class ProjectsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProjectsWhereUniqueInput.prototype, "id", void 0);
ProjectsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsWhereUniqueInput", {
        isAbstract: true
    })
], ProjectsWhereUniqueInput);
exports.ProjectsWhereUniqueInput = ProjectsWhereUniqueInput;
