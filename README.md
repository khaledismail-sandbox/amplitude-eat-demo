# Amplitude Eats — offline build / manual Pages handoff

Fictional demo · not a food-delivery service operated by Amplitude.

The complete static application is in `/Users/khaledismail/Desktop/Amplitude Eats Demo`.
Eleven physical screen routes; vanilla HTML/CSS/JavaScript; no installation, build step, backend or real payment. All assets are local. Serve over HTTP(S), since browsers block ES modules opened as local files. For local preview, ask Codex to start its existing Python server; no terminal steps are required from you.

## Collection and publishing state

OFFLINE by default. No Analytics, Replay, Experiment or engagement SDK loads in this delivered state. The hard-coded approval object in `assets/analytics.js` is null; there is no visitor-facing activation control or URL switch. Local event recording is opt-in and is not network delivery. Do not edit the gate to run unattended. Normal live Analytics/Replay/Experiment/engagement initialization, journeys and sign-out have now been verified in the authorized localhost tests. The temporary test server is stopped. Standalone live recording remains withheld until all-SDK memory-only storage is proven. See verification.md for exact results and limits.

Existing target: project **904029 · Gen Demo App**, organization **432322 · khaledismailtest**, US. Requested demo label does not rename the project. The historical upload is complete; do not regenerate or upload it.

The following hosted URLs are **expected, not verified live**:

- Entry: https://khaledismail-sandbox.github.io/amplitude-eats-demo/
- Menu: https://khaledismail-sandbox.github.io/amplitude-eats-demo/restaurant/asi/
- Delivery: https://khaledismail-sandbox.github.io/amplitude-eats-demo/checkout/address/
- Payment: https://khaledismail-sandbox.github.io/amplitude-eats-demo/checkout/payment/
- Standalone: https://khaledismail-sandbox.github.io/amplitude-eats-demo/address-help/

Relative screen links: [Entry](index.html), [Home](home/), [Search](search/), [Menu](restaurant/asi/), [Basket](basket/), [Delivery](checkout/address/), [Payment](checkout/payment/), [Confirmation](order/confirmation/), [Orders](orders/), [Account](account/), [Standalone fix](address-help/).

## Click-by-click demo scripts

1. **Smooth:** open the entry URL → enter name and demo number → Saved-address reuser → choose country → Start demo → Explore menu under Everyday Kitchen → increase the sesame bowl quantity to **2** → Add → View basket → Continue to delivery → Use saved address → Continue to payment → Place order → inspect confirmation → Back to Home → Account → Sign out. Expected no-promo total **26.36 USD**; no custom unconfirmed/dead/rage signals.
2. **Friction/drop-off:** close all incognito windows before opening one fresh incognito window → entry → choose a new demo number and New-address entrant → Start demo → same two bowls and basket → Continue to delivery → Enter a new delivery address → review/edit the synthetic fixture and complete address, city and country → Save delivery details → Close → Continue to payment once → wait at least **3.1 seconds** → four rapid taps within **600ms** in the same button area → Leave checkout. No-promo total **29.36 USD**. Signals: `Unconfirmed Address Continue Tapped` (five attempts), `Address Continue Dead Tap Observed`, `Address Continue Rage Taps Observed`; then `Food Checkout Abandoned`. The Continue button intentionally gives no feedback until the map pin is confirmed.
3. **Friction/recovery:** repeat new-address checkout (new checkout resets the pin), reproduce the taps → small tertiary **Confirm map pin** → Continue to payment → Place order → confirmation. Map-pin confirmation resolves the dependency. This manual recovery is not an experiment treatment. Refresh preserves the draft confirmation; confirmation refresh does not emit a second order.
4. **After:** manually type the standalone `/address-help/` URL in a fresh context → no login → review the map and required address/city/country → optionally Adjust pin, use directional buttons, keyboard arrows on the pin, or drag it → Confirm address and continue → inline **Address confirmed — ready for payment**. Editing address or pin invalidates the confirmation. No payment, order, tabs, normal navigation links or experiment routing exists on this page.
5. **Supporting interactions:** Home and menu cuisine chips filter real catalog items; Search submits dish/cuisine queries, Clear resets filters, and an unmatched query has an empty state. Result links open the selected dish in Everyday Kitchen. Save favorites from Home/menu; Account shows saved favorites. Home recommendation and menu recommendation open/select the real bowl. Click Home’s offer for its detail sheet; Read reviews on the menu opens explicitly authored demo reviews. Apply exact **SAVE10** in the basket: A discount **2.64**, total **23.72**; B discount **2.94**, total **26.42**. Invalid codes show feedback. Basket +/- and Remove update actual quantities and totals. Empty basket cannot continue; Browse menu works. Orders contains only accepted local demo orders.

## Identity, state and diagnostics

