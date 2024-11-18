"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsUpdateManyWithoutTableNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsCreateOrConnectWithoutTableInput_1 = require("../inputs/ColumnsCreateOrConnectWithoutTableInput");
const ColumnsCreateWithoutTableInput_1 = require("../inputs/ColumnsCreateWithoutTableInput");
const ColumnsScalarWhereInput_1 = require("../inputs/ColumnsScalarWhereInput");
const ColumnsUpdateManyWithWhereWithoutTableInput_1 = require("../inputs/ColumnsUpdateManyWithWhereWithoutTableInput");
const ColumnsUpdateWithWhereUniqueWithoutTableInput_1 = require("../inputs/ColumnsUpdateWithWhereUniqueWithoutTableInput");
const ColumnsUpsertWithWhereUniqueWithoutTableInput_1 = require("../inputs/ColumnsUpsertWithWhereUniqueWithoutTableInput");
const ColumnsWhereUniqueInput_1 = require("../inputs/ColumnsWhereUniqueInput");
let ColumnsUpdateManyWithoutTableNestedInput = class ColumnsUpdateManyWithoutTableNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsCreateWithoutTableInput_1.ColumnsCreateWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColumnsUpdateManyWithoutTableNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsCreateOrConnectWithoutTableInput_1.ColumnsCreateOrConnectWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColumnsUpdateManyWithoutTableNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsUpsertWithWhereUniqueWithoutTableInput_1.ColumnsUpsertWithWhereUniqueWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColumnsUpdateManyWithoutTableNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColumnsUpdateManyWithoutTableNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColumnsUpdateManyWithoutTableNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColumnsUpdateManyWithoutTableNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColumnsUpdateManyWithoutTableNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsUpdateWithWhereUniqueWithoutTableInput_1.ColumnsUpdateWithWhereUniqueWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColumnsUpdateManyWithoutTableNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsUpdateManyWithWhereWithoutTableInput_1.ColumnsUpdateManyWithWhereWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColumnsUpdateManyWithoutTableNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsScalarWhereInput_1.ColumnsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColumnsUpdateManyWithoutTableNestedInput.prototype, "deleteMany", void 0);
ColumnsUpdateManyWithoutTableNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsUpdateManyWithoutTableNestedInput", {
        isAbstract: true
    })
], ColumnsUpdateManyWithoutTableNestedInput);
exports.ColumnsUpdateManyWithoutTableNestedInput = ColumnsUpdateManyWithoutTableNestedInput;
