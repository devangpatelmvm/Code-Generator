"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsCreateNestedOneWithoutTsLineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateOrConnectWithoutTsLineInput_1 = require("../inputs/ComponentsCreateOrConnectWithoutTsLineInput");
const ComponentsCreateWithoutTsLineInput_1 = require("../inputs/ComponentsCreateWithoutTsLineInput");
const ComponentsWhereUniqueInput_1 = require("../inputs/ComponentsWhereUniqueInput");
let ComponentsCreateNestedOneWithoutTsLineInput = class ComponentsCreateNestedOneWithoutTsLineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateWithoutTsLineInput_1.ComponentsCreateWithoutTsLineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCreateWithoutTsLineInput_1.ComponentsCreateWithoutTsLineInput)
], ComponentsCreateNestedOneWithoutTsLineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateOrConnectWithoutTsLineInput_1.ComponentsCreateOrConnectWithoutTsLineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCreateOrConnectWithoutTsLineInput_1.ComponentsCreateOrConnectWithoutTsLineInput)
], ComponentsCreateNestedOneWithoutTsLineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput)
], ComponentsCreateNestedOneWithoutTsLineInput.prototype, "connect", void 0);
ComponentsCreateNestedOneWithoutTsLineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsCreateNestedOneWithoutTsLineInput", {
        isAbstract: true
    })
], ComponentsCreateNestedOneWithoutTsLineInput);
exports.ComponentsCreateNestedOneWithoutTsLineInput = ComponentsCreateNestedOneWithoutTsLineInput;
