"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsUpsertWithoutTsLineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateWithoutTsLineInput_1 = require("../inputs/ComponentsCreateWithoutTsLineInput");
const ComponentsUpdateWithoutTsLineInput_1 = require("../inputs/ComponentsUpdateWithoutTsLineInput");
let ComponentsUpsertWithoutTsLineInput = class ComponentsUpsertWithoutTsLineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpdateWithoutTsLineInput_1.ComponentsUpdateWithoutTsLineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsUpdateWithoutTsLineInput_1.ComponentsUpdateWithoutTsLineInput)
], ComponentsUpsertWithoutTsLineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateWithoutTsLineInput_1.ComponentsCreateWithoutTsLineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsCreateWithoutTsLineInput_1.ComponentsCreateWithoutTsLineInput)
], ComponentsUpsertWithoutTsLineInput.prototype, "create", void 0);
ComponentsUpsertWithoutTsLineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsUpsertWithoutTsLineInput", {
        isAbstract: true
    })
], ComponentsUpsertWithoutTsLineInput);
exports.ComponentsUpsertWithoutTsLineInput = ComponentsUpsertWithoutTsLineInput;
