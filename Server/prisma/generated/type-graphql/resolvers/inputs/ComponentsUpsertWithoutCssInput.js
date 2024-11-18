"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsUpsertWithoutCssInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateWithoutCssInput_1 = require("../inputs/ComponentsCreateWithoutCssInput");
const ComponentsUpdateWithoutCssInput_1 = require("../inputs/ComponentsUpdateWithoutCssInput");
let ComponentsUpsertWithoutCssInput = class ComponentsUpsertWithoutCssInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpdateWithoutCssInput_1.ComponentsUpdateWithoutCssInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsUpdateWithoutCssInput_1.ComponentsUpdateWithoutCssInput)
], ComponentsUpsertWithoutCssInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateWithoutCssInput_1.ComponentsCreateWithoutCssInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsCreateWithoutCssInput_1.ComponentsCreateWithoutCssInput)
], ComponentsUpsertWithoutCssInput.prototype, "create", void 0);
ComponentsUpsertWithoutCssInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsUpsertWithoutCssInput", {
        isAbstract: true
    })
], ComponentsUpsertWithoutCssInput);
exports.ComponentsUpsertWithoutCssInput = ComponentsUpsertWithoutCssInput;
