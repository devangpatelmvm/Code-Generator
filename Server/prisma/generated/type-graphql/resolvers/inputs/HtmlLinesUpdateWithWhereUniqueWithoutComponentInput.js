"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesUpdateWithWhereUniqueWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesUpdateWithoutComponentInput_1 = require("../inputs/HtmlLinesUpdateWithoutComponentInput");
const HtmlLinesWhereUniqueInput_1 = require("../inputs/HtmlLinesWhereUniqueInput");
let HtmlLinesUpdateWithWhereUniqueWithoutComponentInput = class HtmlLinesUpdateWithWhereUniqueWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput)
], HtmlLinesUpdateWithWhereUniqueWithoutComponentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesUpdateWithoutComponentInput_1.HtmlLinesUpdateWithoutComponentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HtmlLinesUpdateWithoutComponentInput_1.HtmlLinesUpdateWithoutComponentInput)
], HtmlLinesUpdateWithWhereUniqueWithoutComponentInput.prototype, "data", void 0);
HtmlLinesUpdateWithWhereUniqueWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesUpdateWithWhereUniqueWithoutComponentInput", {
        isAbstract: true
    })
], HtmlLinesUpdateWithWhereUniqueWithoutComponentInput);
exports.HtmlLinesUpdateWithWhereUniqueWithoutComponentInput = HtmlLinesUpdateWithWhereUniqueWithoutComponentInput;
