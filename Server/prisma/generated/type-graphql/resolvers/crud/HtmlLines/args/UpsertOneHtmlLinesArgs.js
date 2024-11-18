"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneHtmlLinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesCreateInput_1 = require("../../../inputs/HtmlLinesCreateInput");
const HtmlLinesUpdateInput_1 = require("../../../inputs/HtmlLinesUpdateInput");
const HtmlLinesWhereUniqueInput_1 = require("../../../inputs/HtmlLinesWhereUniqueInput");
let UpsertOneHtmlLinesArgs = class UpsertOneHtmlLinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput)
], UpsertOneHtmlLinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesCreateInput_1.HtmlLinesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HtmlLinesCreateInput_1.HtmlLinesCreateInput)
], UpsertOneHtmlLinesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesUpdateInput_1.HtmlLinesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HtmlLinesUpdateInput_1.HtmlLinesUpdateInput)
], UpsertOneHtmlLinesArgs.prototype, "update", void 0);
UpsertOneHtmlLinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneHtmlLinesArgs);
exports.UpsertOneHtmlLinesArgs = UpsertOneHtmlLinesArgs;
