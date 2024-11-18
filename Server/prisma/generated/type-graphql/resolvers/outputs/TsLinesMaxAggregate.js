"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TsLinesMaxAggregate = class TsLinesMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TsLinesMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesMaxAggregate.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TsLinesMaxAggregate.prototype, "componentId", void 0);
TsLinesMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TsLinesMaxAggregate", {
        isAbstract: true
    })
], TsLinesMaxAggregate);
exports.TsLinesMaxAggregate = TsLinesMaxAggregate;
