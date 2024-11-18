"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CssWhereUniqueInput = class CssWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CssWhereUniqueInput.prototype, "id", void 0);
CssWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CssWhereUniqueInput", {
        isAbstract: true
    })
], CssWhereUniqueInput);
exports.CssWhereUniqueInput = CssWhereUniqueInput;
