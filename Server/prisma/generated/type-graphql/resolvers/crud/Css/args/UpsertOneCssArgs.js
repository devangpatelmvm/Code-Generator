"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCssArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssCreateInput_1 = require("../../../inputs/CssCreateInput");
const CssUpdateInput_1 = require("../../../inputs/CssUpdateInput");
const CssWhereUniqueInput_1 = require("../../../inputs/CssWhereUniqueInput");
let UpsertOneCssArgs = class UpsertOneCssArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssWhereUniqueInput_1.CssWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CssWhereUniqueInput_1.CssWhereUniqueInput)
], UpsertOneCssArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssCreateInput_1.CssCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CssCreateInput_1.CssCreateInput)
], UpsertOneCssArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssUpdateInput_1.CssUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CssUpdateInput_1.CssUpdateInput)
], UpsertOneCssArgs.prototype, "update", void 0);
UpsertOneCssArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCssArgs);
exports.UpsertOneCssArgs = UpsertOneCssArgs;
