"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TsLinesWhereUniqueInput = class TsLinesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TsLinesWhereUniqueInput.prototype, "id", void 0);
TsLinesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesWhereUniqueInput", {
        isAbstract: true
    })
], TsLinesWhereUniqueInput);
exports.TsLinesWhereUniqueInput = TsLinesWhereUniqueInput;
