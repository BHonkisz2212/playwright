# Playwright – Praktyczne wprowadzenie do testów automatycznych

Poznaj z nami automatyzację GUI za pomocą narzędzia Playwright🎭  
Stwórz swoje pierwsze testy End To End od zupełnych podstaw.

## Links
- code repository https://github.com/jaktestowac/playwright_automatyzacja_wprowadzenie

## O Repozytorium

Kod z tego repozytorium pochodzi z kursu:

[**Praktyczne wprowadzenie do testów automatycznych z Playwright**](https://jaktestowac.pl/course/playwright-wprowadzenie/)

Jest on częścią Programu:

[**Testy Automatyczne z Playwright**](https://jaktestowac.pl/playwright)

## Podgląd kodu dla danej lekcji lub sekcji

Zlokalizuj etap który chcesz zobaczyć (może to być sekcja lub lekcja)
- Katalogi rozpoczynające się od `S`:
  - oznaczają numer sekcji,
  - zawierają w sobie zbiór lekcji.
- Katalogi rozpoczynające się od `L`:
  - oznaczają numer lekcji,
  - zawierają w sobie `projekt`, który jest rezultatem danej lekcji.

## Instalacja danego etapu

1. Pobierz całe repozytorium
2. Rozpakuj je i przenieś do folderu z projektami (np. `Projects`)
3. Przejdź do katalogu danego etapu (możesz go otworzyć w Visual Studio Code) np. `/S01_wprowadzenie/L01_pierwszy_test/`
4. Jeśli znajduje się w nim plik `package.json` możesz odtworzyć dany etap
  - uruchom w katalogu etapu konsolę 
  - wykonaj polecenie `npm install` aby zainstalować zależności
  - wykonaj polecenie `npx playwright install` aby pobrać aktualne przeglądarki
  - uruchom testy `npx playwright test`
5. Zacznij kodzić🧑‍💻

## Visual Studio Code
- Preview: for README.md
- Autodsve: in File-> Auto Save
- Timelie: file context menu

## Commands
- record tests for given site
'npx playwright codegen https://demo-bank.vercel.app/'

## Prettier

install Prettier
npm install --save-dev --save-exact prettier

configure Prettier

exlude files in .prettierignore

package-lock.json
playwright-report
test-results

set rules in .prettierrc.json

{
    "singleQuote": true,
    "endOfLine": "auto"
}
run Prettier
npx prettier --write .

additionaly you can install VSC extension: Prettier

and set default VSC formatter as Prettier (right mouse button and Format document with ...)
