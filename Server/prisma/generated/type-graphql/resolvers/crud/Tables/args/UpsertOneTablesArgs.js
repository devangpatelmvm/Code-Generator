"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTablesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesCreateInput_1 = require("../../../inputs/TablesCreateInput");
const TablesUpdateInput_1 = require("../../../inputs/TablesUpdateInput");
const TablesWhereUniqueInput_1 = require("../../../inputs/TablesWhereUniqueInput");
let UpsertOneTablesArgs = class UpsertOneTablesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereUniqueInput_1.TablesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesWhereUniqueInput_1.TablesWhereUniqueInput)
], UpsertOneTablesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesCreateInput_1.TablesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesCreateInput_1.TablesCreateInput)
], UpsertOneTablesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesUpdateInput_1.TablesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesUpdateInput_1.TablesUpdateInput)
], UpsertOneTablesArgs.prototype, "update", void 0);
UpsertOneTablesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTablesArgs);
exports.UpsertOneTablesArgs = UpsertOneTablesArgs;
