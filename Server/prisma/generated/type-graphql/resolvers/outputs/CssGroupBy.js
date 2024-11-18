"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssAvgAggregate_1 = require("../outputs/CssAvgAggregate");
const CssCountAggregate_1 = require("../outputs/CssCountAggregate");
const CssMaxAggregate_1 = require("../outputs/CssMaxAggregate");
const CssMinAggregate_1 = require("../outputs/CssMinAggregate");
const CssSumAggregate_1 = require("../outputs/CssSumAggregate");
let CssGroupBy = class CssGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CssGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CssGroupBy.prototype, "componentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssCountAggregate_1.CssCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssCountAggregate_1.CssCountAggregate)
], CssGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssAvgAggregate_1.CssAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssAvgAggregate_1.CssAvgAggregate)
], CssGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssSumAggregate_1.CssSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssSumAggregate_1.CssSumAggregate)
], CssGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssMinAggregate_1.CssMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssMinAggregate_1.CssMinAggregate)
], CssGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssMaxAggregate_1.CssMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssMaxAggregate_1.CssMaxAggregate)
], CssGroupBy.prototype, "_max", void 0);
CssGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CssGroupBy", {
        isAbstract: true
    })
], CssGroupBy);
exports.CssGroupBy = CssGroupBy;
