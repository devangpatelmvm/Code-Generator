"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersWhereInput_1 = require("../inputs/UsersWhereInput");
let UsersListRelationFilter = class UsersListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereInput_1.UsersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersWhereInput_1.UsersWhereInput)
], UsersListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereInput_1.UsersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersWhereInput_1.UsersWhereInput)
], UsersListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereInput_1.UsersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersWhereInput_1.UsersWhereInput)
], UsersListRelationFilter.prototype, "none", void 0);
UsersListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersListRelationFilter", {
        isAbstract: true
    })
], UsersListRelationFilter);
exports.UsersListRelationFilter = UsersListRelationFilter;
