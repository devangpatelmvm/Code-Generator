"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesCreateNestedManyWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesCreateOrConnectWithoutComponentInput_1 = require("../inputs/HtmlLinesCreateOrConnectWithoutComponentInput");
const HtmlLinesCreateWithoutComponentInput_1 = require("../inputs/HtmlLinesCreateWithoutComponentInput");
const HtmlLinesWhereUniqueInput_1 = require("../inputs/HtmlLinesWhereUniqueInput");
let HtmlLinesCreateNestedManyWithoutComponentInput = class HtmlLinesCreateNestedManyWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesCreateWithoutComponentInput_1.HtmlLinesCreateWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesCreateNestedManyWithoutComponentInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesCreateOrConnectWithoutComponentInput_1.HtmlLinesCreateOrConnectWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesCreateNestedManyWithoutComponentInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesCreateNestedManyWithoutComponentInput.prototype, "connect", void 0);
HtmlLinesCreateNestedManyWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesCreateNestedManyWithoutComponentInput", {
        isAbstract: true
    })
], HtmlLinesCreateNestedManyWithoutComponentInput);
exports.HtmlLinesCreateNestedManyWithoutComponentInput = HtmlLinesCreateNestedManyWithoutComponentInput;
