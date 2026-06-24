AI4SecureCI revised website files
===================================

Files included with the same requested names:

1. index(1).html
2. modules(1).html
3. award_details(1).html
4. contact(1).html
5. README.txt

What changed
------------
The content has been replaced with AI4SecureCI-specific material based on the uploaded PDF. The revised pages focus on:

- AI4SecureCI as a cloud cyberinfrastructure security curriculum.
- Module 3: Online Malware Detection in Cloud CI.
- Lab 3: safe malware behavior collection in isolated VMs and ML-based online detection.
- Module 4: Malware Threat and Family Classification in Cloud CI.
- Lab 4: API-call behavioral datasets, family classification, ML evaluation, and LLM-assisted classification.
- Safe hybrid lab design: isolated local VMs for malware behavior collection, clean ML machine for training/reporting, and AWS EC2-style infrastructure for cloud CI deployment and monitoring demonstrations.
- Careful wording: the uploaded source supports "cloud-focused/cloud-specific malware behavior at the VM/workload level" more clearly than strict "cloud-native malware" claims.

Important GitHub Pages publishing note
--------------------------------------
GitHub Pages automatically loads a file named index.html from the selected publishing folder.

Because you asked to keep the same names, the homepage file is named:

    index(1).html

For GitHub Pages, you should either:

Option A - rename before upload:

    index(1).html        -> index.html
    modules(1).html      -> modules.html
    award_details(1).html -> award_details.html
    contact(1).html      -> contact.html

Then update the navigation links inside the HTML files to use the cleaner filenames.

Option B - keep the filenames, but copy content:

    Copy the content of index(1).html into docs/index.html

This is the quickest fix if your GitHub Pages homepage displays blank or 404.

Recommended repo setup for lowercase URL
----------------------------------------
To publish at:

    https://ai4secureci.github.io/ai4secureci/

make sure the repository name is exactly lowercase:

    ai4secureci

Then use:

    Settings -> Pages -> Source: Deploy from a branch
    Branch: main
    Folder: /docs

Put the published files inside the docs folder.

Suggested docs folder layout
----------------------------
For clean GitHub Pages routes, use this layout:

    docs/index.html
    docs/modules.html
    docs/award_details.html
    docs/contact.html
    docs/README.txt

If you keep the current same-name files, use this layout:

    docs/index(1).html
    docs/modules(1).html
    docs/award_details(1).html
    docs/contact(1).html
    docs/README.txt

But remember: docs/index(1).html will not automatically open as the root homepage. GitHub Pages expects docs/index.html.

After upload
------------
1. Commit and push the docs folder.
2. Go to GitHub -> Settings -> Pages.
3. Select main branch and /docs folder.
4. Wait for the Pages build to finish.
5. Open the published URL.

Defensive-use note
------------------
The website content is written for cybersecurity education and defensive analysis. Do not publish operational malware execution details, uncontrolled sample-handling instructions, or unsafe cloud detonation procedures.
