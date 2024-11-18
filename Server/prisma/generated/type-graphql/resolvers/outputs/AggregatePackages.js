"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePackages = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesAvgAggregate_1 = require("../outputs/PackagesAvgAggregate");
const PackagesCountAggregate_1 = require("../outputs/PackagesCountAggregate");
const PackagesMaxAggregate_1 = require("../outputs/PackagesMaxAggregate");
const PackagesMinAggregate_1 = require("../outputs/PackagesMinAggregate");
const PackagesSumAggregate_1 = require("../outputs/PackagesSumAggregate");
let AggregatePackages = class AggregatePackages {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesCountAggregate_1.PackagesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesCountAggregate_1.PackagesCountAggregate)
], AggregatePackages.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesAvgAggregate_1.PackagesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesAvgAggregate_1.PackagesAvgAggregate)
], AggregatePackages.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesSumAggregate_1.PackagesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesSumAggregate_1.PackagesSumAggregate)
], AggregatePackages.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesMinAggregate_1.PackagesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesMinAggregate_1.PackagesMinAggregate)
], AggregatePackages.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesMaxAggregate_1.PackagesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesMaxAggregate_1.PackagesMaxAggregate)
], AggregatePackages.prototype, "_max", void 0);
AggregatePackages = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregatePackages", {
        isAbstract: true
    })
], AggregatePackages);
exports.AggregatePackages = AggregatePackages;
