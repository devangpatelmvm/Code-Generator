"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesUpdateOneWithoutUsersNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_rolesCreateOrConnectWithoutUsersInput_1 = require("../inputs/User_rolesCreateOrConnectWithoutUsersInput");
const User_rolesCreateWithoutUsersInput_1 = require("../inputs/User_rolesCreateWithoutUsersInput");
const User_rolesUpdateWithoutUsersInput_1 = require("../inputs/User_rolesUpdateWithoutUsersInput");
const User_rolesUpsertWithoutUsersInput_1 = require("../inputs/User_rolesUpsertWithoutUsersInput");
const User_rolesWhereUniqueInput_1 = require("../inputs/User_rolesWhereUniqueInput");
let User_rolesUpdateOneWithoutUsersNestedInput = class User_rolesUpdateOneWithoutUsersNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesCreateWithoutUsersInput_1.User_rolesCreateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesCreateWithoutUsersInput_1.User_rolesCreateWithoutUsersInput)
], User_rolesUpdateOneWithoutUsersNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesCreateOrConnectWithoutUsersInput_1.User_rolesCreateOrConnectWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesCreateOrConnectWithoutUsersInput_1.User_rolesCreateOrConnectWithoutUsersInput)
], User_rolesUpdateOneWithoutUsersNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesUpsertWithoutUsersInput_1.User_rolesUpsertWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesUpsertWithoutUsersInput_1.User_rolesUpsertWithoutUsersInput)
], User_rolesUpdateOneWithoutUsersNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], User_rolesUpdateOneWithoutUsersNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], User_rolesUpdateOneWithoutUsersNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesWhereUniqueInput_1.User_rolesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesWhereUniqueInput_1.User_rolesWhereUniqueInput)
], User_rolesUpdateOneWithoutUsersNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesUpdateWithoutUsersInput_1.User_rolesUpdateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesUpdateWithoutUsersInput_1.User_rolesUpdateWithoutUsersInput)
], User_rolesUpdateOneWithoutUsersNestedInput.prototype, "update", void 0);
User_rolesUpdateOneWithoutUsersNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("User_rolesUpdateOneWithoutUsersNestedInput", {
        isAbstract: true
    })
], User_rolesUpdateOneWithoutUsersNestedInput);
exports.User_rolesUpdateOneWithoutUsersNestedInput = User_rolesUpdateOneWithoutUsersNestedInput;
