"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesCreateNestedManyWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TsLinesCreateOrConnectWithoutComponentInput_1 = require("../inputs/TsLinesCreateOrConnectWithoutComponentInput");
const TsLinesCreateWithoutComponentInput_1 = require("../inputs/TsLinesCreateWithoutComponentInput");
const TsLinesWhereUniqueInput_1 = require("../inputs/TsLinesWhereUniqueInput");
let TsLinesCreateNestedManyWithoutComponentInput = class TsLinesCreateNestedManyWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesCreateWithoutComponentInput_1.TsLinesCreateWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TsLinesCreateNestedManyWithoutComponentInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesCreateOrConnectWithoutComponentInput_1.TsLinesCreateOrConnectWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TsLinesCreateNestedManyWithoutComponentInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TsLinesCreateNestedManyWithoutComponentInput.prototype, "connect", void 0);
TsLinesCreateNestedManyWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesCreateNestedManyWithoutComponentInput", {
        isAbstract: true
    })
], TsLinesCreateNestedManyWithoutComponentInput);
exports.TsLinesCreateNestedManyWithoutComponentInput = TsLinesCreateNestedManyWithoutComponentInput;
