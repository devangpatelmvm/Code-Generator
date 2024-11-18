"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssUpsertWithWhereUniqueWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssCreateWithoutComponentInput_1 = require("../inputs/CssCreateWithoutComponentInput");
const CssUpdateWithoutComponentInput_1 = require("../inputs/CssUpdateWithoutComponentInput");
const CssWhereUniqueInput_1 = require("../inputs/CssWhereUniqueInput");
let CssUpsertWithWhereUniqueWithoutComponentInput = class CssUpsertWithWhereUniqueWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssWhereUniqueInput_1.CssWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CssWhereUniqueInput_1.CssWhereUniqueInput)
], CssUpsertWithWhereUniqueWithoutComponentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssUpdateWithoutComponentInput_1.CssUpdateWithoutComponentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CssUpdateWithoutComponentInput_1.CssUpdateWithoutComponentInput)
], CssUpsertWithWhereUniqueWithoutComponentInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssCreateWithoutComponentInput_1.CssCreateWithoutComponentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CssCreateWithoutComponentInput_1.CssCreateWithoutComponentInput)
], CssUpsertWithWhereUniqueWithoutComponentInput.prototype, "create", void 0);
CssUpsertWithWhereUniqueWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CssUpsertWithWhereUniqueWithoutComponentInput", {
        isAbstract: true
    })
], CssUpsertWithWhereUniqueWithoutComponentInput);
exports.CssUpsertWithWhereUniqueWithoutComponentInput = CssUpsertWithWhereUniqueWithoutComponentInput;
