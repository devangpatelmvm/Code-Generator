"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsUpdateManyWithoutProjectNestedInput_1 = require("../inputs/ComponentsUpdateManyWithoutProjectNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PackagesUpdateManyWithoutProjectNestedInput_1 = require("../inputs/PackagesUpdateManyWithoutProjectNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TablesUpdateManyWithoutProjectNestedInput_1 = require("../inputs/TablesUpdateManyWithoutProjectNestedInput");
const UsersUpdateOneRequiredWithoutProjectNestedInput_1 = require("../inputs/UsersUpdateOneRequiredWithoutProjectNestedInput");
let ProjectsUpdateInput = class ProjectsUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProjectsUpdateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProjectsUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProjectsUpdateInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProjectsUpdateInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProjectsUpdateInput.prototype, "framework", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesUpdateManyWithoutProjectNestedInput_1.PackagesUpdateManyWithoutProjectNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesUpdateManyWithoutProjectNestedInput_1.PackagesUpdateManyWithoutProjectNestedInput)
], ProjectsUpdateInput.prototype, "Package", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesUpdateManyWithoutProjectNestedInput_1.TablesUpdateManyWithoutProjectNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesUpdateManyWithoutProjectNestedInput_1.TablesUpdateManyWithoutProjectNestedInput)
], ProjectsUpdateInput.prototype, "table", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersUpdateOneRequiredWithoutProjectNestedInput_1.UsersUpdateOneRequiredWithoutProjectNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersUpdateOneRequiredWithoutProjectNestedInput_1.UsersUpdateOneRequiredWithoutProjectNestedInput)
], ProjectsUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpdateManyWithoutProjectNestedInput_1.ComponentsUpdateManyWithoutProjectNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsUpdateManyWithoutProjectNestedInput_1.ComponentsUpdateManyWithoutProjectNestedInput)
], ProjectsUpdateInput.prototype, "Components", void 0);
ProjectsUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsUpdateInput", {
        isAbstract: true
    })
], ProjectsUpdateInput);
exports.ProjectsUpdateInput = ProjectsUpdateInput;
