"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesUpdateWithWhereUniqueWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TsLinesUpdateWithoutComponentInput_1 = require("../inputs/TsLinesUpdateWithoutComponentInput");
const TsLinesWhereUniqueInput_1 = require("../inputs/TsLinesWhereUniqueInput");
let TsLinesUpdateWithWhereUniqueWithoutComponentInput = class TsLinesUpdateWithWhereUniqueWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput)
], TsLinesUpdateWithWhereUniqueWithoutComponentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesUpdateWithoutComponentInput_1.TsLinesUpdateWithoutComponentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TsLinesUpdateWithoutComponentInput_1.TsLinesUpdateWithoutComponentInput)
], TsLinesUpdateWithWhereUniqueWithoutComponentInput.prototype, "data", void 0);
TsLinesUpdateWithWhereUniqueWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesUpdateWithWhereUniqueWithoutComponentInput", {
        isAbstract: true
    })
], TsLinesUpdateWithWhereUniqueWithoutComponentInput);
exports.TsLinesUpdateWithWhereUniqueWithoutComponentInput = TsLinesUpdateWithWhereUniqueWithoutComponentInput;
