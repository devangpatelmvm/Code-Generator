"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesAvgAggregate_1 = require("../outputs/TablesAvgAggregate");
const TablesCountAggregate_1 = require("../outputs/TablesCountAggregate");
const TablesMaxAggregate_1 = require("../outputs/TablesMaxAggregate");
const TablesMinAggregate_1 = require("../outputs/TablesMinAggregate");
const TablesSumAggregate_1 = require("../outputs/TablesSumAggregate");
let TablesGroupBy = class TablesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TablesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TablesGroupBy.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesCountAggregate_1.TablesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesCountAggregate_1.TablesCountAggregate)
], TablesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesAvgAggregate_1.TablesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesAvgAggregate_1.TablesAvgAggregate)
], TablesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesSumAggregate_1.TablesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesSumAggregate_1.TablesSumAggregate)
], TablesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesMinAggregate_1.TablesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesMinAggregate_1.TablesMinAggregate)
], TablesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesMaxAggregate_1.TablesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesMaxAggregate_1.TablesMaxAggregate)
], TablesGroupBy.prototype, "_max", void 0);
TablesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TablesGroupBy", {
        isAbstract: true
    })
], TablesGroupBy);
exports.TablesGroupBy = TablesGroupBy;
