"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesUpsertWithWhereUniqueWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TsLinesCreateWithoutComponentInput_1 = require("../inputs/TsLinesCreateWithoutComponentInput");
const TsLinesUpdateWithoutComponentInput_1 = require("../inputs/TsLinesUpdateWithoutComponentInput");
const TsLinesWhereUniqueInput_1 = require("../inputs/TsLinesWhereUniqueInput");
let TsLinesUpsertWithWhereUniqueWithoutComponentInput = class TsLinesUpsertWithWhereUniqueWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput)
], TsLinesUpsertWithWhereUniqueWithoutComponentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesUpdateWithoutComponentInput_1.TsLinesUpdateWithoutComponentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TsLinesUpdateWithoutComponentInput_1.TsLinesUpdateWithoutComponentInput)
], TsLinesUpsertWithWhereUniqueWithoutComponentInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesCreateWithoutComponentInput_1.TsLinesCreateWithoutComponentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TsLinesCreateWithoutComponentInput_1.TsLinesCreateWithoutComponentInput)
], TsLinesUpsertWithWhereUniqueWithoutComponentInput.prototype, "create", void 0);
TsLinesUpsertWithWhereUniqueWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesUpsertWithWhereUniqueWithoutComponentInput", {
        isAbstract: true
    })
], TsLinesUpsertWithWhereUniqueWithoutComponentInput);
exports.TsLinesUpsertWithWhereUniqueWithoutComponentInput = TsLinesUpsertWithWhereUniqueWithoutComponentInput;
