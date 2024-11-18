"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let TablesUpdateManyMutationInput = class TablesUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TablesUpdateManyMutationInput.prototype, "name", void 0);
TablesUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesUpdateManyMutationInput", {
        isAbstract: true
    })
], TablesUpdateManyMutationInput);
exports.TablesUpdateManyMutationInput = TablesUpdateManyMutationInput;
