"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TsLinesWhereInput_1 = require("../inputs/TsLinesWhereInput");
let TsLinesListRelationFilter = class TsLinesListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesWhereInput_1.TsLinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesWhereInput_1.TsLinesWhereInput)
], TsLinesListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesWhereInput_1.TsLinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesWhereInput_1.TsLinesWhereInput)
], TsLinesListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesWhereInput_1.TsLinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesWhereInput_1.TsLinesWhereInput)
], TsLinesListRelationFilter.prototype, "none", void 0);
TsLinesListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesListRelationFilter", {
        isAbstract: true
    })
], TsLinesListRelationFilter);
exports.TsLinesListRelationFilter = TsLinesListRelationFilter;
