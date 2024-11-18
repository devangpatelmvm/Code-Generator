"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyHtmlLinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesWhereInput_1 = require("../../../inputs/HtmlLinesWhereInput");
let DeleteManyHtmlLinesArgs = class DeleteManyHtmlLinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesWhereInput_1.HtmlLinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesWhereInput_1.HtmlLinesWhereInput)
], DeleteManyHtmlLinesArgs.prototype, "where", void 0);
DeleteManyHtmlLinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyHtmlLinesArgs);
exports.DeleteManyHtmlLinesArgs = DeleteManyHtmlLinesArgs;
