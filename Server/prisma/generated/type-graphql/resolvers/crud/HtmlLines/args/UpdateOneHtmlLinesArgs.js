"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneHtmlLinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesUpdateInput_1 = require("../../../inputs/HtmlLinesUpdateInput");
const HtmlLinesWhereUniqueInput_1 = require("../../../inputs/HtmlLinesWhereUniqueInput");
let UpdateOneHtmlLinesArgs = class UpdateOneHtmlLinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesUpdateInput_1.HtmlLinesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HtmlLinesUpdateInput_1.HtmlLinesUpdateInput)
], UpdateOneHtmlLinesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput)
], UpdateOneHtmlLinesArgs.prototype, "where", void 0);
UpdateOneHtmlLinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneHtmlLinesArgs);
exports.UpdateOneHtmlLinesArgs = UpdateOneHtmlLinesArgs;
