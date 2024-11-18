"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TablesScalarFieldEnum;
(function (TablesScalarFieldEnum) {
    TablesScalarFieldEnum["id"] = "id";
    TablesScalarFieldEnum["name"] = "name";
    TablesScalarFieldEnum["projectId"] = "projectId";
})(TablesScalarFieldEnum = exports.TablesScalarFieldEnum || (exports.TablesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TablesScalarFieldEnum, {
    name: "TablesScalarFieldEnum",
    description: undefined,
});
