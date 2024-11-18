"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersUpdateManyWithoutUser_rolesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersCreateOrConnectWithoutUser_rolesInput_1 = require("../inputs/UsersCreateOrConnectWithoutUser_rolesInput");
const UsersCreateWithoutUser_rolesInput_1 = require("../inputs/UsersCreateWithoutUser_rolesInput");
const UsersScalarWhereInput_1 = require("../inputs/UsersScalarWhereInput");
const UsersUpdateManyWithWhereWithoutUser_rolesInput_1 = require("../inputs/UsersUpdateManyWithWhereWithoutUser_rolesInput");
const UsersUpdateWithWhereUniqueWithoutUser_rolesInput_1 = require("../inputs/UsersUpdateWithWhereUniqueWithoutUser_rolesInput");
const UsersUpsertWithWhereUniqueWithoutUser_rolesInput_1 = require("../inputs/UsersUpsertWithWhereUniqueWithoutUser_rolesInput");
const UsersWhereUniqueInput_1 = require("../inputs/UsersWhereUniqueInput");
let UsersUpdateManyWithoutUser_rolesNestedInput = class UsersUpdateManyWithoutUser_rolesNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersCreateWithoutUser_rolesInput_1.UsersCreateWithoutUser_rolesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersUpdateManyWithoutUser_rolesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersCreateOrConnectWithoutUser_rolesInput_1.UsersCreateOrConnectWithoutUser_rolesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersUpdateManyWithoutUser_rolesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersUpsertWithWhereUniqueWithoutUser_rolesInput_1.UsersUpsertWithWhereUniqueWithoutUser_rolesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersUpdateManyWithoutUser_rolesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersWhereUniqueInput_1.UsersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersUpdateManyWithoutUser_rolesNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersWhereUniqueInput_1.UsersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersUpdateManyWithoutUser_rolesNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersWhereUniqueInput_1.UsersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersUpdateManyWithoutUser_rolesNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersWhereUniqueInput_1.UsersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersUpdateManyWithoutUser_rolesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersUpdateWithWhereUniqueWithoutUser_rolesInput_1.UsersUpdateWithWhereUniqueWithoutUser_rolesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersUpdateManyWithoutUser_rolesNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersUpdateManyWithWhereWithoutUser_rolesInput_1.UsersUpdateManyWithWhereWithoutUser_rolesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersUpdateManyWithoutUser_rolesNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersScalarWhereInput_1.UsersScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersUpdateManyWithoutUser_rolesNestedInput.prototype, "deleteMany", void 0);
UsersUpdateManyWithoutUser_rolesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersUpdateManyWithoutUser_rolesNestedInput", {
        isAbstract: true
    })
], UsersUpdateManyWithoutUser_rolesNestedInput);
exports.UsersUpdateManyWithoutUser_rolesNestedInput = UsersUpdateManyWithoutUser_rolesNestedInput;
