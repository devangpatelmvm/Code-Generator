"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsUpdateWithoutComponentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PackagesUpdateManyWithoutProjectNestedInput_1 = require("../inputs/PackagesUpdateManyWithoutProjectNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TablesUpdateManyWithoutProjectNestedInput_1 = require("../inputs/TablesUpdateManyWithoutProjectNestedInput");
const UsersUpdateOneRequiredWithoutProjectNestedInput_1 = require("../inputs/UsersUpdateOneRequiredWithoutProjectNestedInput");
let ProjectsUpdateWithoutComponentsInput = class ProjectsUpdateWithoutComponentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProjectsUpdateWithoutComponentsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProjectsUpdateWithoutComponentsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProjectsUpdateWithoutComponentsInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProjectsUpdateWithoutComponentsInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProjectsUpdateWithoutComponentsInput.prototype, "framework", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesUpdateManyWithoutProjectNestedInput_1.PackagesUpdateManyWithoutProjectNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesUpdateManyWithoutProjectNestedInput_1.PackagesUpdateManyWithoutProjectNestedInput)
], ProjectsUpdateWithoutComponentsInput.prototype, "Package", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesUpdateManyWithoutProjectNestedInput_1.TablesUpdateManyWithoutProjectNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesUpdateManyWithoutProjectNestedInput_1.TablesUpdateManyWithoutProjectNestedInput)
], ProjectsUpdateWithoutComponentsInput.prototype, "table", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersUpdateOneRequiredWithoutProjectNestedInput_1.UsersUpdateOneRequiredWithoutProjectNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersUpdateOneRequiredWithoutProjectNestedInput_1.UsersUpdateOneRequiredWithoutProjectNestedInput)
], ProjectsUpdateWithoutComponentsInput.prototype, "user", void 0);
ProjectsUpdateWithoutComponentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsUpdateWithoutComponentsInput", {
        isAbstract: true
    })
], ProjectsUpdateWithoutComponentsInput);
exports.ProjectsUpdateWithoutComponentsInput = ProjectsUpdateWithoutComponentsInput;
