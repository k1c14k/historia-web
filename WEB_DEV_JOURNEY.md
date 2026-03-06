# Historia Web Developmentu: Kalkulator (Etap 0 do 6)

Ten dokument to przewodnik i lista kontrolna pokazująca ewolucję tworzenia stron internetowych na przykładzie jednego projektu: **kalkulatora**. Przejdziemy od całkowicie statycznych plików HTML wygenerowanych skryptem, aż po nowoczesną aplikację typu Single Page Application (SPA) napisaną w React z użyciem Tailwind CSS.

## Etap 0: Prawdziwy Web 1.0 (Skrypty generatorów i czysty HTML)
W tych wczesnych instalacjach internetowych (w tym projekcie), strona "nie myślała". Każde naciśnięcie przycisku na kalkulatorze wymuszało pobranie z serwera zupełnie nowego, wcześniej wygenerowanego pliku HTML, który zawierał zakodowany na sztywno wynik.

- [ ] **Kluczowe zagadnienia**:
  - Statyczny HTML bez logiki wykonywanej w przeglądarce.
  - Generowanie plików `.html` w celu obsłużenia kombinacji kliknięć (tu w ujęciu historycznym).
  - Ograniczenia takiego podejścia (w tym przypadku: ograniczony zestaw liczb od 0 do 5 ze względu na ogromną liczbę możliwych kombinacji i plików).
  - Nawigacja oparta wyłącznie na hiperłączach (`<a>`), które symulują "przyciski".
- [ ] **Ważne pojęcia**: Web 1.0, Statyczny HTML, Strony wieloplikowe.
- [ ] **Zadanie/Analiza**: Dodaj ręcznie nowy plik `.html` dla prostej wariacji (np. wynik działania `5+1`), skopiuj strukturę HTML z innego pliku i poprawnie podlinkuj nową ścieżkę w przycisku. Zaobserwuj, jak trudne i powtarzalne było dodawanie nowych funkcji bezpośrednio w statycznym HTML-u.

## Etap 1: Multi Page Application (MPA) z Tabelami i Backendem API
Zamiast generować wszystkie możliwe pliki HTML, serwer przejmuje zadanie obliczeń "w locie". Do ułożenia elementów wizualnych (layoutu) w tamtym wczesnych czasach powszechnie używano tabel HTML, a style definiowano poprzez atrybuty (np. `bgcolor`, `width`) prosto w kodzie.

- [ ] **Kluczowe zagadnienia**:
  - Koncepcja Multi Page Application (MPA) - serwer zwraca gotowy HTML, ale przetworzony po zadaniu.
  - Wykorzystanie struktury tabel `<table>`, `<tr>`, `<td>` do tworzenia układów (layoutów) stron, zanim standardem przestało być CSS.
  - Stylowanie przy pomocy surowych atrybutów HTML, np. `<td bgcolor="#cccccc">`.
  - Prosty backend w środowisku Node.js (moduł `http`), odbierający parametry operacji i zwracający dynamiczny widok HTML na podstawie szablonu (`index.ejs`).
- [ ] **Ważne pojęcia**: Server-Side Rendering (SSR), Layout Tabelaryczny, MPA.
- [ ] **Zadanie/Analiza**: Przejrzyj plik `etap-1/views/index.ejs` by zauważyć layout oparty o `<table>` z "wstrzykniętym" CSS w HTML. Odpal serwer backendowy Node.js i przetestuj kalkulator. Wymuś wykonanie działania dzielenia przez zero i zaobserwuj, w jaki sposób zaimplementowano powrót do stanu usterkowego.

## Etap 2: Oddzielenie Prezentacji od Struktury (CSS + Tabele i Backend MPA)
Wyciągnięcie stylów poza atrybuty i pliki HTML by wprowadzić nową technologię - oddzielne kaskadowe arkusze stylów (CSS). Strona wciąż jest typu MPA oparta o tabele, ale zarządza się nią o wiele prościej - style załączono do pliku z rozszerzeniem `.css`.

- [ ] **Kluczowe zagadnienia**:
  - Przejście od opcji `bgcolor` itd - po tag `<link rel="stylesheet">`.
  - Arkusze kaskadowe w oddzielnym pliku (`public/style.css`), a selektory elementowe sterujące wyglądem `<td>`.
  - Separacja warstwy strukturalnej i informacyjnej (HTML) od warstwy reprezentatyjnej z wizualnym aspektem (CSS).
- [ ] **Ważne pojęcia**: Kaskadowe Arkusze Stylów (CSS), Wyciągnięta semantyka do klas, External Stylesheet.
- [ ] **Zadanie/Analiza**: Skontroluj folder `public` z `etap-2`, i porówaj jak zmieniono i odchudzono widok zawartość tagu HTML `<table>` usuwając usterkowe starej daty atrybuty stylów.

## Etap 3: Single Page Application (SPA), JavaScript z Frontendową Logiką, Stary Layout
Powstanie "nowoczesnej logiki" polegające na rezygnacji ciągłej łączności do serwera podczas wymuszania zmian z przeliczeniami matematycznymi w aplikacji kalkulatora. Cała domena działań asynchronicznych i liczących trafia po stronie "klienta" z użyciem wgranego pliku Javascript. Obliczenia przeprowadzane są w oknie w przeglądarce, layout graficzny u podstawy jeszcze zostaje jako Tabelki ze starszym CSS. 

