"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProjectsUpdateOneRequiredWithoutPackageNestedInput_1 = require("../inputs/ProjectsUpdateOneRequiredWithoutPackageNestedInput");
let PackagesUpdateInput = class PackagesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PackagesUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PackagesUpdateInput.prototype, "version", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateOneRequiredWithoutPackageNestedInput_1.ProjectsUpdateOneRequiredWithoutPackageNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateOneRequiredWithoutPackageNestedInput_1.ProjectsUpdateOneRequiredWithoutPackageNestedInput)
], PackagesUpdateInput.prototype, "project", void 0);
PackagesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesUpdateInput", {
        isAbstract: true
    })
], PackagesUpdateInput);
exports.PackagesUpdateInput = PackagesUpdateInput;
