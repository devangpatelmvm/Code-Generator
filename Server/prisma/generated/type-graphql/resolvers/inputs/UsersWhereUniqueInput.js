"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UsersWhereUniqueInput = class UsersWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UsersWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersWhereUniqueInput.prototype, "email", void 0);
UsersWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersWhereUniqueInput", {
        isAbstract: true
    })
], UsersWhereUniqueInput);
exports.UsersWhereUniqueInput = UsersWhereUniqueInput;
