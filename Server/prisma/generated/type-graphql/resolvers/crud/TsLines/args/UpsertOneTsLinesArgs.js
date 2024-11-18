"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTsLinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TsLinesCreateInput_1 = require("../../../inputs/TsLinesCreateInput");
const TsLinesUpdateInput_1 = require("../../../inputs/TsLinesUpdateInput");
const TsLinesWhereUniqueInput_1 = require("../../../inputs/TsLinesWhereUniqueInput");
let UpsertOneTsLinesArgs = class UpsertOneTsLinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput)
], UpsertOneTsLinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesCreateInput_1.TsLinesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TsLinesCreateInput_1.TsLinesCreateInput)
], UpsertOneTsLinesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesUpdateInput_1.TsLinesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TsLinesUpdateInput_1.TsLinesUpdateInput)
], UpsertOneTsLinesArgs.prototype, "update", void 0);
UpsertOneTsLinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTsLinesArgs);
exports.UpsertOneTsLinesArgs = UpsertOneTsLinesArgs;
