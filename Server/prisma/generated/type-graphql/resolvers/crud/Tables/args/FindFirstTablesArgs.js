"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTablesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesOrderByWithRelationInput_1 = require("../../../inputs/TablesOrderByWithRelationInput");
const TablesWhereInput_1 = require("../../../inputs/TablesWhereInput");
const TablesWhereUniqueInput_1 = require("../../../inputs/TablesWhereUniqueInput");
const TablesScalarFieldEnum_1 = require("../../../../enums/TablesScalarFieldEnum");
let FindFirstTablesArgs = class FindFirstTablesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereInput_1.TablesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesWhereInput_1.TablesWhereInput)
], FindFirstTablesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesOrderByWithRelationInput_1.TablesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTablesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereUniqueInput_1.TablesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesWhereUniqueInput_1.TablesWhereUniqueInput)
], FindFirstTablesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTablesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTablesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesScalarFieldEnum_1.TablesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTablesArgs.prototype, "distinct", void 0);
FindFirstTablesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTablesArgs);
exports.FindFirstTablesArgs = FindFirstTablesArgs;
