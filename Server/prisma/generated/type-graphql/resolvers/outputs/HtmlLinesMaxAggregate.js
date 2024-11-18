"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let HtmlLinesMaxAggregate = class HtmlLinesMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], HtmlLinesMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesMaxAggregate.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], HtmlLinesMaxAggregate.prototype, "componentId", void 0);
HtmlLinesMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("HtmlLinesMaxAggregate", {
        isAbstract: true
    })
], HtmlLinesMaxAggregate);
exports.HtmlLinesMaxAggregate = HtmlLinesMaxAggregate;
