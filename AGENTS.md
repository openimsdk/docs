# OpenIM Docs - Codex Agent Instructions

## Project Overview

This is the OpenIM documentation site built with Docusaurus. It supports two locales:
- **zh-Hans** (Chinese, default): Source files in `docs/`
- **en** (English): Translated files in `i18n/en/`

## Translation Task

When asked to translate documentation, follow the rules below.

### Path Mapping

| Source (Chinese) | Target (English) |
|-----------------|------------------|
| `docs/sdks/` | `i18n/en/docusaurus-plugin-content-docs-sdks/current/` |
| `docs/guides/` | `i18n/en/docusaurus-plugin-content-docs-guides/current/` |
| `docs/restapi/` | `i18n/en/docusaurus-plugin-content-docs-restapi/current/` |
| `docs/blog/` | `i18n/en/docusaurus-plugin-content-docs-blog/current/` |

### Translation Rules

1. **Keep unchanged**:
   - All code blocks (` ``` `) content
   - Frontmatter keys (only translate Chinese values like `title`, `description`)
   - JSX/MDX component tags (`<Tabs>`, `<TabItem>`, etc.)
   - Markdown link paths and URLs
   - Variable names, function names, class names
   - Import statements

2. **Translate**:
   - All Chinese text content to natural English
   - Table headers and cell content (Chinese → English)
   - Section headings (e.g., `## 功能介绍` → `## Description`)
   - Inline comments in code examples (Chinese → English)

3. **Common translations** (keep consistent across all files):
   - 功能介绍 → Description
   - 返回原型 → Return Prototype
   - 返回结果 → Return Results
   - 调用示例 → Call Example
   - 名称 → Name
   - 类型 → Type
   - 描述 → Description

### Sidebar Labels

Sidebar category labels for each docs plugin are translated in **two places**:

1. **`_category_.json`** files in the corresponding `i18n/en/` directory
2. **`current.json`** files at `i18n/en/docusaurus-plugin-content-docs-*/current.json`

For `current.json`:
- The **key** stays the same (may contain Chinese category name as identifier)
- Only the **`message`** field should be translated to English
- The **`description`** field should also be updated to reflect the English label

Example:
```json
{
  "sidebar.tutorialSidebar.category.用户管理": {
    "message": "User Management",
    "description": "The label for category 'User Management' in sidebar 'tutorialSidebar'"
  }
}
```

### New Category Handling

If a new `_category_.json` is added in the source `docs/` directory:
1. Create the corresponding `_category_.json` in `i18n/en/` with translated `label`
2. Run `npx docusaurus write-translations --locale en` to regenerate `current.json`
3. Translate any new Chinese entries in `current.json`

## Verification

After translating, verify:
1. No Chinese characters remain in translated `message` values
2. Build succeeds: `pnpm build`
