"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesUpsertWithWhereUniqueWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesCreateWithoutComponentInput_1 = require("../inputs/HtmlLinesCreateWithoutComponentInput");
const HtmlLinesUpdateWithoutComponentInput_1 = require("../inputs/HtmlLinesUpdateWithoutComponentInput");
const HtmlLinesWhereUniqueInput_1 = require("../inputs/HtmlLinesWhereUniqueInput");
let HtmlLinesUpsertWithWhereUniqueWithoutComponentInput = class HtmlLinesUpsertWithWhereUniqueWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput)
], HtmlLinesUpsertWithWhereUniqueWithoutComponentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesUpdateWithoutComponentInput_1.HtmlLinesUpdateWithoutComponentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HtmlLinesUpdateWithoutComponentInput_1.HtmlLinesUpdateWithoutComponentInput)
], HtmlLinesUpsertWithWhereUniqueWithoutComponentInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesCreateWithoutComponentInput_1.HtmlLinesCreateWithoutComponentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HtmlLinesCreateWithoutComponentInput_1.HtmlLinesCreateWithoutComponentInput)
], HtmlLinesUpsertWithWhereUniqueWithoutComponentInput.prototype, "create", void 0);
HtmlLinesUpsertWithWhereUniqueWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesUpsertWithWhereUniqueWithoutComponentInput", {
        isAbstract: true
    })
], HtmlLinesUpsertWithWhereUniqueWithoutComponentInput);
exports.HtmlLinesUpsertWithWhereUniqueWithoutComponentInput = HtmlLinesUpsertWithWhereUniqueWithoutComponentInput;
