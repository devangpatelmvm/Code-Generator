"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let HtmlLinesSumAggregate = class HtmlLinesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], HtmlLinesSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], HtmlLinesSumAggregate.prototype, "componentId", void 0);
HtmlLinesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("HtmlLinesSumAggregate", {
        isAbstract: true
    })
], HtmlLinesSumAggregate);
exports.HtmlLinesSumAggregate = HtmlLinesSumAggregate;
