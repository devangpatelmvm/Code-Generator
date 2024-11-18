"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTables = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesAvgAggregate_1 = require("../outputs/TablesAvgAggregate");
const TablesCountAggregate_1 = require("../outputs/TablesCountAggregate");
const TablesMaxAggregate_1 = require("../outputs/TablesMaxAggregate");
const TablesMinAggregate_1 = require("../outputs/TablesMinAggregate");
const TablesSumAggregate_1 = require("../outputs/TablesSumAggregate");
let AggregateTables = class AggregateTables {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesCountAggregate_1.TablesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesCountAggregate_1.TablesCountAggregate)
], AggregateTables.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesAvgAggregate_1.TablesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesAvgAggregate_1.TablesAvgAggregate)
], AggregateTables.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesSumAggregate_1.TablesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesSumAggregate_1.TablesSumAggregate)
], AggregateTables.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesMinAggregate_1.TablesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesMinAggregate_1.TablesMinAggregate)
], AggregateTables.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesMaxAggregate_1.TablesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesMaxAggregate_1.TablesMaxAggregate)
], AggregateTables.prototype, "_max", void 0);
AggregateTables = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTables", {
        isAbstract: true
    })
], AggregateTables);
exports.AggregateTables = AggregateTables;
