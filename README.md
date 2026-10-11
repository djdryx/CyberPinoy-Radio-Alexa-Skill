# CyberPinoy Radio — Alexa Skill

Official Alexa skill source for **CyberPinoy Radio** — *Pusong Pinoy, Purong Pinoy.*

Say: **“Alexa, open Cyber Pinoy Radio.”**

Live MP3 stream (HTTPS port 443):
https://a6.asurahosting.com/listen/cyberpinoy_radio/radio.mp3

## Import into Alexa Developer Console

1. Create a **Custom / Music & Audio / Alexa-hosted (Node.js)** skill.
2. In **Templates**, choose **Import skill** and enter this public GitHub URL:
   https://github.com/djdryx/CyberPinoy-Radio-Alexa-Skill
3. Review the imported code and interaction model; build the model, deploy code, and enable the **Audio Player** interface.
4. Test on the **Development** stage with “Alexa, open Cyber Pinoy Radio.”
5. Complete skill metadata, privacy disclosures and Amazon certification before publication.

Project files: `lambda/index.js`, `lambda/package.json`, `skill-package/interactionModels/custom/en-US.json`, `skill-package/skill.json`, `ask-resources.json`.

Note: Import behavior depends on the Alexa Developer Console. If repository import fails, use **Start from Scratch** and copy the Lambda source and interaction model manually. This source has not been deployed or device-tested.
