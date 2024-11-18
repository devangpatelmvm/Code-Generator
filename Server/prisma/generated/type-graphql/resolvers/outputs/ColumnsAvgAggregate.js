"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ColumnsAvgAggregate = class ColumnsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ColumnsAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ColumnsAvgAggregate.prototype, "tableId", void 0);
ColumnsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ColumnsAvgAggregate", {
        isAbstract: true
    })
], ColumnsAvgAggregate);
exports.ColumnsAvgAggregate = ColumnsAvgAggregate;
