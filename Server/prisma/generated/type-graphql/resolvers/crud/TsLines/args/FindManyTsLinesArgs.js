"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTsLinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TsLinesOrderByWithRelationInput_1 = require("../../../inputs/TsLinesOrderByWithRelationInput");
const TsLinesWhereInput_1 = require("../../../inputs/TsLinesWhereInput");
const TsLinesWhereUniqueInput_1 = require("../../../inputs/TsLinesWhereUniqueInput");
const TsLinesScalarFieldEnum_1 = require("../../../../enums/TsLinesScalarFieldEnum");
let FindManyTsLinesArgs = class FindManyTsLinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesWhereInput_1.TsLinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesWhereInput_1.TsLinesWhereInput)
], FindManyTsLinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesOrderByWithRelationInput_1.TsLinesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTsLinesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput)
], FindManyTsLinesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTsLinesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTsLinesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesScalarFieldEnum_1.TsLinesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTsLinesArgs.prototype, "distinct", void 0);
FindManyTsLinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyTsLinesArgs);
exports.FindManyTsLinesArgs = FindManyTsLinesArgs;
