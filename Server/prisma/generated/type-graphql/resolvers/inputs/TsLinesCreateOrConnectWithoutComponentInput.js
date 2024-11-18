"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesCreateOrConnectWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TsLinesCreateWithoutComponentInput_1 = require("../inputs/TsLinesCreateWithoutComponentInput");
const TsLinesWhereUniqueInput_1 = require("../inputs/TsLinesWhereUniqueInput");
let TsLinesCreateOrConnectWithoutComponentInput = class TsLinesCreateOrConnectWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput)
], TsLinesCreateOrConnectWithoutComponentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesCreateWithoutComponentInput_1.TsLinesCreateWithoutComponentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TsLinesCreateWithoutComponentInput_1.TsLinesCreateWithoutComponentInput)
], TsLinesCreateOrConnectWithoutComponentInput.prototype, "create", void 0);
TsLinesCreateOrConnectWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesCreateOrConnectWithoutComponentInput", {
        isAbstract: true
    })
], TsLinesCreateOrConnectWithoutComponentInput);
exports.TsLinesCreateOrConnectWithoutComponentInput = TsLinesCreateOrConnectWithoutComponentInput;
