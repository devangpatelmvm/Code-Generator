import { PrismaClient } from "@prisma/client";
import PackageController from "./package.controller";
import ComponentController from "./component.controller";
import HtmlController from "./html.controller";
import CssController from "./css.controller";
import TsController from "./TS.controller";
import createProject from '../controller/test';
import AdmZip from 'adm-zip';
import UserService from "../services/user.service";
import ProjectService from "../services/project.service";

class ProjectController {

    static storeProjectDetails = async (req: any, res: any, next: any) => {

        try {
            // console.log("req.body===", req.body);
            const data = req.body;
            const id = req.user.id;
            // console.log("data==", data);

            const isUser = await UserService.getUserbyUserId(id);
            if (!data) {
                // console.log(data);
                throw new Error('Json is empty')
            }

            // let user = await UserController.createUser();

            console.log("isuser==", isUser);

            if (isUser) {
                const projectData = {
                    name: data.projectName,
                    description: data.description,
                    framework: data.uiSelection.framework,
                    provider: ' ',
                    url: '',
                    userId: isUser.id
                }

                const storeProjectData = await ProjectService.createProject(projectData);
                // console.log("storeProjectData-", storeProjectData);

                if (storeProjectData) {

                    for (let i = 0; i < data.uiSelection.pages.length; i++) {
                        const element = data.uiSelection.pages[i];
                        const component = await ComponentController.createComponent(element, storeProjectData.id).then();
                        // console.log("component==", component);

                        if (component) {
                            await this.writeHtml(element, component.id)
                            await this.writeTs(element, component.id)
                            await this.writeCss(element, component.id)

                        }
                    }


                    for (let j = 0; j < data.packages.length; j++) {
                        const element = data.packages[j];
                        const storePackages = await PackageController.createPackages(element, storeProjectData.id)
                    }

                    res.json({ status: true, message: "Stored successfully", data: { projectId: storeProjectData.id, projectName: storeProjectData.name, userId: isUser.id } })

                    next()
                }
            }


        } catch (error) {
            // console.log("error===", error);

        }
    }


    static writeHtml = async (element: any, id: number) => {

        for (let j = 0; j < element.htmlContent.length; j++) {
            // console.log("element.htmlContent==", element.htmlContent[j]);
            const htmlLine = element.htmlContent[j];
            await HtmlController.insertIntoHtmlLines(htmlLine, id).then()
        }
    }
    static writeTs = async (element: any, id: number) => {
        for (let k = 0; k < element.tsContent.length; k++) {
            const tsLine = element.tsContent[k];
            await TsController.insertIntoTsLines(tsLine, id).then()
        }
    }
    static writeCss = async (element: any, id: number) => {

        for (let l = 0; l < element.cssContent.length; l++) {
            const cssLine = element.cssContent[l];
            await CssController.insertIntoCss(cssLine, id).then()
        }
    }


    static getProjectDetails = async (req: any, res: any, next: any) => {
        try {
            let jsonData = [];
            const data = req.body;
            const id = req.user.id;

            if (!data.id || !data.projectId) {
                return res.status(400).json({
                    status: false,
                    message: " Parameters Missing",
                });
            }
            const isUser = await UserService.getUserbyUserId(id);
            const isProject = await ProjectService.getProjectByProjectId(data.projectId, id)
            if (!isUser) {
                return res.status(400).json({
                    status: false,
                    message: `User with ${data.id} doesn't exist`,
                });
            }
            if (!isProject) {
                return res.status(400).json({
                    status: false,
                    message: `Project not available`,
                });
            }

            const components = await ComponentController.getComponents(isProject.id);
            const packages = await PackageController.getPackages(isProject.id);
            const packagesArray: { name: any; version: any; }[] = [];
            for (let i = 0; i < packages.length; i++) {
                packagesArray.push({
                    name: packages[i].name,
                    version: packages[i].version
                })
            }
            // console.log("packagesArray==", packagesArray);

            if (components) {
                const pages = []
                for (let i = 0; i < components.length; i++) {
                    const getHtml = await HtmlController.getHtmlContent(components[i].id)
                    const getTs = await TsController.getTsContent(components[i].id)
                    const getCss = await CssController.getCssContent(components[i].id)
                    pages.push({
                        componentName: components[i].name,
                        htmlContent: Object.values(getHtml),
                        tsContent: Object.values(getTs),
                        cssContent: Object.values(getCss)
                    })
                }

                jsonData.push({
                    projectName: isProject.name,
                    description: isProject.description,
                    uiSelection: {
                        frameWork: isProject.framework,
                        packages: packagesArray,
                        pages: pages
                    },
                    backendSelection: {
                        "environment": "node",
                        "otherDependencies": [
                            {
                                "name": "mysql"
                            },
                            {},
                            {}
                        ]
                    },

                    readMeContent: "jhsjcsj"
                })

                if (jsonData.length) {
                    const result = await createProject.readJsonContent(jsonData[0], isUser)

                    console.log("res===", result);
                    try {
                        if (!result) {
                            throw new Error("Failed to download")
                        }
                        var zip = new AdmZip();
                        zip.addLocalFolder(result?.toString())
                        var zipFileContents = zip.toBuffer()
                        const fileName = jsonData[0].projectName + "_" + isUser.first_name + "-" + isUser.id + '.zip';
                        const fileType = "application/zip";
                        res.writeHead(200, {
                            'Content-Disposition': `attachement;`,
                            "Content-Type": fileType
                        })

                        return res.end(zipFileContents)
                    } catch (error) {
                        // console.log((error));
                        next(error)
                    }
                }
            }
        } catch (error) {
            // console.log("error==", error);
            next(error)
        }
    }


    static getProjectByUserId = async (req: any, res: any, next: any) => {
        const projectData = await ProjectService.getProjectByUserId(req.body.userId)
        if (!projectData) {
            res.json({ status: false, message: `Project not found` })
        }
        // console.log("ProjectData===",projectData);

        res.json({ status: true, data: projectData })
    }
}

export default ProjectController


