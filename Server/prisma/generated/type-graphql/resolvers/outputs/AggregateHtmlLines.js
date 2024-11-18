"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateHtmlLines = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesAvgAggregate_1 = require("../outputs/HtmlLinesAvgAggregate");
const HtmlLinesCountAggregate_1 = require("../outputs/HtmlLinesCountAggregate");
const HtmlLinesMaxAggregate_1 = require("../outputs/HtmlLinesMaxAggregate");
const HtmlLinesMinAggregate_1 = require("../outputs/HtmlLinesMinAggregate");
const HtmlLinesSumAggregate_1 = require("../outputs/HtmlLinesSumAggregate");
let AggregateHtmlLines = class AggregateHtmlLines {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesCountAggregate_1.HtmlLinesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesCountAggregate_1.HtmlLinesCountAggregate)
], AggregateHtmlLines.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesAvgAggregate_1.HtmlLinesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesAvgAggregate_1.HtmlLinesAvgAggregate)
], AggregateHtmlLines.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesSumAggregate_1.HtmlLinesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesSumAggregate_1.HtmlLinesSumAggregate)
], AggregateHtmlLines.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesMinAggregate_1.HtmlLinesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesMinAggregate_1.HtmlLinesMinAggregate)
], AggregateHtmlLines.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesMaxAggregate_1.HtmlLinesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesMaxAggregate_1.HtmlLinesMaxAggregate)
], AggregateHtmlLines.prototype, "_max", void 0);
AggregateHtmlLines = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateHtmlLines", {
        isAbstract: true
    })
], AggregateHtmlLines);
exports.AggregateHtmlLines = AggregateHtmlLines;
