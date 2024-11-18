"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsCreateNestedOneWithoutHtmllineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateOrConnectWithoutHtmllineInput_1 = require("../inputs/ComponentsCreateOrConnectWithoutHtmllineInput");
const ComponentsCreateWithoutHtmllineInput_1 = require("../inputs/ComponentsCreateWithoutHtmllineInput");
const ComponentsWhereUniqueInput_1 = require("../inputs/ComponentsWhereUniqueInput");
let ComponentsCreateNestedOneWithoutHtmllineInput = class ComponentsCreateNestedOneWithoutHtmllineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateWithoutHtmllineInput_1.ComponentsCreateWithoutHtmllineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCreateWithoutHtmllineInput_1.ComponentsCreateWithoutHtmllineInput)
], ComponentsCreateNestedOneWithoutHtmllineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateOrConnectWithoutHtmllineInput_1.ComponentsCreateOrConnectWithoutHtmllineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCreateOrConnectWithoutHtmllineInput_1.ComponentsCreateOrConnectWithoutHtmllineInput)
], ComponentsCreateNestedOneWithoutHtmllineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput)
], ComponentsCreateNestedOneWithoutHtmllineInput.prototype, "connect", void 0);
ComponentsCreateNestedOneWithoutHtmllineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsCreateNestedOneWithoutHtmllineInput", {
        isAbstract: true
    })
], ComponentsCreateNestedOneWithoutHtmllineInput);
exports.ComponentsCreateNestedOneWithoutHtmllineInput = ComponentsCreateNestedOneWithoutHtmllineInput;
