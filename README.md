# Peaklyy® — Independent Digital Studio

A responsive, static portfolio website for Peaklyy. The design pairs editorial typography and a considered dark palette with original local SVG project artwork and accessible, purposeful interactions.

## Features

- Responsive layouts, navigation, and project showcases with working brand and digital filters.
- Four self-initiated concept projects, each with original local artwork and keyboard-accessible project details.
- Capabilities, studio approach, a five-step process, and an explicitly identified testimonials placeholder. No client reviews, relationships, or results are invented.
- Contact form with accessible client-side name, email, and message validation.
- A prepared `mailto:` draft after validation. The site does not send or store messages; the visitor reviews and sends the email in their own email app.
- Reduced-motion support, visible focus indicators, descriptive image alternatives, smooth in-page navigation, and a generated copyright year.
- No framework, build step, backend, external font, or third-party runtime dependency.

## Technologies

HTML5, CSS3, vanilla JavaScript, and local SVG assets.

## Run with VS Code Live Server

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension by Ritwick Dey if necessary.
3. Right-click `index.html` and select **Open with Live Server**.

The site and its relative asset paths are intended to work from the project folder without a build command.

## Configurable placeholders — replace before launch

These are the only contact/social destinations currently in the site. They are examples, not confirmed studio contact details or personal profiles:

| Placeholder | Where it appears | Before launch |
| --- | --- | --- |
| `hello@peaklyy.studio` | Direct email link in `index.html`; generated `mailto:` link in `script.js` | Replace both occurrences with an email address the studio monitors. |
| `you@example.com` | Email field example placeholder in `index.html` | Generic input example only; it is not a contact destination. |
| `https://www.instagram.com/` | Instagram footer link in `index.html` | Generic platform homepage, not a studio profile. Replace with the studio’s real profile URL, or remove the link. |
| `https://www.linkedin.com/` | LinkedIn footer link in `index.html` | Generic platform homepage, not a studio profile. Replace with the studio’s real profile URL, or remove the link. |

No personal details or individual social profiles are assumed. The contact form is a frontend demonstration: it validates input and prepares an email draft, but does not send or store a message. The visitor must send the draft from their own email app.

## Deploy publicly with GitHub Pages

GitHub Pages can host this static site without a build step or deployment tool:

1. Replace the contact and social placeholders listed above. Save the changes.
2. Sign in to GitHub and open the `peaklyy-portfolio` repository.
3. **Restore the missing deployed image files:** the currently published `main` branch has no `assets/` directory, and the live project-image requests return 404. In the local project, upload the entire `assets` folder with these exact, case-sensitive paths:
   - `assets/fieldnotes.svg`
   - `assets/forma.svg`
   - `assets/still.svg`
   - `assets/common-ground.svg`
   - `assets/favicon.svg`
4. In the repository, choose **Add file → Upload files**. Upload the `assets` folder while preserving its name and structure. Also upload any edited root files (`index.html`, `style.css`, `script.js`, and `README.md`) if they have changed. Do not rename the SVG files or move them out of `assets/`.
5. Commit the uploaded files to the `main` branch.
6. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save if Pages is not already configured.
7. Wait for the Pages deployment to finish. GitHub displays the public site URL in the Pages settings; for a project repository it is usually `https://<github-username>.github.io/<repository-name>/`.
8. Open that URL and verify all four project illustrations and the favicon load, then check navigation, mobile menu, project filters/details, and contact email-draft behavior.

Do not select a Jekyll theme or add a build command; the site is plain HTML, CSS, JavaScript, and SVG. Local image paths are relative to the project root and correct for the GitHub Pages project URL; a 404 occurs if the matching files are absent from the published repository. No deployment has been performed. The assets must be committed and Pages must finish publishing before the live image fix can be verified.

## Known limitations

- The contact form is a frontend demonstration, not a backend or delivery service. It requires a configured email app to open the draft; users must send it themselves.
- Testimonials are intentionally a placeholder until genuine, authorized feedback is available.
- Social profile URLs and the contact email are examples and must be configured before public launch.

## Peaklyy submission checklist

- [x] Responsive showcase with four clearly identified concept projects, local visuals, details, and category filters.
- [x] Capabilities, testimonials placeholder, contact form, and subtle interactions.
- [x] Accessible form validation, email draft preparation, focus indicators, descriptive artwork alternatives, and reduced-motion support.
- [x] Static implementation suitable for VS Code Live Server and build-free static hosting.
- [ ] Replace the example contact email and generic social-platform URLs with confirmed studio details or remove unused links.
- [ ] Create/configure a public static-hosting deployment and verify the live URL.
- [ ] Manually verify with the target hosting provider and on real devices before submitting.
