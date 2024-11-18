"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsAvgAggregate_1 = require("../outputs/ColumnsAvgAggregate");
const ColumnsCountAggregate_1 = require("../outputs/ColumnsCountAggregate");
const ColumnsMaxAggregate_1 = require("../outputs/ColumnsMaxAggregate");
const ColumnsMinAggregate_1 = require("../outputs/ColumnsMinAggregate");
const ColumnsSumAggregate_1 = require("../outputs/ColumnsSumAggregate");
let ColumnsGroupBy = class ColumnsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ColumnsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsGroupBy.prototype, "constraint", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ColumnsGroupBy.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsCountAggregate_1.ColumnsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsCountAggregate_1.ColumnsCountAggregate)
], ColumnsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsAvgAggregate_1.ColumnsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsAvgAggregate_1.ColumnsAvgAggregate)
], ColumnsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsSumAggregate_1.ColumnsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsSumAggregate_1.ColumnsSumAggregate)
], ColumnsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsMinAggregate_1.ColumnsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsMinAggregate_1.ColumnsMinAggregate)
], ColumnsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsMaxAggregate_1.ColumnsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsMaxAggregate_1.ColumnsMaxAggregate)
], ColumnsGroupBy.prototype, "_max", void 0);
ColumnsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ColumnsGroupBy", {
        isAbstract: true
    })
], ColumnsGroupBy);
exports.ColumnsGroupBy = ColumnsGroupBy;
