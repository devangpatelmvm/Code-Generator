"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ColumnsMinAggregate = class ColumnsMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ColumnsMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsMinAggregate.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsMinAggregate.prototype, "constraint", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ColumnsMinAggregate.prototype, "tableId", void 0);
ColumnsMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ColumnsMinAggregate", {
        isAbstract: true
    })
], ColumnsMinAggregate);
exports.ColumnsMinAggregate = ColumnsMinAggregate;
