"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsCreateOrConnectWithoutTsLineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateWithoutTsLineInput_1 = require("../inputs/ComponentsCreateWithoutTsLineInput");
const ComponentsWhereUniqueInput_1 = require("../inputs/ComponentsWhereUniqueInput");
let ComponentsCreateOrConnectWithoutTsLineInput = class ComponentsCreateOrConnectWithoutTsLineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput)
], ComponentsCreateOrConnectWithoutTsLineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateWithoutTsLineInput_1.ComponentsCreateWithoutTsLineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsCreateWithoutTsLineInput_1.ComponentsCreateWithoutTsLineInput)
], ComponentsCreateOrConnectWithoutTsLineInput.prototype, "create", void 0);
ComponentsCreateOrConnectWithoutTsLineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsCreateOrConnectWithoutTsLineInput", {
        isAbstract: true
    })
], ComponentsCreateOrConnectWithoutTsLineInput);
exports.ComponentsCreateOrConnectWithoutTsLineInput = ComponentsCreateOrConnectWithoutTsLineInput;
