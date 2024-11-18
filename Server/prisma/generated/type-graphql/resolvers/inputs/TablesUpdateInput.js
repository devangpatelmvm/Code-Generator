"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsUpdateManyWithoutTableNestedInput_1 = require("../inputs/ColumnsUpdateManyWithoutTableNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProjectsUpdateOneRequiredWithoutTableNestedInput_1 = require("../inputs/ProjectsUpdateOneRequiredWithoutTableNestedInput");
let TablesUpdateInput = class TablesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TablesUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateOneRequiredWithoutTableNestedInput_1.ProjectsUpdateOneRequiredWithoutTableNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateOneRequiredWithoutTableNestedInput_1.ProjectsUpdateOneRequiredWithoutTableNestedInput)
], TablesUpdateInput.prototype, "project", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsUpdateManyWithoutTableNestedInput_1.ColumnsUpdateManyWithoutTableNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsUpdateManyWithoutTableNestedInput_1.ColumnsUpdateManyWithoutTableNestedInput)
], TablesUpdateInput.prototype, "column", void 0);
TablesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesUpdateInput", {
        isAbstract: true
    })
], TablesUpdateInput);
exports.TablesUpdateInput = TablesUpdateInput;
