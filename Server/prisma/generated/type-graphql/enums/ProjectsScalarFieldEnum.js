"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ProjectsScalarFieldEnum;
(function (ProjectsScalarFieldEnum) {
    ProjectsScalarFieldEnum["id"] = "id";
    ProjectsScalarFieldEnum["description"] = "description";
    ProjectsScalarFieldEnum["name"] = "name";
    ProjectsScalarFieldEnum["provider"] = "provider";
    ProjectsScalarFieldEnum["url"] = "url";
    ProjectsScalarFieldEnum["framework"] = "framework";
    ProjectsScalarFieldEnum["userId"] = "userId";
})(ProjectsScalarFieldEnum = exports.ProjectsScalarFieldEnum || (exports.ProjectsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProjectsScalarFieldEnum, {
    name: "ProjectsScalarFieldEnum",
    description: undefined,
});
