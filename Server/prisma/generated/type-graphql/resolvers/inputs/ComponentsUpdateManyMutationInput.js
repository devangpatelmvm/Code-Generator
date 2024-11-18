"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ComponentsUpdateManyMutationInput = class ComponentsUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ComponentsUpdateManyMutationInput.prototype, "name", void 0);
ComponentsUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsUpdateManyMutationInput", {
        isAbstract: true
    })
], ComponentsUpdateManyMutationInput);
exports.ComponentsUpdateManyMutationInput = ComponentsUpdateManyMutationInput;
