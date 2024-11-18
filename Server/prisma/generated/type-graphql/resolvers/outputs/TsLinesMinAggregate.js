"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TsLinesMinAggregate = class TsLinesMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TsLinesMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesMinAggregate.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TsLinesMinAggregate.prototype, "componentId", void 0);
TsLinesMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TsLinesMinAggregate", {
        isAbstract: true
    })
], TsLinesMinAggregate);
exports.TsLinesMinAggregate = TsLinesMinAggregate;