Generated ID = name trimmed/lowercased with non-ASCII-alphanumeric characters removed + `_demoNumber_YYYYMMDD` using UTC, e.g. `khaled_1_20261111`. The same inputs on the same UTC date produce the same ID. Login restores only a valid same-day context. Persona switching is a deliberate Sign out → new number → new persona flow; selecting another persona increments the proposed number. Sign out clears that user’s basket, address, orders, pending conversion, counters and current login without touching unrelated storage. First-touch attribution is separately keyed by deterministic identity, never forwarded from another persona. Fixture profile counts are simulated, independent of the address behavior.

A fresh incognito tab can share storage: close **all** incognito windows to obtain a fresh context. Increment the demo number for a distinct Analytics identity.

Recorder: expand **Developer · offline event recorder** on entry, opt in before Start demo; or Account → Developer diagnostics → opt in. Read records / Clear records / SDK check are there. Identify ordering, enqueue and offline result states are recorded without live DOM timers. Standalone developer console API `demoDiagnostics.recorder.enable()`, `.read()`, `.clear()` uses memory only; it never reads or writes normal user storage. The default is OFF. Debug records can contain synthetic typed search/promo strings; never enter personal data.

Acquisition: entry’s labelled demo control offers Actual arrival context, Direct, Paid Search, Organic Search, Organic Social, Affiliates and LLM Search. These are simulated contexts when selected, not evidence of a real referral; no referrer links open. Direct omits attribution values rather than transmitting the string “direct”. Initial and current acquisition remain independent. Actual tagged arrivals preserve their supplied UTMs and genuine external referrer. The existing channel classifier is unchanged.

## Publish through the GitHub website

1. Sign in to GitHub as **khaledismail-sandbox** → **+ → New repository** → name **amplitude-eats-demo** → choose appropriate Pages-supported visibility → initialize with a README. If this repository already exists, use it.
2. Repository **Code → Add file → Upload files**. Finder → **Desktop → Amplitude Eats Demo**. Drag the **contents**, not the enclosing folder: `index.html`, `assets/` and screen folders must be at repository root.
3. Manually skip `_reference/`, `_tools/`, `.DS_Store`, `__MACOSX`, raw prompts, run-state, credentials, environments and private test evidence. The delivered public folder contains no raw SDK downloads or historical batches. The website uploader ignores `.gitignore`; `.nojekyll` means underscore folders could be served if uploaded. Keep static files, README, brand.md and required `.nojekyll`. **Command–Shift–.** reveals hidden files. If `.nojekyll` is omitted: **Add file → Create new file**, name it `.nojekyll`, commit it empty.
4. Review filenames, exact case and root structure. The folder is below the website’s 100-file batch limit; split selections if later additions exceed it and respect the per-file limit. **Commit changes**, or use the displayed Propose changes/review/merge flow required by branch rules.
5. **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → /(root) → Save**. If displayed controls differ, follow the website’s options and report the difference.
6. Wait for actual successful deployment, then **Visit site**. Check entry, deep menu/checkout refresh, relative assets and `/address-help/`. The expected URL’s spelling alone does not verify publication.
7. Return the actual live URL to Codex for hosting/header checks and a separately authorized telemetry/Replay batch. Codex has not created a repository, enabled Pages or published anything.

## Boundaries and evidence

No CSP meta or COOP header is added. Actual host headers and editor attachment remain unverified. The experiment flag `unconfirmed-address-continue-tapped-reduction` is retained as context only: no assignment, flag evaluation, exposure event, experiment mutation, or link/routing to the fix. Both personas are behavior paths, not experiment arms. Persona setup, DAC and project masking remain manual.

Official supplied sources: [Amplitude brand resources](https://brand.amplitude.com/references/brand-resources), [official RGB palette](https://drive.google.com/file/d/12i38-5PptlCjo-wMfzI3yypjpULjlsK0/view), [official logo kit](https://drive.google.com/file/d/1MILZPi43_BTfq1miQsQLKWx6mCPsl0qo/view), [Instacart address pattern](https://www.instacart.com/help/section/3252458959/3043297912). The supplied brief checked them 10 November 2026; no page update date was supplied. Logo archive entry date is 8 December 2025. Palette values were supplied from official resources, not screenshot measurements. Photo references are the four exact supplied Unsplash images; Poppins was fetched from the supplied Google Fonts CSS and its direct font dependencies only.


## Verified live test evidence

The normal app was tested in the approved US project on 11 November 2026. Both order journeys, explicit abandonment, custom dead/rage signals, six acquisition channels and ingested USD GMV passed. The approved native-only retest also verified two native Dead Clicks and one native Rage Click, with both labels visible in the real Replay. The standalone remains offline. Read verification.md for details. The delivered folder still loads no SDK outside a separately approved test run.
