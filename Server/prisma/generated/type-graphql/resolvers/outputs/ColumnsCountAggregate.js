"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ColumnsCountAggregate = class ColumnsCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ColumnsCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ColumnsCountAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ColumnsCountAggregate.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ColumnsCountAggregate.prototype, "constraint", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ColumnsCountAggregate.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ColumnsCountAggregate.prototype, "_all", void 0);
ColumnsCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ColumnsCountAggregate", {
        isAbstract: true
    })
], ColumnsCountAggregate);
exports.ColumnsCountAggregate = ColumnsCountAggregate;
