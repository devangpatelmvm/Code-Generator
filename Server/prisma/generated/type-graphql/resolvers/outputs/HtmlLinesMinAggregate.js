"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let HtmlLinesMinAggregate = class HtmlLinesMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], HtmlLinesMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesMinAggregate.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], HtmlLinesMinAggregate.prototype, "componentId", void 0);
HtmlLinesMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("HtmlLinesMinAggregate", {
        isAbstract: true
    })
], HtmlLinesMinAggregate);
exports.HtmlLinesMinAggregate = HtmlLinesMinAggregate;
