"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let User_rolesSumAggregate = class User_rolesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], User_rolesSumAggregate.prototype, "id", void 0);
User_rolesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("User_rolesSumAggregate", {
        isAbstract: true
    })
], User_rolesSumAggregate);
exports.User_rolesSumAggregate = User_rolesSumAggregate;
