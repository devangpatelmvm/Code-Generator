"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesCreateWithoutColumnInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateNestedOneWithoutTableInput_1 = require("../inputs/ProjectsCreateNestedOneWithoutTableInput");
let TablesCreateWithoutColumnInput = class TablesCreateWithoutColumnInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesCreateWithoutColumnInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateNestedOneWithoutTableInput_1.ProjectsCreateNestedOneWithoutTableInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsCreateNestedOneWithoutTableInput_1.ProjectsCreateNestedOneWithoutTableInput)
], TablesCreateWithoutColumnInput.prototype, "project", void 0);
TablesCreateWithoutColumnInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesCreateWithoutColumnInput", {
        isAbstract: true
    })
], TablesCreateWithoutColumnInput);
exports.TablesCreateWithoutColumnInput = TablesCreateWithoutColumnInput;
