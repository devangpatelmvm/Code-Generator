"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTablesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesOrderByWithRelationInput_1 = require("../../../inputs/TablesOrderByWithRelationInput");
const TablesWhereInput_1 = require("../../../inputs/TablesWhereInput");
const TablesWhereUniqueInput_1 = require("../../../inputs/TablesWhereUniqueInput");
let AggregateTablesArgs = class AggregateTablesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereInput_1.TablesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesWhereInput_1.TablesWhereInput)
], AggregateTablesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesOrderByWithRelationInput_1.TablesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTablesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereUniqueInput_1.TablesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesWhereUniqueInput_1.TablesWhereUniqueInput)
], AggregateTablesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTablesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTablesArgs.prototype, "skip", void 0);
AggregateTablesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTablesArgs);
exports.AggregateTablesArgs = AggregateTablesArgs;
