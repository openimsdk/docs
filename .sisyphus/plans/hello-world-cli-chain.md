# Minimal CLI Hello World Workflow Demo

## TL;DR
> **Summary**: Demonstrate the smallest plausible OpenCode workflow for a trivial task: Prometheus creates this plan, `/start-work` launches a Sisyphus work session from it, and the executor runs a single shell command that prints `helloworld` to stdout.
> **Deliverables**:
> - A completed work session that runs exactly one stdout-producing command
> - Evidence files capturing stdout and the non-zero edge case
> - Parallel final verification review results
> **Effort**: Quick
> **Parallel**: NO
> **Critical Path**: 1 → F1/F2/F3/F4

## Context
### Original Request
Create a minimal calling-chain example for the task: output `helloworld` in the command line.

### Interview Summary
- The user challenged whether Prometheus, Sisyphus, and Hephaestus form a real chain.
- Confirmed evidence supports orchestration hints, not a proven universal runtime call graph.
- This plan therefore models a **minimal plausible workflow**, not a claim about internal implementation.
- The chosen planning location is `openimsdk-docs/.sisyphus/plans/` because it is the only verified `.sisyphus` directory in the workspace and its `plans/` subdirectory is empty.

### Metis Review (gaps addressed)
- Guardrail applied: do **not** expand this into a proof of actual runtime internals.
- Guardrail applied: treat this as a command-only demo with **no git commit**.
- Default applied: success evidence must include stdout content and shell exit code behavior.

## Work Objectives
### Core Objective
Produce a minimal executor-ready workflow that prints `helloworld` in a command-line session and captures machine-verifiable evidence.

### Deliverables
- `stdout` evidence showing exactly `helloworld`
- Failure-case evidence showing a non-zero exit and no false positive success claim
- Final review outputs from F1-F4

### Definition of Done (verifiable conditions with commands)
- Running `printf 'helloworld\n'` exits with code `0`.
- Captured stdout is exactly `helloworld` followed by a newline.
- The failure scenario uses `exit 1` and records a non-zero status.
- Evidence files exist at the exact paths defined in this plan.

### Must Have
- Single-command implementation path
- No source-code edits
- No dependency installation
- Evidence recorded under `.sisyphus/evidence/`
- Explicit statement that the workflow is a planning/execution demo, not proof of hidden orchestration internals

### Must NOT Have (guardrails, AI slop patterns, scope boundaries)
- Do not create a script file, program file, Makefile, test file, or README change for this task.
- Do not replace `printf` with a multi-step shell script unless Task 1 fails for environment-specific reasons.
- Do not add package managers, runtimes, containers, or CI steps.
- Do not claim that this plan proves a real internal `Prometheus -> Sisyphus -> Hephaestus` runtime chain.
- Do not create any git commit.

## Verification Strategy
> ZERO HUMAN INTERVENTION — all verification is agent-executed.
- Test decision: none + shell-command verification only
- QA policy: Every task has agent-executed scenarios
- Evidence: `.sisyphus/evidence/task-1-hello-world-cli.txt` and `.sisyphus/evidence/task-1-hello-world-cli-error.txt`

## Execution Strategy
### Parallel Execution Waves
> Target: 5-8 tasks per wave. <3 per wave (except final) = under-splitting.
> This is an intentional exception because the task is a single atomic shell action.

Wave 1: Task 1 (single command execution + evidence capture)
Wave 2: Final verification wave F1-F4 in parallel

### Dependency Matrix (full, all tasks)
- Task 1: no prerequisites
- F1: blocked by Task 1
- F2: blocked by Task 1
- F3: blocked by Task 1
- F4: blocked by Task 1

### Agent Dispatch Summary (wave → task count → categories)
- Wave 1 → 1 task → `quick`
- Wave 2 → 4 tasks → `oracle`, `unspecified-high`, `unspecified-high`, `deep`

## TODOs
> Implementation + Test = ONE task. Never separate.
> EVERY task MUST have: Agent Profile + Parallelization + QA Scenarios.

