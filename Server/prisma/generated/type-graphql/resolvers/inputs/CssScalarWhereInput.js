"use strict";
var CssScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let CssScalarWhereInput = CssScalarWhereInput_1 = class CssScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CssScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CssScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CssScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CssScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CssScalarWhereInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CssScalarWhereInput.prototype, "componentId", void 0);
CssScalarWhereInput = CssScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CssScalarWhereInput", {
        isAbstract: true
    })
], CssScalarWhereInput);
exports.CssScalarWhereInput = CssScalarWhereInput;
