# Judge headshots

Headshots referenced by `lib/content.ts` (`judges[].image`). Current files:

- `AO2.webp` — Alexis Ohanian (Co-founder of Reddit)
- `kofi.jpeg` — Kofi Amoo-Gottfried (Former CMO of DoorDash)
- `zb.jpeg` — Zach Braff (Actor & filmmaker, Columbia HS)
- `schutz.jpeg` — Rob Schutz (Co-founder of Ro)
- `sheena.jpeg` — Sheena C. Collum (Mayor of South Orange)

To swap a photo, replace the file (or add a new one and update the matching
`image` path in `lib/content.ts`). Square images look best — they're shown in a
circular crop. If a path doesn't resolve, that judge falls back to a colored
monogram, so nothing ever looks broken.
