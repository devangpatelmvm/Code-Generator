"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsCreateOrConnectWithoutCssInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateWithoutCssInput_1 = require("../inputs/ComponentsCreateWithoutCssInput");
const ComponentsWhereUniqueInput_1 = require("../inputs/ComponentsWhereUniqueInput");
let ComponentsCreateOrConnectWithoutCssInput = class ComponentsCreateOrConnectWithoutCssInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput)
], ComponentsCreateOrConnectWithoutCssInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateWithoutCssInput_1.ComponentsCreateWithoutCssInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsCreateWithoutCssInput_1.ComponentsCreateWithoutCssInput)
], ComponentsCreateOrConnectWithoutCssInput.prototype, "create", void 0);
ComponentsCreateOrConnectWithoutCssInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsCreateOrConnectWithoutCssInput", {
        isAbstract: true
    })
], ComponentsCreateOrConnectWithoutCssInput);
exports.ComponentsCreateOrConnectWithoutCssInput = ComponentsCreateOrConnectWithoutCssInput;
