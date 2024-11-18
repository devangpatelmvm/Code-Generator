"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsCreateWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ColumnsCreateWithoutTableInput = class ColumnsCreateWithoutTableInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsCreateWithoutTableInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsCreateWithoutTableInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColumnsCreateWithoutTableInput.prototype, "constraint", void 0);
ColumnsCreateWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsCreateWithoutTableInput", {
        isAbstract: true
    })
], ColumnsCreateWithoutTableInput);
exports.ColumnsCreateWithoutTableInput = ColumnsCreateWithoutTableInput;
