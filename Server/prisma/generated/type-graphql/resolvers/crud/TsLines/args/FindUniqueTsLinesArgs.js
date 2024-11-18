"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTsLinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TsLinesWhereUniqueInput_1 = require("../../../inputs/TsLinesWhereUniqueInput");
let FindUniqueTsLinesArgs = class FindUniqueTsLinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput)
], FindUniqueTsLinesArgs.prototype, "where", void 0);
FindUniqueTsLinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTsLinesArgs);
exports.FindUniqueTsLinesArgs = FindUniqueTsLinesArgs;
