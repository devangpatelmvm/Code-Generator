"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTablesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesUpdateInput_1 = require("../../../inputs/TablesUpdateInput");
const TablesWhereUniqueInput_1 = require("../../../inputs/TablesWhereUniqueInput");
let UpdateOneTablesArgs = class UpdateOneTablesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesUpdateInput_1.TablesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesUpdateInput_1.TablesUpdateInput)
], UpdateOneTablesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereUniqueInput_1.TablesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesWhereUniqueInput_1.TablesWhereUniqueInput)
], UpdateOneTablesArgs.prototype, "where", void 0);
UpdateOneTablesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTablesArgs);
exports.UpdateOneTablesArgs = UpdateOneTablesArgs;
