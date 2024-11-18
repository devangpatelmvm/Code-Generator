"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateNestedOneWithoutPackageInput_1 = require("../inputs/ProjectsCreateNestedOneWithoutPackageInput");
let PackagesCreateInput = class PackagesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesCreateInput.prototype, "version", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateNestedOneWithoutPackageInput_1.ProjectsCreateNestedOneWithoutPackageInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsCreateNestedOneWithoutPackageInput_1.ProjectsCreateNestedOneWithoutPackageInput)
], PackagesCreateInput.prototype, "project", void 0);
PackagesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesCreateInput", {
        isAbstract: true
    })
], PackagesCreateInput);
exports.PackagesCreateInput = PackagesCreateInput;
