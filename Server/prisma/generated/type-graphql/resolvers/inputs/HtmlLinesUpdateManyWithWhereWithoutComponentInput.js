"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesUpdateManyWithWhereWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesScalarWhereInput_1 = require("../inputs/HtmlLinesScalarWhereInput");
const HtmlLinesUpdateManyMutationInput_1 = require("../inputs/HtmlLinesUpdateManyMutationInput");
let HtmlLinesUpdateManyWithWhereWithoutComponentInput = class HtmlLinesUpdateManyWithWhereWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesScalarWhereInput_1.HtmlLinesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HtmlLinesScalarWhereInput_1.HtmlLinesScalarWhereInput)
], HtmlLinesUpdateManyWithWhereWithoutComponentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesUpdateManyMutationInput_1.HtmlLinesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HtmlLinesUpdateManyMutationInput_1.HtmlLinesUpdateManyMutationInput)
], HtmlLinesUpdateManyWithWhereWithoutComponentInput.prototype, "data", void 0);
HtmlLinesUpdateManyWithWhereWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesUpdateManyWithWhereWithoutComponentInput", {
        isAbstract: true
    })
], HtmlLinesUpdateManyWithWhereWithoutComponentInput);
exports.HtmlLinesUpdateManyWithWhereWithoutComponentInput = HtmlLinesUpdateManyWithWhereWithoutComponentInput;