- [ ] 1. Run the minimal CLI command and capture evidence

  **What to do**: Start work from this plan, then execute exactly `printf 'helloworld\n'` from the repository root `/Users/openim/Work/openimsdk-docs`. Capture stdout to `.sisyphus/evidence/task-1-hello-world-cli.txt`. Separately execute `sh -c 'exit 1'` and capture its exit-status evidence to `.sisyphus/evidence/task-1-hello-world-cli-error.txt`. If stdout capture requires redirection, use a single shell invocation that preserves the exact printed bytes.
  **Must NOT do**: Do not create any intermediate script file. Do not use `echo` if it risks shell-specific escape behavior. Do not install tools. Do not edit tracked source files.

  **Recommended Agent Profile**:
  - Category: `quick` — Reason: single atomic shell task with no code changes
  - Skills: `[]` — no specialized skill required
  - Omitted: [`git-master`, `playwright`] — no git workflow or browser verification needed

  **Parallelization**: Can Parallel: NO | Wave 1 | Blocks: F1, F2, F3, F4 | Blocked By: none

  **References** (executor has NO interview context — be exhaustive):
  - Pattern: `/Users/openim/Work/openimsdk-docs/.sisyphus/plans/hello-world-cli-chain.md` — execute exactly the command and evidence policy defined in this plan
  - Pattern: `/Users/openim/Work/openimsdk-docs/.sisyphus` — verified existing planning root for this workspace
  - Pattern: `/Users/openim/Work/openimsdk-docs/.sisyphus/plans` — verified existing empty plans directory chosen for this trivial workflow demo
  - External: visible command metadata `/start-work` — starts a Sisyphus work session from a Prometheus plan; use it as the workflow entrypoint for this demo

  **Acceptance Criteria** (agent-executable only):
  - [ ] `pwd` during execution is `/Users/openim/Work/openimsdk-docs`
  - [ ] `printf 'helloworld\n'` exits with status `0`
  - [ ] Captured stdout content equals exactly `helloworld` plus one trailing newline
  - [ ] `.sisyphus/evidence/task-1-hello-world-cli.txt` exists and contains the successful output evidence
  - [ ] `sh -c 'exit 1'` returns non-zero
  - [ ] `.sisyphus/evidence/task-1-hello-world-cli-error.txt` exists and records the failure-case status

  **QA Scenarios** (MANDATORY — task incomplete without these):
  ```
  Scenario: Happy path
    Tool: Bash
    Steps: Run from `/Users/openim/Work/openimsdk-docs`: `printf 'helloworld\n' | tee .sisyphus/evidence/task-1-hello-world-cli.txt >/dev/null`; then validate the file content matches exactly `helloworld` with newline.
    Expected: Command exits 0; evidence file exists; stdout payload is exact with no extra prefix/suffix.
    Evidence: .sisyphus/evidence/task-1-hello-world-cli.txt

  Scenario: Failure/edge case
    Tool: Bash
    Steps: Run from `/Users/openim/Work/openimsdk-docs`: `sh -c 'exit 1'`; capture the non-zero status in `.sisyphus/evidence/task-1-hello-world-cli-error.txt` using a command that writes the observed exit code.
    Expected: Exit status is non-zero; no false success message is recorded; error evidence file exists.
    Evidence: .sisyphus/evidence/task-1-hello-world-cli-error.txt
  ```

  **Commit**: NO | Message: `n/a` | Files: none

## Final Verification Wave (MANDATORY — after ALL implementation tasks)
> 4 review agents run in PARALLEL. ALL must APPROVE. Present consolidated results to user and get explicit "okay" before completing.
> **Do NOT auto-proceed after verification. Wait for user's explicit approval before marking work complete.**
> **Never mark F1-F4 as checked before getting user's okay.** Rejection or user feedback -> fix -> re-run -> present again -> wait for okay.
- [ ] F1. Plan Compliance Audit — oracle
- [ ] F2. Code Quality Review — unspecified-high
- [ ] F3. Real Manual QA — unspecified-high
- [ ] F4. Scope Fidelity Check — deep

## Commit Strategy
- No commit is permitted for this task because the planned implementation does not require tracked file changes.
- If execution creates only `.sisyphus/evidence/*`, leave them uncommitted unless the user explicitly requests a documentation/evidence commit.

## Success Criteria
- The workflow can be described concretely as: Prometheus produced this plan; `/start-work` is the entry command for a Sisyphus work session; the executor performs one shell command that prints `helloworld`.
- The task completes without creating or editing source code.
- Evidence is binary and machine-checkable.
- No claim is made beyond the verified workflow metadata available in this environment.
