"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CssSumAggregate = class CssSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CssSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CssSumAggregate.prototype, "componentId", void 0);
CssSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CssSumAggregate", {
        isAbstract: true
    })
], CssSumAggregate);
exports.CssSumAggregate = CssSumAggregate;
