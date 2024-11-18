"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TsLinesAvgAggregate_1 = require("../outputs/TsLinesAvgAggregate");
const TsLinesCountAggregate_1 = require("../outputs/TsLinesCountAggregate");
const TsLinesMaxAggregate_1 = require("../outputs/TsLinesMaxAggregate");
const TsLinesMinAggregate_1 = require("../outputs/TsLinesMinAggregate");
const TsLinesSumAggregate_1 = require("../outputs/TsLinesSumAggregate");
let TsLinesGroupBy = class TsLinesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TsLinesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesGroupBy.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TsLinesGroupBy.prototype, "componentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesCountAggregate_1.TsLinesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesCountAggregate_1.TsLinesCountAggregate)
], TsLinesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesAvgAggregate_1.TsLinesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesAvgAggregate_1.TsLinesAvgAggregate)
], TsLinesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesSumAggregate_1.TsLinesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesSumAggregate_1.TsLinesSumAggregate)
], TsLinesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesMinAggregate_1.TsLinesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesMinAggregate_1.TsLinesMinAggregate)
], TsLinesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesMaxAggregate_1.TsLinesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesMaxAggregate_1.TsLinesMaxAggregate)
], TsLinesGroupBy.prototype, "_max", void 0);
TsLinesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TsLinesGroupBy", {
        isAbstract: true
    })
], TsLinesGroupBy);
exports.TsLinesGroupBy = TsLinesGroupBy;
