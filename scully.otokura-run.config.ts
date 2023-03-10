import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer'

import 'scully-plugin-esa';

export const config: ScullyConfig = {
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
