"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsUpsertWithWhereUniqueWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsCreateWithoutTableInput_1 = require("../inputs/ColumnsCreateWithoutTableInput");
const ColumnsUpdateWithoutTableInput_1 = require("../inputs/ColumnsUpdateWithoutTableInput");
const ColumnsWhereUniqueInput_1 = require("../inputs/ColumnsWhereUniqueInput");
let ColumnsUpsertWithWhereUniqueWithoutTableInput = class ColumnsUpsertWithWhereUniqueWithoutTableInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput)
], ColumnsUpsertWithWhereUniqueWithoutTableInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsUpdateWithoutTableInput_1.ColumnsUpdateWithoutTableInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColumnsUpdateWithoutTableInput_1.ColumnsUpdateWithoutTableInput)
], ColumnsUpsertWithWhereUniqueWithoutTableInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsCreateWithoutTableInput_1.ColumnsCreateWithoutTableInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColumnsCreateWithoutTableInput_1.ColumnsCreateWithoutTableInput)
], ColumnsUpsertWithWhereUniqueWithoutTableInput.prototype, "create", void 0);
ColumnsUpsertWithWhereUniqueWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsUpsertWithWhereUniqueWithoutTableInput", {
        isAbstract: true
    })
], ColumnsUpsertWithWhereUniqueWithoutTableInput);
exports.ColumnsUpsertWithWhereUniqueWithoutTableInput = ColumnsUpsertWithWhereUniqueWithoutTableInput;
