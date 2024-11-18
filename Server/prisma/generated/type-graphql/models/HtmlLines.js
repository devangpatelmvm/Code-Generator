"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLines = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let HtmlLines = class HtmlLines {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], HtmlLines.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLines.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], HtmlLines.prototype, "componentId", void 0);
HtmlLines = tslib_1.__decorate([
    TypeGraphQL.ObjectType("HtmlLines", {
        isAbstract: true
    })
], HtmlLines);
exports.HtmlLines = HtmlLines;
