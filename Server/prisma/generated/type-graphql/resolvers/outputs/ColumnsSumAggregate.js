"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ColumnsSumAggregate = class ColumnsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ColumnsSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ColumnsSumAggregate.prototype, "tableId", void 0);
ColumnsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ColumnsSumAggregate", {
        isAbstract: true
    })
], ColumnsSumAggregate);
exports.ColumnsSumAggregate = ColumnsSumAggregate;
