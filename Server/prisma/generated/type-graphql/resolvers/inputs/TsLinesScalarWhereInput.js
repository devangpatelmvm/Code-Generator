"use strict";
var TsLinesScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let TsLinesScalarWhereInput = TsLinesScalarWhereInput_1 = class TsLinesScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TsLinesScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TsLinesScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TsLinesScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TsLinesScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TsLinesScalarWhereInput.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TsLinesScalarWhereInput.prototype, "componentId", void 0);
TsLinesScalarWhereInput = TsLinesScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesScalarWhereInput", {
        isAbstract: true
    })
], TsLinesScalarWhereInput);
exports.TsLinesScalarWhereInput = TsLinesScalarWhereInput;
