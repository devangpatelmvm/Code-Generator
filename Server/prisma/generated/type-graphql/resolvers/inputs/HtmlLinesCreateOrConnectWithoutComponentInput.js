"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesCreateOrConnectWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesCreateWithoutComponentInput_1 = require("../inputs/HtmlLinesCreateWithoutComponentInput");
const HtmlLinesWhereUniqueInput_1 = require("../inputs/HtmlLinesWhereUniqueInput");
let HtmlLinesCreateOrConnectWithoutComponentInput = class HtmlLinesCreateOrConnectWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput)
], HtmlLinesCreateOrConnectWithoutComponentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesCreateWithoutComponentInput_1.HtmlLinesCreateWithoutComponentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HtmlLinesCreateWithoutComponentInput_1.HtmlLinesCreateWithoutComponentInput)
], HtmlLinesCreateOrConnectWithoutComponentInput.prototype, "create", void 0);
HtmlLinesCreateOrConnectWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesCreateOrConnectWithoutComponentInput", {
        isAbstract: true
    })
], HtmlLinesCreateOrConnectWithoutComponentInput);
exports.HtmlLinesCreateOrConnectWithoutComponentInput = HtmlLinesCreateOrConnectWithoutComponentInput;
