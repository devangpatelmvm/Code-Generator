"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTablesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesWhereInput_1 = require("../../../inputs/TablesWhereInput");
let DeleteManyTablesArgs = class DeleteManyTablesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereInput_1.TablesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesWhereInput_1.TablesWhereInput)
], DeleteManyTablesArgs.prototype, "where", void 0);
DeleteManyTablesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTablesArgs);
exports.DeleteManyTablesArgs = DeleteManyTablesArgs;
