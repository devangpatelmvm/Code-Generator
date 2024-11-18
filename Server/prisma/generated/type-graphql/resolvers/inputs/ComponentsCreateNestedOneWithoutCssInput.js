"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsCreateNestedOneWithoutCssInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateOrConnectWithoutCssInput_1 = require("../inputs/ComponentsCreateOrConnectWithoutCssInput");
const ComponentsCreateWithoutCssInput_1 = require("../inputs/ComponentsCreateWithoutCssInput");
const ComponentsWhereUniqueInput_1 = require("../inputs/ComponentsWhereUniqueInput");
let ComponentsCreateNestedOneWithoutCssInput = class ComponentsCreateNestedOneWithoutCssInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateWithoutCssInput_1.ComponentsCreateWithoutCssInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCreateWithoutCssInput_1.ComponentsCreateWithoutCssInput)
], ComponentsCreateNestedOneWithoutCssInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateOrConnectWithoutCssInput_1.ComponentsCreateOrConnectWithoutCssInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCreateOrConnectWithoutCssInput_1.ComponentsCreateOrConnectWithoutCssInput)
], ComponentsCreateNestedOneWithoutCssInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput)
], ComponentsCreateNestedOneWithoutCssInput.prototype, "connect", void 0);
ComponentsCreateNestedOneWithoutCssInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsCreateNestedOneWithoutCssInput", {
        isAbstract: true
    })
], ComponentsCreateNestedOneWithoutCssInput);
exports.ComponentsCreateNestedOneWithoutCssInput = ComponentsCreateNestedOneWithoutCssInput;
