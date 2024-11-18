"use strict";
var CssWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsRelationFilter_1 = require("../inputs/ComponentsRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let CssWhereInput = CssWhereInput_1 = class CssWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CssWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CssWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CssWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CssWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CssWhereInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsRelationFilter_1.ComponentsRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsRelationFilter_1.ComponentsRelationFilter)
], CssWhereInput.prototype, "component", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CssWhereInput.prototype, "componentId", void 0);
CssWhereInput = CssWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CssWhereInput", {
        isAbstract: true
    })
], CssWhereInput);
exports.CssWhereInput = CssWhereInput;
