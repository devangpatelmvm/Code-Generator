"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTablesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesWhereUniqueInput_1 = require("../../../inputs/TablesWhereUniqueInput");
let DeleteOneTablesArgs = class DeleteOneTablesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereUniqueInput_1.TablesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesWhereUniqueInput_1.TablesWhereUniqueInput)
], DeleteOneTablesArgs.prototype, "where", void 0);
DeleteOneTablesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTablesArgs);
exports.DeleteOneTablesArgs = DeleteOneTablesArgs;
