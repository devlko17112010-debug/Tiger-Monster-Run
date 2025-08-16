
# Tiger Monster Run — Android (Capacitor)
- Package: `com.tigermonsterrun.game`

## Cloud Build (APK via GitHub)
1) Create a new GitHub repo and push this folder.
2) Open **Actions** → wait for **Android APK (Debug)** job.
3) Download artifact `TigerMonsterRun-debug.apk` and install.

### Optional Release (Play Store AAB)
Add Secrets to repo:
- `KEYSTORE_BASE64` (base64 of your `.jks`)
- `KEYSTORE_PASSWORD`
- `KEY_ALIAS`
- `KEY_PASSWORD`

Push a commit → Release job uploads `TigerMonsterRun-release.aab` artifact.

## Local Debug build
```bash
npm i -g @capacitor/cli http-server
npx cap add android
npm run prepare:android
cd android && ./gradlew assembleDebug
```
