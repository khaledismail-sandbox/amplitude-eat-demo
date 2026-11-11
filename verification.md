# Amplitude Eats verification — 11 November 2026

**Normal live journeys and native Replay dead/rage labels PASS. Standalone live recording remains unverified.**

Project: **904029 · Gen Demo App**, org **432322 · khaledismailtest**, **US**. Authenticated project settings confirmed the exact active browser key ending **edd9**. No project rename, settings change, historical upload, experiment mutation, publication or GitHub write was performed.

## Executed checks

| Check | Result | Evidence |
|---|---|---|
| Saved-address full journey | PASS | Five funnel events in order; two ASI-5555 bowls; 26.36 USD order; no unconfirmed/dead/rage custom signal |
| New-address abandonment | PASS | Five real Continue taps, attempt_number 1–5; dead pause >=3,100ms; one four-tap burst within 600ms; explicit Leave checkout |
| New-address recovery | PASS | Reproduced signals; Confirm map pin; payment; one immutable 29.36 USD order |
| Country, identity, marker | PASS in observed prepared traffic | All 176 prepared Analytics operations used approved synthetic IDs, top-level United Arab Emirates, browser_demo/demo_mode markers; no new custom event names |
| Revenue options and ingestion | PASS | Each conversion has top-level price/revenue equal to total, quantity 1, revenueType order_gmv, currency USD; food quantity 2 in event properties. Queried ingested $revenue/$currency: 26.36 USD + 29.36 USD = **55.72 USD order GMV** |
| Acquisition | PASS | Actual ingested Food Home Viewed data, grouped by user_id and derivedV2 [Amplitude] Default Channels, matches all six expected channels |
| Supporting interactions | PASS | Live search empty state, Clear, cuisine filter, favorite, demo offer/reviews, recommendation and promo Apply; SAVE10 gives 26.42 for B, invalid DEMO restores 29.36 |
| Identity boundaries / shutdown | PASS in observed checks | Six explicit ends/logouts; engagement disabled/unbooted, Experiment client stopped/consent denied, Replay plugin removed, Analytics opted out then reset; no observed anonymous Analytics sends |
| Analytics/Replay/Experiment/engagement initialization | PASS for normal app | One explicit init per document, no separate experiment tag; real webExperiment.isRunning/getExperimentClient key match; engagement booted with correct identity/key/US; Replay plugin installed once with explicit Medium and forceSessionTracking false |
| Actual Replay recording and input privacy | PASS on inspected friction recording | Project UI shows real recordings; player renders the intentional address screen with address/city/name inputs masked as stars |
| Native Replay dead/rage labels | PASS | Approved native-only retest: backend totals 2 Dead Click / 1 Rage Click; real Replay displays native labels separately from custom signals |
| Standalone live SDKs / recording | WITHHELD | All-SDK memory-only persistence has not been proven. No fallback identity was initialized or recorded live; offline selected fix is fully functional |
| Public hosting / Web Experiment editor attachment | PENDING USER PUBLICATION | No site was published; expected Pages URLs are still unverified |

Prepared-event counts are local observation counts, not a replacement for ingestion acknowledgements. The two orders and six channel assignments were also independently queried in Amplitude. The Replay backend displays a Replay Captured marker; it was not present in the app's before-plugin prepared traffic or selected browser Replay source, so no app event was invented for it.

## Approved limits and completed sessions

The first interrupted startup encountered the SDK's Engagement Booted event. Khaled subsequently said “continue normally” after the event and need for permission were explained, authorizing that SDK lifecycle event. Its actual count is bounded separately from the frozen 29 app names. Interrupted startup plus six completed sessions stay within the seven-session ceiling. Standalone live recording remains withheld, as reported in the batch revision.

Completed runs used **108 app events prepared**, **35 Identify operations prepared**, **33 SDK boot events prepared**; all below the approved 240 / 80 / 80 limits. Six orderly sign-outs were observed. Each completed session stayed under five minutes. Times below are **Asia/Dubai (UTC+4)**:

| Synthetic test ID | Start | End |
| eatsqasaved_111_20261111 | 11:55:59 | 11:57:19 |
| eatsqadrop_102_20261111 | 11:57:46 | 11:59:11 |
| eatsqarecover_103_20261111 | 12:00:47 | 12:04:23 |
| eatsqasocial_104_20261111 | 12:04:50 | 12:05:25 |
| eatsqaaffiliate_105_20261111 | 12:06:01 | 12:06:44 |
| eatsqallm_106_20261111 | 12:07:32 | 12:08:20 |

## Actual ingested results

| Test identity | Default channel |
|---|---|
| eatsqaaffiliate_105_20261111 | Affiliates |
| eatsqadrop_102_20261111 | Organic Search |
| eatsqallm_106_20261111 | LLM Search |
| eatsqarecover_103_20261111 | Direct |
| eatsqasaved_111_20261111 | Paid Search |
| eatsqasocial_104_20261111 | Organic Social |

The first daily channel query did not yet include the newest LLM session. A later five-minute query returned all six. No extra test event was sent to force this result. Request IDs are retained in the private output evidence. No saved chart/dashboard/notebook or experiment was created by these checks.

## Real Replay