- [ ] **Kluczowe zagadnienia**:
  - Aplikacje typu Single Page Application (SPA) - aplikacja ładuje z serwera zasoby tylko w jednym wytycznym punkcie zapytania pliku (`index.html`).
  - Użycie pliku pliku ze skryptem języka na stronę przeglądarek JavaScript. (`script.js`).
  - Manipulacja i podłączenie obiektnego drzewa z operacji i kliknięć z przeglądarką - selekcję elementów w zmienną pod zdarzeniowe na DOM-ie - tzw "Event Listeners" (`click`).
  - Natychmiastowa reaktywność dla użytkownika (UX - User experience), ponieważ całe asynchroniczne przeliczanie odbywają na miejscu lokalnym urządzenia pomijając opóźnienie wywołań przez internet i komunikacje zapytania z infrastruktur.
- [ ] **Ważne pojęcia**: Single Page Application, Event Listeners z JS, Client-side scripting, DOM-modyfikacja.
- [ ] **Zadanie/Analiza**: Przejrzyj implementację procedury Javascript by ujrzeć całą odpowiedzialności jak ze strony "Serwerowej API z Etapu-2", przeobrażono pod funkcje czystego JavaScript przypisanego z akcjonariuszami klika by wyświetlać pozycję.

## Etap 4: Nowoczesny Układ (Div i Flexbox/Grid) zamiast Tabel
Rezygnacja z bardzo mocno starszych układów HTMLowych na element "Tabelki" służącej za grid budowany jako cały layout do oprawy wyglądu przez nowoczesny powszechny stosowany model ułożenia w kontenerach wykorzystując do tego uniwersalny obiekt HTML  `<div >`. 

- [ ] **Kluczowe zagadnienia**:
  - Koniec używania przestarzałej domeny struktur z Tabelek, wstawianie divów - elastycznych układów by kontrolować przestrzeń roboczą układu aplikacyjnego.
  - Wykorzystanie funkcji w "CSS" o elastycznych możliwości z użyciem `flexbox`/ `grid` służących w wyrównywaniu rzędzików, centrowań by zrekonstruować siatkowy wkład dawniejszych starych stabel. 
- [ ] **Ważne pojęcia**: Semantic Layout bez Table, Blok i Element Własny modelu - 'Box Model CSS'. CSS Flex / CSS Grid.
- [ ] **Zadanie/Analiza**:  Zauważ zmianę szkieletu kodu dokumentu, a w struktur pliku stylu włączonym od nowszego Etapu i poszerzeniu po polecenia formatujących z systemu układowego pod siatkę do guzików w Kalkulatorze.

## Etap 5: Transformacja Frontendu w Komponenty ze środowiska React
Znaczny i zaawansowany "Shift technologii" - budowa aplikacji porzucając "stary stary" dokument Vanilla JavaScript (i manualną kontrole zmian modyfikacji pod pozycje tagów "DOM'a") pod system bazowy najrozpopularniejszych struktur komponentowych na systemach (Frameworkach).

- [ ] **Kluczowe zagadnienia**:
  - Inicjacja infrastruktury użycia kompilator, uruchamiaczenia pakietu, Vite.
  - Modularna koncepcja układanki plikowej na osobny odpowiedzialny fragment. Separacja do logiki (np: jeden plik reprezentujący i pełniąca element dla "Ekranu", i innych wyłącznych od wirtualnego do "kluczowych od Przycisków kalkulacyjnej na plik z wbudowanej JSX"). 
  - Architektura na system zarządzania lokalnymi daności - kontrolowany "Stanem" (używany `useState` hook do przechów i reaktywnej modyfikacji kalkulowanego wynikiem na ekraniku - Virtual-DOM modyfikując pozycję używając).
- [ ] **Ważne pojęcia**: Framework kompontowy oparta infrastrukutra React, Podstawowe wtyczki Hook - z ang (hook, useState), w skrócie i środowiskowa architektura 'V-DOM'.
- [ ] **Zadanie/Analiza**: Otwarcie kodowań React (m.in zawartych i skatalogowania w plikach typów App.js albo od JSX rozszerzenia). 

## Etap 6: Ekstremum narzedziem w "Komponenty (React) i Utility-First CSS (Tailwind)"
To pojęcie doprowadzone ewolucją i nowoczesnej dominacji układania do powszechnego tworzeń, czyli usunięcie "kłopotliwego z globalnych osobnych pliczków do dopomocy formatów pod CSS " do wykorzystywał tzw dedykacyjny framework. Opcją od "Tailwind", bezpośrednią klasą i zrezygnowania używania tworzeniu selekcyjnych plikowań. 

- [ ] **Kluczowe zagadnienia**:
  - Usunięcie strukturalnego rozszerzeń od plików np pod `style.css` (przeważającej z elementów kalkulatora).
  - Wdrożenie klas użytkowych `utility-first` (np `flex`, `justify-center`, `bg-gray-200`) wpisanych jako bezpośrednie własności atrybut do kodu JSX przy kodowaniu elementach pod React'ową strukture dokumentowania. Wdrożeniowe konfiguracji typu Vite oraz integracja "TailwindCSS". 
  - Rozwój komponentowy ulegają dalszą poprawy rozkłada aplikacji - przy wyliczeniu komponentu kalkulator (`Calculator.jsx`), podzieleniu klawiatur kompentowej np do `ButtonPad.jsx`, po urozmaicenie i standaryzacja `Button.jsx`.
- [ ] **Ważne pojęcia**: Architektura w projektowania na "Utility-First" - u stylów w domenie "TailwindCSS".
- [ ] **Zadanie/Analiza**: Przeanalizowanie poszerzonego skryptu `Calculator.jsx` lub do pod pozycjach podkomponentu. Zwrócenia dużej uwagi co występuje do zmiennych jako "Klasy nazwa - (ang. className)" zastępująca dotychczasowego stosowanego ujętego ręcznie wpisywanie po zewnętrznych powołania z na klas i w style CSS.
