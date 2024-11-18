"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsUpdateManyWithWhereWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsScalarWhereInput_1 = require("../inputs/ComponentsScalarWhereInput");
const ComponentsUpdateManyMutationInput_1 = require("../inputs/ComponentsUpdateManyMutationInput");
let ComponentsUpdateManyWithWhereWithoutProjectInput = class ComponentsUpdateManyWithWhereWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsScalarWhereInput_1.ComponentsScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsScalarWhereInput_1.ComponentsScalarWhereInput)
], ComponentsUpdateManyWithWhereWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpdateManyMutationInput_1.ComponentsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsUpdateManyMutationInput_1.ComponentsUpdateManyMutationInput)
], ComponentsUpdateManyWithWhereWithoutProjectInput.prototype, "data", void 0);
ComponentsUpdateManyWithWhereWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsUpdateManyWithWhereWithoutProjectInput", {
        isAbstract: true
    })
], ComponentsUpdateManyWithWhereWithoutProjectInput);
exports.ComponentsUpdateManyWithWhereWithoutProjectInput = ComponentsUpdateManyWithWhereWithoutProjectInput;
