import fs from "fs";
import sh from "shelljs";
import fse from 'fs-extra';
import config from '../../index'
class CreateProject {

  static readJsonContent = async (data: any, user: any) => {
    const value = data;
    // console.log("data==",value?.uiSelection?.pages[0].htmlContent);

    const pages = value?.uiSelection?.pages;
    const srcDir = process.cwd().toString() + "\\template\\sample"
    const destDir = process.cwd().toString() + "\\template\\" + value.projectName + "_" + user.first_name + "-" + user.id + "-" + Math.random();
    if (pages.length) {
      try {
        const isFolder = await CreateProject.createFolderCopy(srcDir, destDir);
        if (!isFolder) {
          throw new Error(isFolder)
        }
        const makeDir = destDir + "\\src"
        sh.cd(makeDir)
        const isDone = await CreateProject.installAngular(value, pages, makeDir);
        // console.log("isDone", isDone);
        const out = sh.cd(destDir)
        // console.log("out==",out);
        if (out.code == 0) {
          let check: any;
          await CreateProject.updatePackageJsonFile(destDir + '\\package.json', value).then((res) => {
            if (res)
              check = destDir
          }).catch((error) => {
            check = error
          });
          sh.cd('..')
          const output = sh.cd('..')
          if (output.code == 0) {
            return check
          }
        }
        else {
          throw new Error("Failed....")
        }

      } catch (error) {
        // console.log("error==", error);
      }
    }
  }

  static createFolderCopy = async (srcDir: string, destDir: string) => {
    if (!fs.existsSync(destDir)) {
      fse.copySync(srcDir, destDir, {
        overwrite: true
      })
    }
    else {
      return "Folder or file already exist"
    }

    return true
  }

  static installAngular = async (value: any, pages: string | any[], makeDir: string) => {
    const path = `${makeDir}/app`;
    await CreateProject.updateIndexHtmlFile('index.html', value.projectName).then()
    sh.cd(path);
    await CreateProject.writeFiles("app", path, value.projectName);
    await CreateProject.appRoutingModuleWrite(value.uiSelection.pages, path)

    try {
      for (var i = 0; i < pages.length; i++) {
        const genOut = await CreateProject.generateComponent(pages[i]);
        if (!genOut) {
          return false;
        }
        let componentPath = genOut;
        await CreateProject.writeFiles(pages[i], componentPath, value.projectName);
      }
      return true
    }
    catch (error) {
      // console.log("errrr==", error);
    }
  }

