"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneHtmlLinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesCreateInput_1 = require("../../../inputs/HtmlLinesCreateInput");
let CreateOneHtmlLinesArgs = class CreateOneHtmlLinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesCreateInput_1.HtmlLinesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HtmlLinesCreateInput_1.HtmlLinesCreateInput)
], CreateOneHtmlLinesArgs.prototype, "data", void 0);
CreateOneHtmlLinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneHtmlLinesArgs);
exports.CreateOneHtmlLinesArgs = CreateOneHtmlLinesArgs;
