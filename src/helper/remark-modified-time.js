// External Code Solution so I disabled all the eslint rule
import { execSync } from 'child_process';

// eslint-disable-next-line import/prefer-default-export
export function remarkModifiedTime() {
  // eslint-disable-next-line func-names
  return function (tree, file) {
    const filepath = file.history[0];
    const result = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`);
    // eslint-disable-next-line no-param-reassign
    file.data.astro.frontmatter.lastModified = result.toString();
  };
}
