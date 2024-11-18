"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsUpsertWithWhereUniqueWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateWithoutProjectInput_1 = require("../inputs/ComponentsCreateWithoutProjectInput");
const ComponentsUpdateWithoutProjectInput_1 = require("../inputs/ComponentsUpdateWithoutProjectInput");
const ComponentsWhereUniqueInput_1 = require("../inputs/ComponentsWhereUniqueInput");
let ComponentsUpsertWithWhereUniqueWithoutProjectInput = class ComponentsUpsertWithWhereUniqueWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput)
], ComponentsUpsertWithWhereUniqueWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpdateWithoutProjectInput_1.ComponentsUpdateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsUpdateWithoutProjectInput_1.ComponentsUpdateWithoutProjectInput)
], ComponentsUpsertWithWhereUniqueWithoutProjectInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateWithoutProjectInput_1.ComponentsCreateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsCreateWithoutProjectInput_1.ComponentsCreateWithoutProjectInput)
], ComponentsUpsertWithWhereUniqueWithoutProjectInput.prototype, "create", void 0);
ComponentsUpsertWithWhereUniqueWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsUpsertWithWhereUniqueWithoutProjectInput", {
        isAbstract: true
    })
], ComponentsUpsertWithWhereUniqueWithoutProjectInput);
exports.ComponentsUpsertWithWhereUniqueWithoutProjectInput = ComponentsUpsertWithWhereUniqueWithoutProjectInput;
