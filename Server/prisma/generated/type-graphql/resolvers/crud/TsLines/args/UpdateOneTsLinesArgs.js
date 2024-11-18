"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTsLinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TsLinesUpdateInput_1 = require("../../../inputs/TsLinesUpdateInput");
const TsLinesWhereUniqueInput_1 = require("../../../inputs/TsLinesWhereUniqueInput");
let UpdateOneTsLinesArgs = class UpdateOneTsLinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesUpdateInput_1.TsLinesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TsLinesUpdateInput_1.TsLinesUpdateInput)
], UpdateOneTsLinesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput)
], UpdateOneTsLinesArgs.prototype, "where", void 0);
UpdateOneTsLinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTsLinesArgs);
exports.UpdateOneTsLinesArgs = UpdateOneTsLinesArgs;
