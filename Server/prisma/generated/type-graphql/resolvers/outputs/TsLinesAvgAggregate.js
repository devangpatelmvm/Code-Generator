"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TsLinesAvgAggregate = class TsLinesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TsLinesAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TsLinesAvgAggregate.prototype, "componentId", void 0);
TsLinesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TsLinesAvgAggregate", {
        isAbstract: true
    })
], TsLinesAvgAggregate);
exports.TsLinesAvgAggregate = TsLinesAvgAggregate;
