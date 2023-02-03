"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
/** this loads the default render plugin, remove when switching to something else. */
require("@scullyio/scully-plugin-puppeteer");
exports.config = {
    projectRoot: "./src",
    projectName: "otokura-run",
    reloadPort: 18081,
    // add spsModulePath when using de Scully Platform Server,
    outDir: './dist/static',
    routes: {
        '/blog/:slug': {
            type: 'contentFolder',
            slug: {
                folder: "./blog"
            }
        },
        '/': {
            type: 'default',
        },
    }
};
