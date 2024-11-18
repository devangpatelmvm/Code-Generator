"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstColumnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsOrderByWithRelationInput_1 = require("../../../inputs/ColumnsOrderByWithRelationInput");
const ColumnsWhereInput_1 = require("../../../inputs/ColumnsWhereInput");
const ColumnsWhereUniqueInput_1 = require("../../../inputs/ColumnsWhereUniqueInput");
const ColumnsScalarFieldEnum_1 = require("../../../../enums/ColumnsScalarFieldEnum");
let FindFirstColumnsArgs = class FindFirstColumnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsWhereInput_1.ColumnsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsWhereInput_1.ColumnsWhereInput)
], FindFirstColumnsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsOrderByWithRelationInput_1.ColumnsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstColumnsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput)
], FindFirstColumnsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstColumnsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstColumnsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsScalarFieldEnum_1.ColumnsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstColumnsArgs.prototype, "distinct", void 0);
FindFirstColumnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstColumnsArgs);
exports.FindFirstColumnsArgs = FindFirstColumnsArgs;
