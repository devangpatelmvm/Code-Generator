"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesUpdateWithoutColumnInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProjectsUpdateOneRequiredWithoutTableNestedInput_1 = require("../inputs/ProjectsUpdateOneRequiredWithoutTableNestedInput");
let TablesUpdateWithoutColumnInput = class TablesUpdateWithoutColumnInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TablesUpdateWithoutColumnInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateOneRequiredWithoutTableNestedInput_1.ProjectsUpdateOneRequiredWithoutTableNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateOneRequiredWithoutTableNestedInput_1.ProjectsUpdateOneRequiredWithoutTableNestedInput)
], TablesUpdateWithoutColumnInput.prototype, "project", void 0);
TablesUpdateWithoutColumnInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesUpdateWithoutColumnInput", {
        isAbstract: true
    })
], TablesUpdateWithoutColumnInput);
exports.TablesUpdateWithoutColumnInput = TablesUpdateWithoutColumnInput;
