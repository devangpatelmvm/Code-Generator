"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTsLinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TsLinesUpdateManyMutationInput_1 = require("../../../inputs/TsLinesUpdateManyMutationInput");
const TsLinesWhereInput_1 = require("../../../inputs/TsLinesWhereInput");
let UpdateManyTsLinesArgs = class UpdateManyTsLinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesUpdateManyMutationInput_1.TsLinesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TsLinesUpdateManyMutationInput_1.TsLinesUpdateManyMutationInput)
], UpdateManyTsLinesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesWhereInput_1.TsLinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesWhereInput_1.TsLinesWhereInput)
], UpdateManyTsLinesArgs.prototype, "where", void 0);
UpdateManyTsLinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTsLinesArgs);
exports.UpdateManyTsLinesArgs = UpdateManyTsLinesArgs;
