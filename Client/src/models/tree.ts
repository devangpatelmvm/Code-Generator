
export interface Tree {
    children?: any;
    name?: string;
    type?: any;
  }

  export interface projectDetails {
    projectName: string;
    uiModules: string;
    backendModules: string;
  }

  export interface createProject {
    projectName: string;
    framework: string;
    helper: string;
    database: string;
    backend?: string;
  }

  export interface createTables {
    projectId: any;
    tableName: string;
    description: string;
  }