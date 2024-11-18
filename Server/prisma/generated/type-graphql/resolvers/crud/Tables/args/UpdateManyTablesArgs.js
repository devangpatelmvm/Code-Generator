"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTablesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesUpdateManyMutationInput_1 = require("../../../inputs/TablesUpdateManyMutationInput");
const TablesWhereInput_1 = require("../../../inputs/TablesWhereInput");
let UpdateManyTablesArgs = class UpdateManyTablesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesUpdateManyMutationInput_1.TablesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesUpdateManyMutationInput_1.TablesUpdateManyMutationInput)
], UpdateManyTablesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereInput_1.TablesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesWhereInput_1.TablesWhereInput)
], UpdateManyTablesArgs.prototype, "where", void 0);
UpdateManyTablesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTablesArgs);
exports.UpdateManyTablesArgs = UpdateManyTablesArgs;
