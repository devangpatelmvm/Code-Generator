"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CssCountAggregate = class CssCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CssCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CssCountAggregate.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CssCountAggregate.prototype, "componentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CssCountAggregate.prototype, "_all", void 0);
CssCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CssCountAggregate", {
        isAbstract: true
    })
], CssCountAggregate);
exports.CssCountAggregate = CssCountAggregate;
