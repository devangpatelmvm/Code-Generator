"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsCreateOrConnectWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateWithoutProjectInput_1 = require("../inputs/ComponentsCreateWithoutProjectInput");
const ComponentsWhereUniqueInput_1 = require("../inputs/ComponentsWhereUniqueInput");
let ComponentsCreateOrConnectWithoutProjectInput = class ComponentsCreateOrConnectWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput)
], ComponentsCreateOrConnectWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateWithoutProjectInput_1.ComponentsCreateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsCreateWithoutProjectInput_1.ComponentsCreateWithoutProjectInput)
], ComponentsCreateOrConnectWithoutProjectInput.prototype, "create", void 0);
ComponentsCreateOrConnectWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsCreateOrConnectWithoutProjectInput", {
        isAbstract: true
    })
], ComponentsCreateOrConnectWithoutProjectInput);
exports.ComponentsCreateOrConnectWithoutProjectInput = ComponentsCreateOrConnectWithoutProjectInput;
