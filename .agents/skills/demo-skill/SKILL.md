---
name: demo-skill
description: Use this skill when the user needs a simple demo skill scaffold for Codex, including basic instructions, response style, and a minimal workflow that can be adapted for a real project.
---

# Demo Skill

This is a minimal example skill for Codex.

## Purpose

Use this skill when you need to:

- create a starter skill structure;
- test that local skills are loading correctly;
- adapt a small example into a project-specific workflow.

## Workflow

1. Read the user's request carefully and identify the concrete outcome.
2. Check whether the repository already contains related files, conventions, or naming patterns.
3. Make the smallest useful change that solves the task.
4. Verify the result with a quick local check when possible.
5. Summarize what changed and mention any assumptions.

## Style

- Keep responses concise and practical.
- Prefer editing existing files over adding extra files unless they are needed.
- Match the tone and structure already used in the project.
- Avoid overengineering for simple requests.

## Notes

- If the task is ambiguous, make a reasonable default assumption and state it after completing the work.
- If the task is risky or could change behavior significantly, pause and ask the user before proceeding.
