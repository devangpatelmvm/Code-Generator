"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsCreateWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssCreateNestedManyWithoutComponentInput_1 = require("../inputs/CssCreateNestedManyWithoutComponentInput");
const HtmlLinesCreateNestedManyWithoutComponentInput_1 = require("../inputs/HtmlLinesCreateNestedManyWithoutComponentInput");
const TsLinesCreateNestedManyWithoutComponentInput_1 = require("../inputs/TsLinesCreateNestedManyWithoutComponentInput");
let ComponentsCreateWithoutProjectInput = class ComponentsCreateWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsCreateWithoutProjectInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesCreateNestedManyWithoutComponentInput_1.HtmlLinesCreateNestedManyWithoutComponentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesCreateNestedManyWithoutComponentInput_1.HtmlLinesCreateNestedManyWithoutComponentInput)
], ComponentsCreateWithoutProjectInput.prototype, "htmlline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesCreateNestedManyWithoutComponentInput_1.TsLinesCreateNestedManyWithoutComponentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesCreateNestedManyWithoutComponentInput_1.TsLinesCreateNestedManyWithoutComponentInput)
], ComponentsCreateWithoutProjectInput.prototype, "tsLine", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssCreateNestedManyWithoutComponentInput_1.CssCreateNestedManyWithoutComponentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssCreateNestedManyWithoutComponentInput_1.CssCreateNestedManyWithoutComponentInput)
], ComponentsCreateWithoutProjectInput.prototype, "css", void 0);
ComponentsCreateWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsCreateWithoutProjectInput", {
        isAbstract: true
    })
], ComponentsCreateWithoutProjectInput);
exports.ComponentsCreateWithoutProjectInput = ComponentsCreateWithoutProjectInput;
