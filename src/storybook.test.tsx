import path from 'path'

import initStoryshots from '@storybook/addon-storyshots'

// the required import from the @storybook/addon-storyshots-puppeteer addon
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

// function to customize the snapshot location
const getMatchOptions: any = ({ context: { fileName } }: any) => {
  // Generates a custom path based on the file name and the custom directory.
  const snapshotPath = path.join(path.dirname(fileName), 'storyshots')
  return { customSnapshotsDir: snapshotPath }
}

initStoryshots({
  // your own configuration
  test: imageSnapshot({
    // invoke the function above here
    getMatchOptions,
  }),
})
