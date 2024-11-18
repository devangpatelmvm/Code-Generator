"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TsLinesCountAggregate = class TsLinesCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TsLinesCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TsLinesCountAggregate.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TsLinesCountAggregate.prototype, "componentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TsLinesCountAggregate.prototype, "_all", void 0);
TsLinesCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TsLinesCountAggregate", {
        isAbstract: true
    })
], TsLinesCountAggregate);
exports.TsLinesCountAggregate = TsLinesCountAggregate;
