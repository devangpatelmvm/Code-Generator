"use strict";
var TsLinesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsRelationFilter_1 = require("../inputs/ComponentsRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let TsLinesWhereInput = TsLinesWhereInput_1 = class TsLinesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TsLinesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TsLinesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TsLinesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TsLinesWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TsLinesWhereInput.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsRelationFilter_1.ComponentsRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsRelationFilter_1.ComponentsRelationFilter)
], TsLinesWhereInput.prototype, "component", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TsLinesWhereInput.prototype, "componentId", void 0);
TsLinesWhereInput = TsLinesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesWhereInput", {
        isAbstract: true
    })
], TsLinesWhereInput);
exports.TsLinesWhereInput = TsLinesWhereInput;
