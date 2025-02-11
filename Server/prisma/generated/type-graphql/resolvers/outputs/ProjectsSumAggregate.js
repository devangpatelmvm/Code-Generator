"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProjectsSumAggregate = class ProjectsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProjectsSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProjectsSumAggregate.prototype, "userId", void 0);
ProjectsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProjectsSumAggregate", {
        isAbstract: true
    })
], ProjectsSumAggregate);
exports.ProjectsSumAggregate = ProjectsSumAggregate;
