"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateColumns = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsAvgAggregate_1 = require("../outputs/ColumnsAvgAggregate");
const ColumnsCountAggregate_1 = require("../outputs/ColumnsCountAggregate");
const ColumnsMaxAggregate_1 = require("../outputs/ColumnsMaxAggregate");
const ColumnsMinAggregate_1 = require("../outputs/ColumnsMinAggregate");
const ColumnsSumAggregate_1 = require("../outputs/ColumnsSumAggregate");
let AggregateColumns = class AggregateColumns {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsCountAggregate_1.ColumnsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsCountAggregate_1.ColumnsCountAggregate)
], AggregateColumns.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsAvgAggregate_1.ColumnsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsAvgAggregate_1.ColumnsAvgAggregate)
], AggregateColumns.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsSumAggregate_1.ColumnsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsSumAggregate_1.ColumnsSumAggregate)
], AggregateColumns.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsMinAggregate_1.ColumnsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsMinAggregate_1.ColumnsMinAggregate)
], AggregateColumns.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsMaxAggregate_1.ColumnsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsMaxAggregate_1.ColumnsMaxAggregate)
], AggregateColumns.prototype, "_max", void 0);
AggregateColumns = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateColumns", {
        isAbstract: true
    })
], AggregateColumns);
exports.AggregateColumns = AggregateColumns;
