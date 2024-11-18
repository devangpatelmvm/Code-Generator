"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersWhereInput_1 = require("../inputs/UsersWhereInput");
let UsersRelationFilter = class UsersRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereInput_1.UsersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersWhereInput_1.UsersWhereInput)
], UsersRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereInput_1.UsersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersWhereInput_1.UsersWhereInput)
], UsersRelationFilter.prototype, "isNot", void 0);
UsersRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersRelationFilter", {
        isAbstract: true
    })
], UsersRelationFilter);
exports.UsersRelationFilter = UsersRelationFilter;
