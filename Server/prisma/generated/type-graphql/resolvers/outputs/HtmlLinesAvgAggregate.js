"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let HtmlLinesAvgAggregate = class HtmlLinesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], HtmlLinesAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], HtmlLinesAvgAggregate.prototype, "componentId", void 0);
HtmlLinesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("HtmlLinesAvgAggregate", {
        isAbstract: true
    })
], HtmlLinesAvgAggregate);
exports.HtmlLinesAvgAggregate = HtmlLinesAvgAggregate;
