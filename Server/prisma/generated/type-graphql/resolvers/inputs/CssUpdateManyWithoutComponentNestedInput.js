"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssUpdateManyWithoutComponentNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssCreateOrConnectWithoutComponentInput_1 = require("../inputs/CssCreateOrConnectWithoutComponentInput");
const CssCreateWithoutComponentInput_1 = require("../inputs/CssCreateWithoutComponentInput");
const CssScalarWhereInput_1 = require("../inputs/CssScalarWhereInput");
const CssUpdateManyWithWhereWithoutComponentInput_1 = require("../inputs/CssUpdateManyWithWhereWithoutComponentInput");
const CssUpdateWithWhereUniqueWithoutComponentInput_1 = require("../inputs/CssUpdateWithWhereUniqueWithoutComponentInput");
const CssUpsertWithWhereUniqueWithoutComponentInput_1 = require("../inputs/CssUpsertWithWhereUniqueWithoutComponentInput");
const CssWhereUniqueInput_1 = require("../inputs/CssWhereUniqueInput");
let CssUpdateManyWithoutComponentNestedInput = class CssUpdateManyWithoutComponentNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssCreateWithoutComponentInput_1.CssCreateWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CssUpdateManyWithoutComponentNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssCreateOrConnectWithoutComponentInput_1.CssCreateOrConnectWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CssUpdateManyWithoutComponentNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssUpsertWithWhereUniqueWithoutComponentInput_1.CssUpsertWithWhereUniqueWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CssUpdateManyWithoutComponentNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssWhereUniqueInput_1.CssWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CssUpdateManyWithoutComponentNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssWhereUniqueInput_1.CssWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CssUpdateManyWithoutComponentNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssWhereUniqueInput_1.CssWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CssUpdateManyWithoutComponentNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssWhereUniqueInput_1.CssWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CssUpdateManyWithoutComponentNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssUpdateWithWhereUniqueWithoutComponentInput_1.CssUpdateWithWhereUniqueWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CssUpdateManyWithoutComponentNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssUpdateManyWithWhereWithoutComponentInput_1.CssUpdateManyWithWhereWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CssUpdateManyWithoutComponentNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssScalarWhereInput_1.CssScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CssUpdateManyWithoutComponentNestedInput.prototype, "deleteMany", void 0);
CssUpdateManyWithoutComponentNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CssUpdateManyWithoutComponentNestedInput", {
        isAbstract: true
    })
], CssUpdateManyWithoutComponentNestedInput);
exports.CssUpdateManyWithoutComponentNestedInput = CssUpdateManyWithoutComponentNestedInput;
