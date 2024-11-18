"use strict";
var HtmlLinesScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let HtmlLinesScalarWhereInput = HtmlLinesScalarWhereInput_1 = class HtmlLinesScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], HtmlLinesScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], HtmlLinesScalarWhereInput.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], HtmlLinesScalarWhereInput.prototype, "componentId", void 0);
HtmlLinesScalarWhereInput = HtmlLinesScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesScalarWhereInput", {
        isAbstract: true
    })
], HtmlLinesScalarWhereInput);
exports.HtmlLinesScalarWhereInput = HtmlLinesScalarWhereInput;
