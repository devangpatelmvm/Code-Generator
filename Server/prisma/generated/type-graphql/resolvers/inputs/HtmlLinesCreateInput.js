"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateNestedOneWithoutHtmllineInput_1 = require("../inputs/ComponentsCreateNestedOneWithoutHtmllineInput");
let HtmlLinesCreateInput = class HtmlLinesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesCreateInput.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateNestedOneWithoutHtmllineInput_1.ComponentsCreateNestedOneWithoutHtmllineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsCreateNestedOneWithoutHtmllineInput_1.ComponentsCreateNestedOneWithoutHtmllineInput)
], HtmlLinesCreateInput.prototype, "component", void 0);
HtmlLinesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesCreateInput", {
        isAbstract: true
    })
], HtmlLinesCreateInput);
exports.HtmlLinesCreateInput = HtmlLinesCreateInput;
