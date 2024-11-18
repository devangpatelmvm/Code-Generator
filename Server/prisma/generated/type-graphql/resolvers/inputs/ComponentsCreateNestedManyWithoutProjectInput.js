"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsCreateNestedManyWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateOrConnectWithoutProjectInput_1 = require("../inputs/ComponentsCreateOrConnectWithoutProjectInput");
const ComponentsCreateWithoutProjectInput_1 = require("../inputs/ComponentsCreateWithoutProjectInput");
const ComponentsWhereUniqueInput_1 = require("../inputs/ComponentsWhereUniqueInput");
let ComponentsCreateNestedManyWithoutProjectInput = class ComponentsCreateNestedManyWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsCreateWithoutProjectInput_1.ComponentsCreateWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsCreateNestedManyWithoutProjectInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsCreateOrConnectWithoutProjectInput_1.ComponentsCreateOrConnectWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsCreateNestedManyWithoutProjectInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsCreateNestedManyWithoutProjectInput.prototype, "connect", void 0);
ComponentsCreateNestedManyWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsCreateNestedManyWithoutProjectInput", {
        isAbstract: true
    })
], ComponentsCreateNestedManyWithoutProjectInput);
exports.ComponentsCreateNestedManyWithoutProjectInput = ComponentsCreateNestedManyWithoutProjectInput;
