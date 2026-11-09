import { defineHost, preambleToolGlossary, sharedRuntimeRoot } from './define-host';

// Kimi Code CLI (#2674). User skills are read from $KIMI_CODE_HOME/skills/
// (default ~/.kimi-code/skills/) and the shared ~/.agents/skills/; project
// skills from .kimi-code/skills/. Skills are directory-form SKILL.md files
// indexed by frontmatter name, so names match their gstack-<skill>
// directories. Native tools: AskUserQuestion, TodoList, Bash, Read, Write,
// Edit, Grep, Glob, Agent (subagents), plus a plan mode with no
// ExitPlanMode tool — approval is a UI transition.
const KIMI_TOOL_GLOSSARY = '**Kimi Code tool names:** `AskUserQuestion` is your native AskUserQuestion tool; the Bash, Read, Write, Edit, Grep, Glob and Agent tools keep these names. If a step says to call `ExitPlanMode`, tell the user the plan is ready and wait for their approval instead.';

const kimi = defineHost({
  name: 'kimi',
  displayName: 'Kimi Code',
  tier: 'experimental',
  capabilities: { toolExecution: true, questions: 'native', planMode: true, delegation: true, browser: true, safetyHooks: 'advisory' },

  globalRoot: '.kimi-code/skills/gstack',
  localSkillRoot: '.kimi-code/skills/gstack',
  hostSubdir: '.kimi-code',

  toolRewrites: preambleToolGlossary(KIMI_TOOL_GLOSSARY),

  frontmatter: {
    mode: 'allowlist',
    keepFields: ['name', 'description'],
    descriptionLimit: null,
    nameMatchesDirectory: true,
  },

  runtimeRoot: sharedRuntimeRoot(['qa/templates', 'qa/references']),
});

export default kimi;
