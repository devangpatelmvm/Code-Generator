"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTablesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesOrderByWithRelationInput_1 = require("../../../inputs/TablesOrderByWithRelationInput");
const TablesWhereInput_1 = require("../../../inputs/TablesWhereInput");
const TablesWhereUniqueInput_1 = require("../../../inputs/TablesWhereUniqueInput");
const TablesScalarFieldEnum_1 = require("../../../../enums/TablesScalarFieldEnum");
let FindManyTablesArgs = class FindManyTablesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereInput_1.TablesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesWhereInput_1.TablesWhereInput)
], FindManyTablesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesOrderByWithRelationInput_1.TablesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTablesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereUniqueInput_1.TablesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesWhereUniqueInput_1.TablesWhereUniqueInput)
], FindManyTablesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTablesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTablesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesScalarFieldEnum_1.TablesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTablesArgs.prototype, "distinct", void 0);
FindManyTablesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyTablesArgs);
exports.FindManyTablesArgs = FindManyTablesArgs;
