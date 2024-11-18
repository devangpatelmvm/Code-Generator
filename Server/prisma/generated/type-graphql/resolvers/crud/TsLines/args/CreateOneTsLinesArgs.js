"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTsLinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TsLinesCreateInput_1 = require("../../../inputs/TsLinesCreateInput");
let CreateOneTsLinesArgs = class CreateOneTsLinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesCreateInput_1.TsLinesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TsLinesCreateInput_1.TsLinesCreateInput)
], CreateOneTsLinesArgs.prototype, "data", void 0);
CreateOneTsLinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTsLinesArgs);
exports.CreateOneTsLinesArgs = CreateOneTsLinesArgs;
