"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsUpdateWithoutPackageInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsUpdateManyWithoutProjectNestedInput_1 = require("../inputs/ComponentsUpdateManyWithoutProjectNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TablesUpdateManyWithoutProjectNestedInput_1 = require("../inputs/TablesUpdateManyWithoutProjectNestedInput");
const UsersUpdateOneRequiredWithoutProjectNestedInput_1 = require("../inputs/UsersUpdateOneRequiredWithoutProjectNestedInput");
let ProjectsUpdateWithoutPackageInput = class ProjectsUpdateWithoutPackageInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProjectsUpdateWithoutPackageInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProjectsUpdateWithoutPackageInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProjectsUpdateWithoutPackageInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProjectsUpdateWithoutPackageInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProjectsUpdateWithoutPackageInput.prototype, "framework", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesUpdateManyWithoutProjectNestedInput_1.TablesUpdateManyWithoutProjectNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesUpdateManyWithoutProjectNestedInput_1.TablesUpdateManyWithoutProjectNestedInput)
], ProjectsUpdateWithoutPackageInput.prototype, "table", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersUpdateOneRequiredWithoutProjectNestedInput_1.UsersUpdateOneRequiredWithoutProjectNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersUpdateOneRequiredWithoutProjectNestedInput_1.UsersUpdateOneRequiredWithoutProjectNestedInput)
], ProjectsUpdateWithoutPackageInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpdateManyWithoutProjectNestedInput_1.ComponentsUpdateManyWithoutProjectNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsUpdateManyWithoutProjectNestedInput_1.ComponentsUpdateManyWithoutProjectNestedInput)
], ProjectsUpdateWithoutPackageInput.prototype, "Components", void 0);
ProjectsUpdateWithoutPackageInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsUpdateWithoutPackageInput", {
        isAbstract: true
    })
], ProjectsUpdateWithoutPackageInput);
exports.ProjectsUpdateWithoutPackageInput = ProjectsUpdateWithoutPackageInput;
