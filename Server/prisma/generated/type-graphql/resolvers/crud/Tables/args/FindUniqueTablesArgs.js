"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTablesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesWhereUniqueInput_1 = require("../../../inputs/TablesWhereUniqueInput");
let FindUniqueTablesArgs = class FindUniqueTablesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereUniqueInput_1.TablesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesWhereUniqueInput_1.TablesWhereUniqueInput)
], FindUniqueTablesArgs.prototype, "where", void 0);
FindUniqueTablesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTablesArgs);
exports.FindUniqueTablesArgs = FindUniqueTablesArgs;
