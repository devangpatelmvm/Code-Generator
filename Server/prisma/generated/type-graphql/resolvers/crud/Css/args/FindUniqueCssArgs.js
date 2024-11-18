"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCssArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssWhereUniqueInput_1 = require("../../../inputs/CssWhereUniqueInput");
let FindUniqueCssArgs = class FindUniqueCssArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssWhereUniqueInput_1.CssWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CssWhereUniqueInput_1.CssWhereUniqueInput)
], FindUniqueCssArgs.prototype, "where", void 0);
FindUniqueCssArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCssArgs);
exports.FindUniqueCssArgs = FindUniqueCssArgs;
