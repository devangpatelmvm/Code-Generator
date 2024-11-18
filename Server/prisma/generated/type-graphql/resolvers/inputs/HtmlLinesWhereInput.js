"use strict";
var HtmlLinesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsRelationFilter_1 = require("../inputs/ComponentsRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let HtmlLinesWhereInput = HtmlLinesWhereInput_1 = class HtmlLinesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], HtmlLinesWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], HtmlLinesWhereInput.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsRelationFilter_1.ComponentsRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsRelationFilter_1.ComponentsRelationFilter)
], HtmlLinesWhereInput.prototype, "component", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], HtmlLinesWhereInput.prototype, "componentId", void 0);
HtmlLinesWhereInput = HtmlLinesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesWhereInput", {
        isAbstract: true
    })
], HtmlLinesWhereInput);
exports.HtmlLinesWhereInput = HtmlLinesWhereInput;
