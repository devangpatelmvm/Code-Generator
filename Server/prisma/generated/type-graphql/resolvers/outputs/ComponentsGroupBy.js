"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsAvgAggregate_1 = require("../outputs/ComponentsAvgAggregate");
const ComponentsCountAggregate_1 = require("../outputs/ComponentsCountAggregate");
const ComponentsMaxAggregate_1 = require("../outputs/ComponentsMaxAggregate");
const ComponentsMinAggregate_1 = require("../outputs/ComponentsMinAggregate");
const ComponentsSumAggregate_1 = require("../outputs/ComponentsSumAggregate");
let ComponentsGroupBy = class ComponentsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsGroupBy.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCountAggregate_1.ComponentsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCountAggregate_1.ComponentsCountAggregate)
], ComponentsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsAvgAggregate_1.ComponentsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsAvgAggregate_1.ComponentsAvgAggregate)
], ComponentsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsSumAggregate_1.ComponentsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsSumAggregate_1.ComponentsSumAggregate)
], ComponentsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsMinAggregate_1.ComponentsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsMinAggregate_1.ComponentsMinAggregate)
], ComponentsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsMaxAggregate_1.ComponentsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsMaxAggregate_1.ComponentsMaxAggregate)
], ComponentsGroupBy.prototype, "_max", void 0);
ComponentsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ComponentsGroupBy", {
        isAbstract: true
    })
], ComponentsGroupBy);
exports.ComponentsGroupBy = ComponentsGroupBy;
