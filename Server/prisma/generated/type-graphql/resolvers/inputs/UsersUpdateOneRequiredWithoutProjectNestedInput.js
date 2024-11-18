"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersUpdateOneRequiredWithoutProjectNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersCreateOrConnectWithoutProjectInput_1 = require("../inputs/UsersCreateOrConnectWithoutProjectInput");
const UsersCreateWithoutProjectInput_1 = require("../inputs/UsersCreateWithoutProjectInput");
const UsersUpdateWithoutProjectInput_1 = require("../inputs/UsersUpdateWithoutProjectInput");
const UsersUpsertWithoutProjectInput_1 = require("../inputs/UsersUpsertWithoutProjectInput");
const UsersWhereUniqueInput_1 = require("../inputs/UsersWhereUniqueInput");
let UsersUpdateOneRequiredWithoutProjectNestedInput = class UsersUpdateOneRequiredWithoutProjectNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersCreateWithoutProjectInput_1.UsersCreateWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersCreateWithoutProjectInput_1.UsersCreateWithoutProjectInput)
], UsersUpdateOneRequiredWithoutProjectNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutProjectInput_1.UsersCreateOrConnectWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersCreateOrConnectWithoutProjectInput_1.UsersCreateOrConnectWithoutProjectInput)
], UsersUpdateOneRequiredWithoutProjectNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersUpsertWithoutProjectInput_1.UsersUpsertWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersUpsertWithoutProjectInput_1.UsersUpsertWithoutProjectInput)
], UsersUpdateOneRequiredWithoutProjectNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereUniqueInput_1.UsersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersWhereUniqueInput_1.UsersWhereUniqueInput)
], UsersUpdateOneRequiredWithoutProjectNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersUpdateWithoutProjectInput_1.UsersUpdateWithoutProjectInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersUpdateWithoutProjectInput_1.UsersUpdateWithoutProjectInput)
], UsersUpdateOneRequiredWithoutProjectNestedInput.prototype, "update", void 0);
UsersUpdateOneRequiredWithoutProjectNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersUpdateOneRequiredWithoutProjectNestedInput", {
        isAbstract: true
    })
], UsersUpdateOneRequiredWithoutProjectNestedInput);
exports.UsersUpdateOneRequiredWithoutProjectNestedInput = UsersUpdateOneRequiredWithoutProjectNestedInput;
