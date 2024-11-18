"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let PackagesUpdateManyMutationInput = class PackagesUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PackagesUpdateManyMutationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PackagesUpdateManyMutationInput.prototype, "version", void 0);
PackagesUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesUpdateManyMutationInput", {
        isAbstract: true
    })
], PackagesUpdateManyMutationInput);
exports.PackagesUpdateManyMutationInput = PackagesUpdateManyMutationInput;
