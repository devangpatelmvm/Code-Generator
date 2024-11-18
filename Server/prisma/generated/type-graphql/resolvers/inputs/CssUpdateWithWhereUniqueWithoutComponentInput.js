"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssUpdateWithWhereUniqueWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssUpdateWithoutComponentInput_1 = require("../inputs/CssUpdateWithoutComponentInput");
const CssWhereUniqueInput_1 = require("../inputs/CssWhereUniqueInput");
let CssUpdateWithWhereUniqueWithoutComponentInput = class CssUpdateWithWhereUniqueWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssWhereUniqueInput_1.CssWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CssWhereUniqueInput_1.CssWhereUniqueInput)
], CssUpdateWithWhereUniqueWithoutComponentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssUpdateWithoutComponentInput_1.CssUpdateWithoutComponentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CssUpdateWithoutComponentInput_1.CssUpdateWithoutComponentInput)
], CssUpdateWithWhereUniqueWithoutComponentInput.prototype, "data", void 0);
CssUpdateWithWhereUniqueWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CssUpdateWithWhereUniqueWithoutComponentInput", {
        isAbstract: true
    })
], CssUpdateWithWhereUniqueWithoutComponentInput);
exports.CssUpdateWithWhereUniqueWithoutComponentInput = CssUpdateWithWhereUniqueWithoutComponentInput;