[Open the inspected friction Replay](https://app.amplitude.com/analytics/khaledismailtest/session-replay/project/904029/search/replay?sessionReplayId=cacc6acd-ea3b-4304-831b-db054d139613/1794383381176)

User: eatsqadrop_102_20261111. Replay length: 1m 23s. The player shows initial unconfirmed Continue at 01:09, custom dead observation at 01:12, four rapid attempts plus the custom rage observation at 01:20, and explicit abandonment at 01:21. At normal playback speed with highlights off, the delivery screen remained unchanged through the dead interval; masked address/city values were visible. The rapid-tap segment and corresponding real event rows are present. No native classification is claimed. A smooth-user recording of 1m 19s was also listed.

Replay upload can occur outside the main-window fetch observer (for example through the selected SDK's worker transport); that observer did not capture upload acknowledgements. Actual recording availability is established by the authenticated Replay UI and rendered recording, not an invented upload response or URL. Local asset URLs in these recordings require the local static server while viewing; CSS and masking are visible in the recording. A temporary offline-only server was used for inspection and then stopped.

The connected US Replay read operation returned “tool not found”; authenticated UI inspection was used. The direct Replay URL above was obtained through Open In Full Page and verified in that full-page player.

## SDK/config findings

Read-only mutable-loader checks on 11 November 2026 matched all three original hashes. Selected sources: Analytics Browser **2.42.4**, Session Replay plugin **1.32.1**, experiment-tag **0.29.2**. Engagement's split production bundle was loaded through the approved key-specific engagement loader; no stable SDK semantic version was exposed in the inspected client, so none is invented.

Explicit queue: country/identity before plugin → Replay Medium/sampleRate 1/forceSessionTracking false → one Analytics init with US, fetchRemoteConfig true, autocapture false, defaultTracking false, 30-minute timeout. Identify is flushed and acknowledged before engagement attachment and explicit page/action traffic. Engagement is attached immediately in its loader callback and boot readiness is awaited. No standalone engagement init/boot, second client, second unified tag or separate experiment tag is added.

Actual client diagnostics: effective autocapture/defaultTracking false; matching US key; initialized webExperiment client; engagement installed once via Analytics with correct user. All three exact Experiment globals were probed; Experiment was absent, WebExperiment exposed initialization API, and webExperiment was the running client. Library/device/session values were present in returned event JSON. SDK device/session remained stable across pages within each test persona. SDK reset rotates identity/device at sign-out; the numeric session timestamp is library-managed and may be the same across different device IDs; no per-document setSessionId was used.

Remote web privacy was Medium with empty mask/block/unmask selectors, capture_enabled true and sample_rate 1. Analytics remote configuration was {}. Local Replay privacy is explicitly Medium. Real recording masks user inputs; no unmask selectors were added. No DAC or persona/project masking settings were changed.

## Fixes made during verification

- Added bounded test-only SDK lifecycle allowance for Engagement Booted, while preserving the exact 29 app names.
- Moved Identify acknowledgement before engagement attachment; added immediate stop controls for unexpected SDK traffic.
- Added supported SDK shutdown/reset at a genuine sign-out boundary, and isolated the app's SDK pending queue from the interrupted test queue.
- Made normal navigation wait for pending page/action tracks. Two fast intermediate visits in the earlier runs were interrupted before full page readiness; this was corrected before the recovery/acquisition checks. No duplicate page views were introduced.
- Kept the public static approval gate **null**. The approved batch was injected only by the temporary localhost test server, which is stopped. Public visitors cannot enable collection through UI or a URL parameter.

## Offline/static checks preserved

Eleven physical screen folders, local assets, exact case, no root-leading asset links, .nojekyll, branded 404, [hidden] reset, immutable order refresh behavior, per-user state clearing, required validation, map drag/keyboard controls and standalone confirmation/edit invalidation were checked. Root and repository-prefix HTTP checks passed before handoff. Integer-cent checks verified A/B totals and both SAVE10 variants. JavaScript syntax checks passed after changes. The final file audit resolves 71 HTML/CSS/font references.

Only five screens received visual comparison, with one fix pass. No further design loop or clone research occurred. Native platform scrollbar/control rendering and inner scrolling remain expected representative-design differences.

## Remaining limits

Standalone live recording is not accepted because the unified Experiment/Replay/engagement persistence is not proven memory-only. Its in-memory offline fix remains unchanged. Native Replay dead/rage labels passed the approved native-only retest. Public Pages hosting, base-path styling after publication, actual host headers and Web Experiment editor attachment remain pending. Testing does not authorize unattended collection or publishing.


## Native-label diagnosis and verified exception

The cause was autocapture:false disabling the Browser SDK native frustration detector. The approved native-only exception enables dead/rage detection only on checkout/address/ #continue. The 11 November retest passed: exact-user backend query returned two native Dead Clicks and one native Rage Click; the actual Replay displays both labels and masked input values. The 2m 8s recording has native Dead Click at 01:14 and Rage Click / Dead Click at 01:27. See native-frustration-fix.md and native-dead-rage-replay.png. The original earlier-run description above remains historical evidence. Collection ended at sign-out; the shipping gate remains null.

Native retest Replay: https://app.amplitude.com/analytics/khaledismailtest/session-replay/project/904029/search/replay?sessionReplayId=83053041-2a90-48c4-a02a-88c51c40869e/1794383381176
