# Homepage hero design QA

## Source and implementation

- Source reference: `/var/folders/xx/zjxj2dw143xfd4xd1jf152b40000gn/T/codex-clipboard-40387acb-99a5-4ffa-b2e4-295b6e04d5e1.png`
- Source dimensions: 1448 × 1086 px
- Final light asset: `/Volumes/workspace/work/openim-chat-docs-next/public/brand/openimsdk-im-hero-light.png`
- Final dark asset: `/Volumes/workspace/work/openim-chat-docs-next/public/brand/openimsdk-im-hero-dark.png`
- Final asset dimensions: 1448 × 1086 px each
- Light implementation screenshot: `/tmp/openim-home-theme-light-final.png`
- Dark implementation screenshot: `/tmp/openim-home-theme-dark.png`
- Verification viewport: 761 × 830 px for the responsive theme-switch check; the 1280 × 720 px desktop composition was retained from the prior comparison
- Verified state: Chinese homepage in both light and dark themes

## Comparison

The source and implementation were reviewed together at full-view and focused-view scales. Both theme assets preserve the same hierarchy: a dominant desktop IM client, an overlapping mobile client, a theme-appropriate product backdrop, and restrained capability labels. The images fit the existing hero slot without cropping and keep the heading and primary actions visually dominant.

## Findings and iteration history

1. Replaced the compact code-drawn chat window with a high-fidelity product image so message content remains legible and the composition reads as a real cross-platform IM product.
2. Matched the source's desktop/phone overlap, three-column desktop layout, conversation density, shared file, image message, voice message, read receipts, and cross-device sync cues.
3. Removed potentially misleading terminology from the generated visual: `Groups & Channels` became `Group Chats`, and `End-to-End Encryption` became `Rich Messages`.
4. Replaced the lock beside `Rich Messages` with a layered image-and-text content-card icon so the label no longer implies encryption.
5. Added a dedicated dark image with dark desktop and mobile clients, dark capability cards, a deep navy backdrop, and preserved content and geometry. The implementation switches source assets with the site theme instead of applying a brightness filter.
6. Kept both images face-on, centered, and padded rather than using the previous perspective tilt, which better matches the supplied marketing reference.
7. Confirmed there are no visible clipping, overflow, alignment, contrast, hydration, console, or loading issues when switching between themes.

## Severity review

- P0: none
- P1: none
- P2: none
- P3: small interface labels intentionally become secondary at the homepage display size; the desktop/mobile composition and capability cues remain clear.

final result: passed
