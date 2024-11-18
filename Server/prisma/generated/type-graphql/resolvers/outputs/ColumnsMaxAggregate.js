"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ColumnsMaxAggregate = class ColumnsMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ColumnsMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsMaxAggregate.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsMaxAggregate.prototype, "constraint", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ColumnsMaxAggregate.prototype, "tableId", void 0);
ColumnsMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ColumnsMaxAggregate", {
        isAbstract: true
    })
], ColumnsMaxAggregate);
exports.ColumnsMaxAggregate = ColumnsMaxAggregate;
