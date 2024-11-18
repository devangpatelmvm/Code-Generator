"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneColumnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsCreateInput_1 = require("../../../inputs/ColumnsCreateInput");
const ColumnsUpdateInput_1 = require("../../../inputs/ColumnsUpdateInput");
const ColumnsWhereUniqueInput_1 = require("../../../inputs/ColumnsWhereUniqueInput");
let UpsertOneColumnsArgs = class UpsertOneColumnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput)
], UpsertOneColumnsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsCreateInput_1.ColumnsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColumnsCreateInput_1.ColumnsCreateInput)
], UpsertOneColumnsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsUpdateInput_1.ColumnsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColumnsUpdateInput_1.ColumnsUpdateInput)
], UpsertOneColumnsArgs.prototype, "update", void 0);
UpsertOneColumnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneColumnsArgs);
exports.UpsertOneColumnsArgs = UpsertOneColumnsArgs;
