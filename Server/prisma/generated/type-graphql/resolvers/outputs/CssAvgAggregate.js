"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CssAvgAggregate = class CssAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CssAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CssAvgAggregate.prototype, "componentId", void 0);
CssAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CssAvgAggregate", {
        isAbstract: true
    })
], CssAvgAggregate);
exports.CssAvgAggregate = CssAvgAggregate;
