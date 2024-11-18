"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CssMinAggregate = class CssMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CssMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssMinAggregate.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CssMinAggregate.prototype, "componentId", void 0);
CssMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CssMinAggregate", {
        isAbstract: true
    })
], CssMinAggregate);
exports.CssMinAggregate = CssMinAggregate;
