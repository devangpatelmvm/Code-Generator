"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsUpdateWithWhereUniqueWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsUpdateWithoutTableInput_1 = require("../inputs/ColumnsUpdateWithoutTableInput");
const ColumnsWhereUniqueInput_1 = require("../inputs/ColumnsWhereUniqueInput");
let ColumnsUpdateWithWhereUniqueWithoutTableInput = class ColumnsUpdateWithWhereUniqueWithoutTableInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput)
], ColumnsUpdateWithWhereUniqueWithoutTableInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsUpdateWithoutTableInput_1.ColumnsUpdateWithoutTableInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColumnsUpdateWithoutTableInput_1.ColumnsUpdateWithoutTableInput)
], ColumnsUpdateWithWhereUniqueWithoutTableInput.prototype, "data", void 0);
ColumnsUpdateWithWhereUniqueWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsUpdateWithWhereUniqueWithoutTableInput", {
        isAbstract: true
    })
], ColumnsUpdateWithWhereUniqueWithoutTableInput);
exports.ColumnsUpdateWithWhereUniqueWithoutTableInput = ColumnsUpdateWithWhereUniqueWithoutTableInput;
