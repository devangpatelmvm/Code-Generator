"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateNestedOneWithoutTsLineInput_1 = require("../inputs/ComponentsCreateNestedOneWithoutTsLineInput");
let TsLinesCreateInput = class TsLinesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesCreateInput.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateNestedOneWithoutTsLineInput_1.ComponentsCreateNestedOneWithoutTsLineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsCreateNestedOneWithoutTsLineInput_1.ComponentsCreateNestedOneWithoutTsLineInput)
], TsLinesCreateInput.prototype, "component", void 0);
TsLinesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesCreateInput", {
        isAbstract: true
    })
], TsLinesCreateInput);
exports.TsLinesCreateInput = TsLinesCreateInput;
