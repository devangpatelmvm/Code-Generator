"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let HtmlLinesCountAggregate = class HtmlLinesCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], HtmlLinesCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], HtmlLinesCountAggregate.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], HtmlLinesCountAggregate.prototype, "componentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], HtmlLinesCountAggregate.prototype, "_all", void 0);
HtmlLinesCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("HtmlLinesCountAggregate", {
        isAbstract: true
    })
], HtmlLinesCountAggregate);
exports.HtmlLinesCountAggregate = HtmlLinesCountAggregate;
