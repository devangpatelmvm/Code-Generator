"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateComponents = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsAvgAggregate_1 = require("../outputs/ComponentsAvgAggregate");
const ComponentsCountAggregate_1 = require("../outputs/ComponentsCountAggregate");
const ComponentsMaxAggregate_1 = require("../outputs/ComponentsMaxAggregate");
const ComponentsMinAggregate_1 = require("../outputs/ComponentsMinAggregate");
const ComponentsSumAggregate_1 = require("../outputs/ComponentsSumAggregate");
let AggregateComponents = class AggregateComponents {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCountAggregate_1.ComponentsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCountAggregate_1.ComponentsCountAggregate)
], AggregateComponents.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsAvgAggregate_1.ComponentsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsAvgAggregate_1.ComponentsAvgAggregate)
], AggregateComponents.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsSumAggregate_1.ComponentsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsSumAggregate_1.ComponentsSumAggregate)
], AggregateComponents.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsMinAggregate_1.ComponentsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsMinAggregate_1.ComponentsMinAggregate)
], AggregateComponents.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsMaxAggregate_1.ComponentsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsMaxAggregate_1.ComponentsMaxAggregate)
], AggregateComponents.prototype, "_max", void 0);
AggregateComponents = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateComponents", {
        isAbstract: true
    })
], AggregateComponents);
exports.AggregateComponents = AggregateComponents;
