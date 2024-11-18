"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CssMaxAggregate = class CssMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CssMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssMaxAggregate.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CssMaxAggregate.prototype, "componentId", void 0);
CssMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CssMaxAggregate", {
        isAbstract: true
    })
], CssMaxAggregate);
exports.CssMaxAggregate = CssMaxAggregate;
