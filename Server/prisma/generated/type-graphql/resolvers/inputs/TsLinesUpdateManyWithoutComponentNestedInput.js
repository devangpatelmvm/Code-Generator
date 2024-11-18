"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesUpdateManyWithoutComponentNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TsLinesCreateOrConnectWithoutComponentInput_1 = require("../inputs/TsLinesCreateOrConnectWithoutComponentInput");
const TsLinesCreateWithoutComponentInput_1 = require("../inputs/TsLinesCreateWithoutComponentInput");
const TsLinesScalarWhereInput_1 = require("../inputs/TsLinesScalarWhereInput");
const TsLinesUpdateManyWithWhereWithoutComponentInput_1 = require("../inputs/TsLinesUpdateManyWithWhereWithoutComponentInput");
const TsLinesUpdateWithWhereUniqueWithoutComponentInput_1 = require("../inputs/TsLinesUpdateWithWhereUniqueWithoutComponentInput");
const TsLinesUpsertWithWhereUniqueWithoutComponentInput_1 = require("../inputs/TsLinesUpsertWithWhereUniqueWithoutComponentInput");
const TsLinesWhereUniqueInput_1 = require("../inputs/TsLinesWhereUniqueInput");
let TsLinesUpdateManyWithoutComponentNestedInput = class TsLinesUpdateManyWithoutComponentNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesCreateWithoutComponentInput_1.TsLinesCreateWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TsLinesUpdateManyWithoutComponentNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesCreateOrConnectWithoutComponentInput_1.TsLinesCreateOrConnectWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TsLinesUpdateManyWithoutComponentNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesUpsertWithWhereUniqueWithoutComponentInput_1.TsLinesUpsertWithWhereUniqueWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TsLinesUpdateManyWithoutComponentNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TsLinesUpdateManyWithoutComponentNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TsLinesUpdateManyWithoutComponentNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TsLinesUpdateManyWithoutComponentNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesWhereUniqueInput_1.TsLinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TsLinesUpdateManyWithoutComponentNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesUpdateWithWhereUniqueWithoutComponentInput_1.TsLinesUpdateWithWhereUniqueWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TsLinesUpdateManyWithoutComponentNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesUpdateManyWithWhereWithoutComponentInput_1.TsLinesUpdateManyWithWhereWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TsLinesUpdateManyWithoutComponentNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TsLinesScalarWhereInput_1.TsLinesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TsLinesUpdateManyWithoutComponentNestedInput.prototype, "deleteMany", void 0);
TsLinesUpdateManyWithoutComponentNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesUpdateManyWithoutComponentNestedInput", {
        isAbstract: true
    })
], TsLinesUpdateManyWithoutComponentNestedInput);
exports.TsLinesUpdateManyWithoutComponentNestedInput = TsLinesUpdateManyWithoutComponentNestedInput;