  static updateIndexHtmlFile = async (fileName: string, projectName: string) => {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, 'utf8', function (err, data) {
        var newValue = data.replace(/sample/gim, projectName);
        fs.writeFile(fileName, newValue, function (err) {
          if (err) {
            reject(err)
          }
          resolve(newValue)
        });
      });
    })
  }

  static updatePackageJsonFile = async (fileName: string, projectData: any) => {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, 'utf8', function (err, data) {
        var newValue = JSON.parse(data);
        newValue.name = projectData.projectName;
        for (let i = 0; i < projectData.uiSelection.packages.length; i++) {
          const element = projectData.uiSelection.packages[i];
          newValue.dependencies[`${element.name}`] = `${element.version}`
        }
        let newData = JSON.stringify(newValue).replace(/,/g, ",\n");
        fs.writeFile(fileName, newData, function (err) {
          if (err) {
            reject(err)
          }
          resolve(newData)
        });
      });
    })
  }

  static writeFiles = async (page: any, componentPath: string, projectName: string) => {
    try {
      if (componentPath) {
        if (page != 'app') {
          const html = page?.htmlContent
          const css = page?.cssContent
          const ts = page?.tsContent
          var htmlData = '';
          var cssData = '';
          var tsData = '';
          for (let i = 0; i < html.length; i++) {
            const element = html[i];
            htmlData = htmlData.concat('\n', element.line)
          }
          for (let i = 0; i < css.length; i++) {
            const element = css[i];
            cssData = cssData.concat('\n', element.content)
          }
          for (let i = 0; i < ts.length; i++) {
            // console.log("ts.length;==",ts.length);
            const element = ts[i];
            tsData = tsData.concat('\n', element.line)
          }
        }
        else {
          htmlData = 'app';
          cssData = 'app';
          tsData = 'app';
        }

        if (htmlData) {
          await CreateProject.htmlWrite(htmlData, componentPath)
            .then()
            .catch((err) => err);
        }
        if (cssData) {
          await CreateProject.cssWrite(cssData, componentPath)
            .then()
            .catch((err) => err);
        }
        if (tsData) {
          await CreateProject.tsWrite(tsData, componentPath, projectName)
            .then()
            .catch((err) => err);
        }
      }
    } catch (error) {
      // console.log("err===", error);
    }
  };

  static htmlWrite = async (data: string, componentPath: string) => {
    const newFile = sh
      .ls(componentPath)
      .filter((file: string | string[]) => file.includes("html"))[0];
    const path = componentPath + "\\" + newFile;

    if (data == "app") {
      // await writeFile(path, "");
    } else {
      await CreateProject.writeFile(path, data);
    }
  }

  static cssWrite = async (data: string, componentPath: string) => {
    const newFile = sh
      .ls(componentPath)
      .filter((file: string | string[]) => file.includes("css"))[0];
    const path = componentPath + "\\" + newFile;

    if (data == "app") {
      await CreateProject.writeFile(path, "");
    } else {
      let newData = data.replace(/}/g, "}\n");
      await CreateProject.writeFile(path, newData);
    }
  }

  static tsWrite = async (data: string, componentPath: string, projectName: string) => {
    const newFile = sh
      .ls(componentPath)
      .filter((file: string | string[]) => file.includes("component.ts"))[0];
    const path = componentPath + "\\" + newFile;
    if (data == "app") {
      await CreateProject.updateIndexHtmlFile(path, projectName)

    } else {

      await CreateProject.writeFile(path, data, 'ts');

    }
  }

  static writeFile = async (path: any, data: string, type = '') => {
    return new Promise(async (reject, resolve) => {
      if (type == 'ts') {
        await CreateProject.writeTSFile(data, path)
      }
      else {
        fs.writeFile(path, data, (err) => {
          if (err) {
            // console.log("write err==", err);
            reject(err)
          }

        });
      }
      resolve(data);

    });
  };


  static writeTSFile = async (content: any, path: any) => {

    const fileData = fs.readFileSync(path, { encoding: "utf8" },);

    const fileDataArray = fileData.split("\n");
  
    for (let i = 0; i < fileDataArray.length; i++) {
      fileDataArray[i] = fileDataArray[i].trim();

    }
    const findIndex = fileDataArray.indexOf('ngOnInit(): void {');
     const index = findIndex + 1; // after each row to insert your data
 
    if (fileDataArray[index] == '}')

      fileDataArray.splice(index + 2, 0, content); // insert data into the array

    const newFileData = fileDataArray.join("\n"); // create the new file
    // console.log("newFileData==",newFileData);

    fs.writeFileSync(path, newFileData, { encoding: "utf8" });

  };

  static appRoutingModuleWrite = async (data: any, path: String) => {
    await CreateProject.writeRoutingRoutesFile(data, path)
    await CreateProject.writeRoutingImportFile(data, path)
  }


  static writeRoutingImportFile = async (content: any, path: any) => {

    const newFile = sh
      .ls(path)
      .filter((file: string | string[]) => file.includes("app-routing.module.ts"))[0];
    let newData = ''
    const fileData = fs.readFileSync(newFile, { encoding: "utf8" },);

    const fileDataArray = fileData.split("\n");
    for (let i = 0; i < content.length; i++) {
      const element = content[i];

      const componentName = element.componentName.toString().charAt(0).toUpperCase() + element.componentName.toString().slice(1) + 'Component'
      let pattern = "import  { " + componentName + "  } from './" + element.componentName + "/" + element.componentName + ".component';";
      newData = newData.concat("\n", pattern);
    }

    const index = 2; // after each row to insert your data

    fileDataArray.splice(index, 0, newData); // insert data into the array

    const newFileData = fileDataArray.join("\n"); // create the new file

    fs.writeFileSync(newFile, newFileData, { encoding: "utf8" });

  };

  static writeRoutingRoutesFile = async (content: any, path: any) => {

    const newFile = sh
      .ls(path)
      .filter((file: string | string[]) => file.includes("app-routing.module.ts"))[0];
    let newpath = '';
    let pathroute = '';
    const fileData = fs.readFileSync(newFile, { encoding: "utf8" });

    const fileDataArray = fileData.split("\n");

    for (let i = 0; i < content.length; i++) {
      const element = content[i];
      const componentName = element.componentName.toString().charAt(0).toUpperCase() + element.componentName.toString().slice(1) + 'Component'
      if (element.componentName.toString().toLowerCase() !== 'home') {
        // console.log("false");

        pathroute = "{ path:'" + element.componentName.toString() + "', component:" + componentName + " },";
      }
      else {
        pathroute = "{ path:'', component:" + componentName + " , redirectTo: '"+ element.componentName.toString().toLowerCase()+"', pathMatch: 'full'},";
      }
      newpath = newpath.concat("\n", pathroute)
    }

    let newData = "const routes: Routes = [" + newpath + "\n]"

    if (fileDataArray.indexOf('const routes: Routes = [];')) {

      const index = fileDataArray.indexOf('const routes: Routes = [];'); // after each row to insert your data
      fileDataArray.splice(index, 1); // insert data into the array
      fileDataArray.splice(index, 0, newData); // insert data into the array

    }

    const newFileData = fileDataArray.join("\n"); // create the new file

    fs.writeFileSync(newFile, newFileData, { encoding: "utf8" });

  }

  static generateComponent = async (page: { componentName: string; }) => {

    if (page.componentName) {
      const out = sh.exec(
        `ng generate component ${page.componentName.toString().toLowerCase()}`
      );
      if (out.code) {
        return false;
      }
      let generatedComponentName =
        process.cwd().toString() +
        "\\" +
        page.componentName.toLowerCase().split(".component")[0];
      return generatedComponentName;
    }
  };

}
export default CreateProject;