"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesUpdateWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let PackagesUpdateWithoutProjectInput = class PackagesUpdateWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PackagesUpdateWithoutProjectInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PackagesUpdateWithoutProjectInput.prototype, "version", void 0);
PackagesUpdateWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesUpdateWithoutProjectInput", {
        isAbstract: true
    })
], PackagesUpdateWithoutProjectInput);
exports.PackagesUpdateWithoutProjectInput = PackagesUpdateWithoutProjectInput;
