"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesUpdateManyWithoutComponentNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesCreateOrConnectWithoutComponentInput_1 = require("../inputs/HtmlLinesCreateOrConnectWithoutComponentInput");
const HtmlLinesCreateWithoutComponentInput_1 = require("../inputs/HtmlLinesCreateWithoutComponentInput");
const HtmlLinesScalarWhereInput_1 = require("../inputs/HtmlLinesScalarWhereInput");
const HtmlLinesUpdateManyWithWhereWithoutComponentInput_1 = require("../inputs/HtmlLinesUpdateManyWithWhereWithoutComponentInput");
const HtmlLinesUpdateWithWhereUniqueWithoutComponentInput_1 = require("../inputs/HtmlLinesUpdateWithWhereUniqueWithoutComponentInput");
const HtmlLinesUpsertWithWhereUniqueWithoutComponentInput_1 = require("../inputs/HtmlLinesUpsertWithWhereUniqueWithoutComponentInput");
const HtmlLinesWhereUniqueInput_1 = require("../inputs/HtmlLinesWhereUniqueInput");
let HtmlLinesUpdateManyWithoutComponentNestedInput = class HtmlLinesUpdateManyWithoutComponentNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesCreateWithoutComponentInput_1.HtmlLinesCreateWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesUpdateManyWithoutComponentNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesCreateOrConnectWithoutComponentInput_1.HtmlLinesCreateOrConnectWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesUpdateManyWithoutComponentNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesUpsertWithWhereUniqueWithoutComponentInput_1.HtmlLinesUpsertWithWhereUniqueWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesUpdateManyWithoutComponentNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesUpdateManyWithoutComponentNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesUpdateManyWithoutComponentNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesUpdateManyWithoutComponentNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesWhereUniqueInput_1.HtmlLinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesUpdateManyWithoutComponentNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesUpdateWithWhereUniqueWithoutComponentInput_1.HtmlLinesUpdateWithWhereUniqueWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesUpdateManyWithoutComponentNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesUpdateManyWithWhereWithoutComponentInput_1.HtmlLinesUpdateManyWithWhereWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesUpdateManyWithoutComponentNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HtmlLinesScalarWhereInput_1.HtmlLinesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HtmlLinesUpdateManyWithoutComponentNestedInput.prototype, "deleteMany", void 0);
HtmlLinesUpdateManyWithoutComponentNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesUpdateManyWithoutComponentNestedInput", {
        isAbstract: true
    })
], HtmlLinesUpdateManyWithoutComponentNestedInput);
exports.HtmlLinesUpdateManyWithoutComponentNestedInput = HtmlLinesUpdateManyWithoutComponentNestedInput;
