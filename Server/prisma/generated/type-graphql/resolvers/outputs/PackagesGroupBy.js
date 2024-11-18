"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesAvgAggregate_1 = require("../outputs/PackagesAvgAggregate");
const PackagesCountAggregate_1 = require("../outputs/PackagesCountAggregate");
const PackagesMaxAggregate_1 = require("../outputs/PackagesMaxAggregate");
const PackagesMinAggregate_1 = require("../outputs/PackagesMinAggregate");
const PackagesSumAggregate_1 = require("../outputs/PackagesSumAggregate");
let PackagesGroupBy = class PackagesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PackagesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesGroupBy.prototype, "version", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PackagesGroupBy.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesCountAggregate_1.PackagesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesCountAggregate_1.PackagesCountAggregate)
], PackagesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesAvgAggregate_1.PackagesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesAvgAggregate_1.PackagesAvgAggregate)
], PackagesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesSumAggregate_1.PackagesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesSumAggregate_1.PackagesSumAggregate)
], PackagesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesMinAggregate_1.PackagesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesMinAggregate_1.PackagesMinAggregate)
], PackagesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesMaxAggregate_1.PackagesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesMaxAggregate_1.PackagesMaxAggregate)
], PackagesGroupBy.prototype, "_max", void 0);
PackagesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PackagesGroupBy", {
        isAbstract: true
    })
], PackagesGroupBy);
exports.PackagesGroupBy = PackagesGroupBy;
