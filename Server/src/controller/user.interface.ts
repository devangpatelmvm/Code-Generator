export interface JsonData {
    projectName: string,
    description: string,
    uiSelection: {
        framework: string,
        helper: [],
        pages: [
            {
                componentName: string,
                htmlContent: any,
                tsContent: any,
                cssContent: any
            }
        ]
    },
    packages: [{
        name: string,
        version: string
    }],
    backendSelection: {
        environment: string
        otherDependencies: [{ name: string }]
    },
    readMeContent: string
}
