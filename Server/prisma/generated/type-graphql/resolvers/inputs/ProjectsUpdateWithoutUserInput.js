"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsUpdateManyWithoutProjectNestedInput_1 = require("../inputs/ComponentsUpdateManyWithoutProjectNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PackagesUpdateManyWithoutProjectNestedInput_1 = require("../inputs/PackagesUpdateManyWithoutProjectNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TablesUpdateManyWithoutProjectNestedInput_1 = require("../inputs/TablesUpdateManyWithoutProjectNestedInput");
let ProjectsUpdateWithoutUserInput = class ProjectsUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProjectsUpdateWithoutUserInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProjectsUpdateWithoutUserInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProjectsUpdateWithoutUserInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProjectsUpdateWithoutUserInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProjectsUpdateWithoutUserInput.prototype, "framework", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesUpdateManyWithoutProjectNestedInput_1.PackagesUpdateManyWithoutProjectNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesUpdateManyWithoutProjectNestedInput_1.PackagesUpdateManyWithoutProjectNestedInput)
], ProjectsUpdateWithoutUserInput.prototype, "Package", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesUpdateManyWithoutProjectNestedInput_1.TablesUpdateManyWithoutProjectNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesUpdateManyWithoutProjectNestedInput_1.TablesUpdateManyWithoutProjectNestedInput)
], ProjectsUpdateWithoutUserInput.prototype, "table", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpdateManyWithoutProjectNestedInput_1.ComponentsUpdateManyWithoutProjectNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsUpdateManyWithoutProjectNestedInput_1.ComponentsUpdateManyWithoutProjectNestedInput)
], ProjectsUpdateWithoutUserInput.prototype, "Components", void 0);
ProjectsUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsUpdateWithoutUserInput", {
        isAbstract: true
    })
], ProjectsUpdateWithoutUserInput);
exports.ProjectsUpdateWithoutUserInput = ProjectsUpdateWithoutUserInput;
