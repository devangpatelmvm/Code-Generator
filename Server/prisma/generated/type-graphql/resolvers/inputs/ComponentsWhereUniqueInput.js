"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ComponentsWhereUniqueInput = class ComponentsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsWhereUniqueInput.prototype, "id", void 0);
ComponentsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsWhereUniqueInput", {
        isAbstract: true
    })
], ComponentsWhereUniqueInput);
exports.ComponentsWhereUniqueInput = ComponentsWhereUniqueInput;
