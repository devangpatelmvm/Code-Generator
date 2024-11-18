"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ColumnsWhereUniqueInput = class ColumnsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ColumnsWhereUniqueInput.prototype, "id", void 0);
ColumnsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsWhereUniqueInput", {
        isAbstract: true
    })
], ColumnsWhereUniqueInput);
exports.ColumnsWhereUniqueInput = ColumnsWhereUniqueInput;
