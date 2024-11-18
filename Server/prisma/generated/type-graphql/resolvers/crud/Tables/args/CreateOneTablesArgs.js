"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTablesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesCreateInput_1 = require("../../../inputs/TablesCreateInput");
let CreateOneTablesArgs = class CreateOneTablesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesCreateInput_1.TablesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesCreateInput_1.TablesCreateInput)
], CreateOneTablesArgs.prototype, "data", void 0);
CreateOneTablesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTablesArgs);
exports.CreateOneTablesArgs = CreateOneTablesArgs;
