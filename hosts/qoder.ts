import { defineHost } from './define-host';

const qoder = defineHost({
  name: 'qoder',
  displayName: 'Qoder',
  cliCommand: 'qoder',

  globalRoot: '.qoder/skills/gstack',

  runtimeRoot: {
    globalSymlinks: ['bin', 'lib', 'browse/dist', 'browse/bin', 'design/dist', 'make-pdf/dist', 'gstack-upgrade', 'ETHOS.md', 'review/specialists', 'qa/templates', 'qa/references', 'plan-devex-review/dx-hall-of-fame.md'],
    globalFiles: {
      'review': ['checklist.md', 'design-checklist.md', 'greptile-triage.md', 'TODOS-format.md'],
    },
  },
});

export default qoder;
