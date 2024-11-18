"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateHtmlLinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesOrderByWithRelationInput_1 = require("../../../inputs/HtmlLinesOrderByWithRelationInput");
const HtmlLinesWhereInput_1 = require("../../../inputs/HtmlLinesWhereInput");
const HtmlLinesWhereUniqueInput_1 = require("../../../inputs/HtmlLinesWhereUniqueInput");
let AggregateHtmlLinesArgs = class AggregateHtmlLinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesWhereInput_1.HtmlLinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesWhereInput_1.HtmlLinesWhereInput)
], AggregateHtmlLinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesOrderByWithRelationInput_1.HtmlLinesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateHtmlLinesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput)
], AggregateHtmlLinesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateHtmlLinesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateHtmlLinesArgs.prototype, "skip", void 0);
AggregateHtmlLinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateHtmlLinesArgs);
exports.AggregateHtmlLinesArgs = AggregateHtmlLinesArgs;
