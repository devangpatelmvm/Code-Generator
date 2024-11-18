"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCreateOrConnectWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersCreateWithoutProjectInput_1 = require("../inputs/UsersCreateWithoutProjectInput");
const UsersWhereUniqueInput_1 = require("../inputs/UsersWhereUniqueInput");
let UsersCreateOrConnectWithoutProjectInput = class UsersCreateOrConnectWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereUniqueInput_1.UsersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersWhereUniqueInput_1.UsersWhereUniqueInput)
], UsersCreateOrConnectWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersCreateWithoutProjectInput_1.UsersCreateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersCreateWithoutProjectInput_1.UsersCreateWithoutProjectInput)
], UsersCreateOrConnectWithoutProjectInput.prototype, "create", void 0);
UsersCreateOrConnectWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersCreateOrConnectWithoutProjectInput", {
        isAbstract: true
    })
], UsersCreateOrConnectWithoutProjectInput);
exports.UsersCreateOrConnectWithoutProjectInput = UsersCreateOrConnectWithoutProjectInput;
