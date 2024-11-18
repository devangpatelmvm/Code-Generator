"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TablesSumAggregate = class TablesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TablesSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TablesSumAggregate.prototype, "projectId", void 0);
TablesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TablesSumAggregate", {
        isAbstract: true
    })
], TablesSumAggregate);
exports.TablesSumAggregate = TablesSumAggregate;
