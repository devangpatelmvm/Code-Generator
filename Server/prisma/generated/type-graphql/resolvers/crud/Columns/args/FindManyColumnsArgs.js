"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyColumnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsOrderByWithRelationInput_1 = require("../../../inputs/ColumnsOrderByWithRelationInput");
const ColumnsWhereInput_1 = require("../../../inputs/ColumnsWhereInput");
const ColumnsWhereUniqueInput_1 = require("../../../inputs/ColumnsWhereUniqueInput");
const ColumnsScalarFieldEnum_1 = require("../../../../enums/ColumnsScalarFieldEnum");
let FindManyColumnsArgs = class FindManyColumnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsWhereInput_1.ColumnsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsWhereInput_1.ColumnsWhereInput)
], FindManyColumnsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsOrderByWithRelationInput_1.ColumnsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyColumnsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput)
], FindManyColumnsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyColumnsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyColumnsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsScalarFieldEnum_1.ColumnsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyColumnsArgs.prototype, "distinct", void 0);
FindManyColumnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyColumnsArgs);
exports.FindManyColumnsArgs = FindManyColumnsArgs;
