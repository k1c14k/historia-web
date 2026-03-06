# Instrukcja konfiguracji

Witaj w projekcie Web History! Postępuj zgodnie z poniższymi instrukcjami, aby skonfigurować lokalne środowisko programistyczne.

## Wymagania wstępne

Zanim zaczniesz, upewnij się, że masz zainstalowane następujące narzędzia:

### 1. Git
Git to system kontroli wersji używany do zarządzania kodem źródłowym.
- Pobierz i zainstaluj system Git ze strony [git-scm.com](https://git-scm.com/).
- Sprawdź poprawność instalacji wpisując w terminalu polecenie `git --version`.

### 2. Node.js oraz npm
Node.js to środowisko uruchomieniowe JavaScript, a npm (Node Package Manager) jest używany do instalacji zależności.
- Pobierz i zainstaluj wersję LTS środowiska Node.js ze strony [nodejs.org](https://nodejs.org/). Wraz z nim zainstaluje się również npm.
- Sprawdź instalację:
  - `node -v`
  - `npm -v`

### 3. Visual Studio Code (VS Code)
VS Code to zalecany edytor kodu dla tego projektu.
- Pobierz i zainstaluj edytor VS Code ze strony [code.visualstudio.com](https://code.visualstudio.com/).
- Zalecane rozszerzenia do tworzenia aplikacji internetowych:
  - **ESLint**: Zapewnia wsparcie dla ESLint w VS Code, służącego do sprawdzania składni (linting) JavaScriptu.
  - **Prettier - Code formatter**: Zapewnia spójne formatowanie kodu.
  - **Live Server**: Uruchamia lokalny serwer testowy z funkcją przeładowania strony na żywo (live reload) dla stron statycznych.

### 4. yarn (Opcjonalnie)
Yarn to alternatywny menedżer pakietów. Menedżer npm jest wystarczający, lecz jeśli preferujesz Yarn, możesz go zainstalować globalnie używając npm:
- `npm install -g yarn`
- Sprawdź instalację: `yarn -v`

## Pierwsze kroki

1. **Sklonuj repozytorium:**
   ```bash
   git clone <adres_repozytorium>
   cd "historia web"
   ```
   *(Uwaga: dostosuj adres repozytorium do prawidłowego adresu pod którym ten projekt jest hostowany)*

2. **Uruchomienie poszczególnych etapów:**
   Ten projekt jest podzielony na kilka etapów (`etap-0`, `etap-1` itd.).
   Zmień folder na konkretny etap i uruchom go. Na przykład dla etapów opartych na Node.js:
   ```bash
   cd etap-X
   npm install   # lub `yarn install`
   node server.js # w zależności od konfiguracji w danym etapie
   ```
