"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneHtmlLinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesWhereUniqueInput_1 = require("../../../inputs/HtmlLinesWhereUniqueInput");
let DeleteOneHtmlLinesArgs = class DeleteOneHtmlLinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput)
], DeleteOneHtmlLinesArgs.prototype, "where", void 0);
DeleteOneHtmlLinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneHtmlLinesArgs);
exports.DeleteOneHtmlLinesArgs = DeleteOneHtmlLinesArgs;
