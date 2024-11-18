"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersUpsertWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersCreateWithoutProjectInput_1 = require("../inputs/UsersCreateWithoutProjectInput");
const UsersUpdateWithoutProjectInput_1 = require("../inputs/UsersUpdateWithoutProjectInput");
let UsersUpsertWithoutProjectInput = class UsersUpsertWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersUpdateWithoutProjectInput_1.UsersUpdateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersUpdateWithoutProjectInput_1.UsersUpdateWithoutProjectInput)
], UsersUpsertWithoutProjectInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersCreateWithoutProjectInput_1.UsersCreateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersCreateWithoutProjectInput_1.UsersCreateWithoutProjectInput)
], UsersUpsertWithoutProjectInput.prototype, "create", void 0);
UsersUpsertWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersUpsertWithoutProjectInput", {
        isAbstract: true
    })
], UsersUpsertWithoutProjectInput);
exports.UsersUpsertWithoutProjectInput = UsersUpsertWithoutProjectInput;
