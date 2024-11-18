"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesUpdateManyWithWhereWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TsLinesScalarWhereInput_1 = require("../inputs/TsLinesScalarWhereInput");
const TsLinesUpdateManyMutationInput_1 = require("../inputs/TsLinesUpdateManyMutationInput");
let TsLinesUpdateManyWithWhereWithoutComponentInput = class TsLinesUpdateManyWithWhereWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesScalarWhereInput_1.TsLinesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TsLinesScalarWhereInput_1.TsLinesScalarWhereInput)
], TsLinesUpdateManyWithWhereWithoutComponentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesUpdateManyMutationInput_1.TsLinesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TsLinesUpdateManyMutationInput_1.TsLinesUpdateManyMutationInput)
], TsLinesUpdateManyWithWhereWithoutComponentInput.prototype, "data", void 0);
TsLinesUpdateManyWithWhereWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesUpdateManyWithWhereWithoutComponentInput", {
        isAbstract: true
    })
], TsLinesUpdateManyWithWhereWithoutComponentInput);
exports.TsLinesUpdateManyWithWhereWithoutComponentInput = TsLinesUpdateManyWithWhereWithoutComponentInput;
