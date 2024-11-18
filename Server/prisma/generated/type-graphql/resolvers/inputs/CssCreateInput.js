"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateNestedOneWithoutCssInput_1 = require("../inputs/ComponentsCreateNestedOneWithoutCssInput");
let CssCreateInput = class CssCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssCreateInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateNestedOneWithoutCssInput_1.ComponentsCreateNestedOneWithoutCssInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsCreateNestedOneWithoutCssInput_1.ComponentsCreateNestedOneWithoutCssInput)
], CssCreateInput.prototype, "component", void 0);
CssCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CssCreateInput", {
        isAbstract: true
    })
], CssCreateInput);
exports.CssCreateInput = CssCreateInput;
