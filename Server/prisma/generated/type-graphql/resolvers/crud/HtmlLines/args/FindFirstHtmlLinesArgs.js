"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstHtmlLinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesOrderByWithRelationInput_1 = require("../../../inputs/HtmlLinesOrderByWithRelationInput");
const HtmlLinesWhereInput_1 = require("../../../inputs/HtmlLinesWhereInput");
const HtmlLinesWhereUniqueInput_1 = require("../../../inputs/HtmlLinesWhereUniqueInput");
const HtmlLinesScalarFieldEnum_1 = require("../../../../enums/HtmlLinesScalarFieldEnum");
let FindFirstHtmlLinesArgs = class FindFirstHtmlLinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesWhereInput_1.HtmlLinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesWhereInput_1.HtmlLinesWhereInput)
], FindFirstHtmlLinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesOrderByWithRelationInput_1.HtmlLinesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstHtmlLinesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput)
], FindFirstHtmlLinesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstHtmlLinesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstHtmlLinesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesScalarFieldEnum_1.HtmlLinesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstHtmlLinesArgs.prototype, "distinct", void 0);
FindFirstHtmlLinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstHtmlLinesArgs);
exports.FindFirstHtmlLinesArgs = FindFirstHtmlLinesArgs;
