"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTsLinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TsLinesWhereInput_1 = require("../../../inputs/TsLinesWhereInput");
let DeleteManyTsLinesArgs = class DeleteManyTsLinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesWhereInput_1.TsLinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesWhereInput_1.TsLinesWhereInput)
], DeleteManyTsLinesArgs.prototype, "where", void 0);
DeleteManyTsLinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTsLinesArgs);
exports.DeleteManyTsLinesArgs = DeleteManyTsLinesArgs;
