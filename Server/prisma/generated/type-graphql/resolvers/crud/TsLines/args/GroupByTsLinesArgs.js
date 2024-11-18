"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTsLinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TsLinesOrderByWithAggregationInput_1 = require("../../../inputs/TsLinesOrderByWithAggregationInput");
const TsLinesScalarWhereWithAggregatesInput_1 = require("../../../inputs/TsLinesScalarWhereWithAggregatesInput");
const TsLinesWhereInput_1 = require("../../../inputs/TsLinesWhereInput");
const TsLinesScalarFieldEnum_1 = require("../../../../enums/TsLinesScalarFieldEnum");
let GroupByTsLinesArgs = class GroupByTsLinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesWhereInput_1.TsLinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesWhereInput_1.TsLinesWhereInput)
], GroupByTsLinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesOrderByWithAggregationInput_1.TsLinesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTsLinesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesScalarFieldEnum_1.TsLinesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTsLinesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesScalarWhereWithAggregatesInput_1.TsLinesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesScalarWhereWithAggregatesInput_1.TsLinesScalarWhereWithAggregatesInput)
], GroupByTsLinesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTsLinesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTsLinesArgs.prototype, "skip", void 0);
GroupByTsLinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTsLinesArgs);
exports.GroupByTsLinesArgs = GroupByTsLinesArgs;
