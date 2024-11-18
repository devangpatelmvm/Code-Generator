"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCssArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssUpdateInput_1 = require("../../../inputs/CssUpdateInput");
const CssWhereUniqueInput_1 = require("../../../inputs/CssWhereUniqueInput");
let UpdateOneCssArgs = class UpdateOneCssArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssUpdateInput_1.CssUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CssUpdateInput_1.CssUpdateInput)
], UpdateOneCssArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssWhereUniqueInput_1.CssWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CssWhereUniqueInput_1.CssWhereUniqueInput)
], UpdateOneCssArgs.prototype, "where", void 0);
UpdateOneCssArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCssArgs);
exports.UpdateOneCssArgs = UpdateOneCssArgs;
