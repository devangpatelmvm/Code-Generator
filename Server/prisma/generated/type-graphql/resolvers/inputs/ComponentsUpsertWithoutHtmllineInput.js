"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsUpsertWithoutHtmllineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateWithoutHtmllineInput_1 = require("../inputs/ComponentsCreateWithoutHtmllineInput");
const ComponentsUpdateWithoutHtmllineInput_1 = require("../inputs/ComponentsUpdateWithoutHtmllineInput");
let ComponentsUpsertWithoutHtmllineInput = class ComponentsUpsertWithoutHtmllineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpdateWithoutHtmllineInput_1.ComponentsUpdateWithoutHtmllineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsUpdateWithoutHtmllineInput_1.ComponentsUpdateWithoutHtmllineInput)
], ComponentsUpsertWithoutHtmllineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateWithoutHtmllineInput_1.ComponentsCreateWithoutHtmllineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsCreateWithoutHtmllineInput_1.ComponentsCreateWithoutHtmllineInput)
], ComponentsUpsertWithoutHtmllineInput.prototype, "create", void 0);
ComponentsUpsertWithoutHtmllineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsUpsertWithoutHtmllineInput", {
        isAbstract: true
    })
], ComponentsUpsertWithoutHtmllineInput);
exports.ComponentsUpsertWithoutHtmllineInput = ComponentsUpsertWithoutHtmllineInput;
