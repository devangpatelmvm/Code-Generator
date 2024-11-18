"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let HtmlLinesWhereUniqueInput = class HtmlLinesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], HtmlLinesWhereUniqueInput.prototype, "id", void 0);
HtmlLinesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesWhereUniqueInput", {
        isAbstract: true
    })
], HtmlLinesWhereUniqueInput);
exports.HtmlLinesWhereUniqueInput = HtmlLinesWhereUniqueInput;
