"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesUpdateManyWithoutProjectNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesCreateOrConnectWithoutProjectInput_1 = require("../inputs/PackagesCreateOrConnectWithoutProjectInput");
const PackagesCreateWithoutProjectInput_1 = require("../inputs/PackagesCreateWithoutProjectInput");
const PackagesScalarWhereInput_1 = require("../inputs/PackagesScalarWhereInput");
const PackagesUpdateManyWithWhereWithoutProjectInput_1 = require("../inputs/PackagesUpdateManyWithWhereWithoutProjectInput");
const PackagesUpdateWithWhereUniqueWithoutProjectInput_1 = require("../inputs/PackagesUpdateWithWhereUniqueWithoutProjectInput");
const PackagesUpsertWithWhereUniqueWithoutProjectInput_1 = require("../inputs/PackagesUpsertWithWhereUniqueWithoutProjectInput");
const PackagesWhereUniqueInput_1 = require("../inputs/PackagesWhereUniqueInput");
let PackagesUpdateManyWithoutProjectNestedInput = class PackagesUpdateManyWithoutProjectNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesCreateWithoutProjectInput_1.PackagesCreateWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PackagesUpdateManyWithoutProjectNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesCreateOrConnectWithoutProjectInput_1.PackagesCreateOrConnectWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PackagesUpdateManyWithoutProjectNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesUpsertWithWhereUniqueWithoutProjectInput_1.PackagesUpsertWithWhereUniqueWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PackagesUpdateManyWithoutProjectNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesWhereUniqueInput_1.PackagesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PackagesUpdateManyWithoutProjectNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesWhereUniqueInput_1.PackagesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PackagesUpdateManyWithoutProjectNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesWhereUniqueInput_1.PackagesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PackagesUpdateManyWithoutProjectNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesWhereUniqueInput_1.PackagesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PackagesUpdateManyWithoutProjectNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesUpdateWithWhereUniqueWithoutProjectInput_1.PackagesUpdateWithWhereUniqueWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PackagesUpdateManyWithoutProjectNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesUpdateManyWithWhereWithoutProjectInput_1.PackagesUpdateManyWithWhereWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PackagesUpdateManyWithoutProjectNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesScalarWhereInput_1.PackagesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PackagesUpdateManyWithoutProjectNestedInput.prototype, "deleteMany", void 0);
PackagesUpdateManyWithoutProjectNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesUpdateManyWithoutProjectNestedInput", {
        isAbstract: true
    })
], PackagesUpdateManyWithoutProjectNestedInput);
exports.PackagesUpdateManyWithoutProjectNestedInput = PackagesUpdateManyWithoutProjectNestedInput;
