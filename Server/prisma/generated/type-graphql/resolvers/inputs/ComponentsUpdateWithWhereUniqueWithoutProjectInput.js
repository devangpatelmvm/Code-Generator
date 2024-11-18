"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsUpdateWithWhereUniqueWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsUpdateWithoutProjectInput_1 = require("../inputs/ComponentsUpdateWithoutProjectInput");
const ComponentsWhereUniqueInput_1 = require("../inputs/ComponentsWhereUniqueInput");
let ComponentsUpdateWithWhereUniqueWithoutProjectInput = class ComponentsUpdateWithWhereUniqueWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput)
], ComponentsUpdateWithWhereUniqueWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpdateWithoutProjectInput_1.ComponentsUpdateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsUpdateWithoutProjectInput_1.ComponentsUpdateWithoutProjectInput)
], ComponentsUpdateWithWhereUniqueWithoutProjectInput.prototype, "data", void 0);
ComponentsUpdateWithWhereUniqueWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsUpdateWithWhereUniqueWithoutProjectInput", {
        isAbstract: true
    })
], ComponentsUpdateWithWhereUniqueWithoutProjectInput);
exports.ComponentsUpdateWithWhereUniqueWithoutProjectInput = ComponentsUpdateWithWhereUniqueWithoutProjectInput;
