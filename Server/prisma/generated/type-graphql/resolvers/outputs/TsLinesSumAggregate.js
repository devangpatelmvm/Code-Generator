"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TsLinesSumAggregate = class TsLinesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TsLinesSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TsLinesSumAggregate.prototype, "componentId", void 0);
TsLinesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TsLinesSumAggregate", {
        isAbstract: true
    })
], TsLinesSumAggregate);
exports.TsLinesSumAggregate = TsLinesSumAggregate;
