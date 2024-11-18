"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsCreateNestedManyWithoutTableInput_1 = require("../inputs/ColumnsCreateNestedManyWithoutTableInput");
const ProjectsCreateNestedOneWithoutTableInput_1 = require("../inputs/ProjectsCreateNestedOneWithoutTableInput");
let TablesCreateInput = class TablesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateNestedOneWithoutTableInput_1.ProjectsCreateNestedOneWithoutTableInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsCreateNestedOneWithoutTableInput_1.ProjectsCreateNestedOneWithoutTableInput)
], TablesCreateInput.prototype, "project", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsCreateNestedManyWithoutTableInput_1.ColumnsCreateNestedManyWithoutTableInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsCreateNestedManyWithoutTableInput_1.ColumnsCreateNestedManyWithoutTableInput)
], TablesCreateInput.prototype, "column", void 0);
TablesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesCreateInput", {
        isAbstract: true
    })
], TablesCreateInput);
exports.TablesCreateInput = TablesCreateInput;
