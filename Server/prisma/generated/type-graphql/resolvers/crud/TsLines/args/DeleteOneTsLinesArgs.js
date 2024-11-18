"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTsLinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TsLinesWhereUniqueInput_1 = require("../../../inputs/TsLinesWhereUniqueInput");
let DeleteOneTsLinesArgs = class DeleteOneTsLinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput)
], DeleteOneTsLinesArgs.prototype, "where", void 0);
DeleteOneTsLinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTsLinesArgs);
exports.DeleteOneTsLinesArgs = DeleteOneTsLinesArgs;
