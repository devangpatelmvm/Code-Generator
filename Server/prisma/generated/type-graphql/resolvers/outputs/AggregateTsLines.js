"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTsLines = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TsLinesAvgAggregate_1 = require("../outputs/TsLinesAvgAggregate");
const TsLinesCountAggregate_1 = require("../outputs/TsLinesCountAggregate");
const TsLinesMaxAggregate_1 = require("../outputs/TsLinesMaxAggregate");
const TsLinesMinAggregate_1 = require("../outputs/TsLinesMinAggregate");
const TsLinesSumAggregate_1 = require("../outputs/TsLinesSumAggregate");
let AggregateTsLines = class AggregateTsLines {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesCountAggregate_1.TsLinesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesCountAggregate_1.TsLinesCountAggregate)
], AggregateTsLines.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesAvgAggregate_1.TsLinesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesAvgAggregate_1.TsLinesAvgAggregate)
], AggregateTsLines.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesSumAggregate_1.TsLinesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesSumAggregate_1.TsLinesSumAggregate)
], AggregateTsLines.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesMinAggregate_1.TsLinesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesMinAggregate_1.TsLinesMinAggregate)
], AggregateTsLines.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesMaxAggregate_1.TsLinesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesMaxAggregate_1.TsLinesMaxAggregate)
], AggregateTsLines.prototype, "_max", void 0);
AggregateTsLines = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTsLines", {
        isAbstract: true
    })
], AggregateTsLines);
exports.AggregateTsLines = AggregateTsLines;
