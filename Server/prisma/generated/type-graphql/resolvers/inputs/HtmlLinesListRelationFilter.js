"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesWhereInput_1 = require("../inputs/HtmlLinesWhereInput");
let HtmlLinesListRelationFilter = class HtmlLinesListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesWhereInput_1.HtmlLinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesWhereInput_1.HtmlLinesWhereInput)
], HtmlLinesListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesWhereInput_1.HtmlLinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesWhereInput_1.HtmlLinesWhereInput)
], HtmlLinesListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesWhereInput_1.HtmlLinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesWhereInput_1.HtmlLinesWhereInput)
], HtmlLinesListRelationFilter.prototype, "none", void 0);
HtmlLinesListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesListRelationFilter", {
        isAbstract: true
    })
], HtmlLinesListRelationFilter);
exports.HtmlLinesListRelationFilter = HtmlLinesListRelationFilter;
