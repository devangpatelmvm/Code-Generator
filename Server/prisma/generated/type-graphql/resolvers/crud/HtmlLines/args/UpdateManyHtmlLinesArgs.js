"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyHtmlLinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesUpdateManyMutationInput_1 = require("../../../inputs/HtmlLinesUpdateManyMutationInput");
const HtmlLinesWhereInput_1 = require("../../../inputs/HtmlLinesWhereInput");
let UpdateManyHtmlLinesArgs = class UpdateManyHtmlLinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesUpdateManyMutationInput_1.HtmlLinesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HtmlLinesUpdateManyMutationInput_1.HtmlLinesUpdateManyMutationInput)
], UpdateManyHtmlLinesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesWhereInput_1.HtmlLinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesWhereInput_1.HtmlLinesWhereInput)
], UpdateManyHtmlLinesArgs.prototype, "where", void 0);
UpdateManyHtmlLinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyHtmlLinesArgs);
exports.UpdateManyHtmlLinesArgs = UpdateManyHtmlLinesArgs;
