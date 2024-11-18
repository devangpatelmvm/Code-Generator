"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsCreateOrConnectWithoutHtmllineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateWithoutHtmllineInput_1 = require("../inputs/ComponentsCreateWithoutHtmllineInput");
const ComponentsWhereUniqueInput_1 = require("../inputs/ComponentsWhereUniqueInput");
let ComponentsCreateOrConnectWithoutHtmllineInput = class ComponentsCreateOrConnectWithoutHtmllineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput)
], ComponentsCreateOrConnectWithoutHtmllineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateWithoutHtmllineInput_1.ComponentsCreateWithoutHtmllineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsCreateWithoutHtmllineInput_1.ComponentsCreateWithoutHtmllineInput)
], ComponentsCreateOrConnectWithoutHtmllineInput.prototype, "create", void 0);
ComponentsCreateOrConnectWithoutHtmllineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsCreateOrConnectWithoutHtmllineInput", {
        isAbstract: true
    })
], ComponentsCreateOrConnectWithoutHtmllineInput);
exports.ComponentsCreateOrConnectWithoutHtmllineInput = ComponentsCreateOrConnectWithoutHtmllineInput;
