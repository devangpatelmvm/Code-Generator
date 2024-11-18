"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesAvgAggregate_1 = require("../outputs/HtmlLinesAvgAggregate");
const HtmlLinesCountAggregate_1 = require("../outputs/HtmlLinesCountAggregate");
const HtmlLinesMaxAggregate_1 = require("../outputs/HtmlLinesMaxAggregate");
const HtmlLinesMinAggregate_1 = require("../outputs/HtmlLinesMinAggregate");
const HtmlLinesSumAggregate_1 = require("../outputs/HtmlLinesSumAggregate");
let HtmlLinesGroupBy = class HtmlLinesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], HtmlLinesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesGroupBy.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], HtmlLinesGroupBy.prototype, "componentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesCountAggregate_1.HtmlLinesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesCountAggregate_1.HtmlLinesCountAggregate)
], HtmlLinesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesAvgAggregate_1.HtmlLinesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesAvgAggregate_1.HtmlLinesAvgAggregate)
], HtmlLinesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesSumAggregate_1.HtmlLinesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesSumAggregate_1.HtmlLinesSumAggregate)
], HtmlLinesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesMinAggregate_1.HtmlLinesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesMinAggregate_1.HtmlLinesMinAggregate)
], HtmlLinesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesMaxAggregate_1.HtmlLinesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesMaxAggregate_1.HtmlLinesMaxAggregate)
], HtmlLinesGroupBy.prototype, "_max", void 0);
HtmlLinesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("HtmlLinesGroupBy", {
        isAbstract: true
    })
], HtmlLinesGroupBy);
exports.HtmlLinesGroupBy = HtmlLinesGroupBy;
