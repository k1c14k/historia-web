# Ściągawka i Słowniczek Web Developmentu (Etapy 0-6)

Ten dokument to pomocnik tłumaczący kluczowe pojęcia, budowę technologii oraz rozwój aplikacji na przestrzeni etapów (od czystego HTML po Reacta z Tailwindem). Idealny do szybkiego sprawdzenia definicji podczas nauki.

---

## Etap 0: Prawdziwy Web 1.0 (Skrypty i czysty HTML)
*Wszystko jest statyczne. Każda interakcja ładuje nowy plik `.html` z serwera.*

### 1. Budowa tagu HTML
HTML to język znaczników używany do nadawania struktury stronie. Z czego składa się tag (znacznik)?
Przykład: `<a href="index.html" class="btn">Kliknij</a>`
- **`<a ...>`** – **Znacznik otwierający** (tutaj `a` od *anchor* - hiperłącze).
- **`href="..."`, `class="..."`** – **Atrybuty**. Dodatkowe informacje modyfikujące zachowanie tagu, np. cel linku.
- **`"index.html"`** – **Wartość atrybutu**.
- **`Kliknij`** – **Zawartość** (tekst lub inne tagi zagnieżdżone w środku).
- **`</a>`** – **Znacznik zamykający**. 

### 2. Popularne Tagi:
- `<table>`, `<tr>` (wiersz), `<td>` (komórka) – używane w starszych rozwiązaniach do budowania siatki layoutu.
- `<a>` – hiperłącze (link), w etapie 0 udawało przyciski kalkulatora poprzez nawigację między plikami.

---

## Etap 1: Multi Page Application (MPA z backendem i Tabelami)
*Początki dynamiki. Informacje przesyła się do serwera, który przetwarza je i zwraca całą nową stronę z wynikami.*

- **MPA (Multi Page Application)** – podejście, w którym przy każdej zmianie stanu (np. przesłaniu formularza) serwer odsyła do przeglądarki wyrenderowaną na nowo, pełną strukturę strony HTML (**SSR** - Server-Side Rendering).
- **`<form>` i `<button type="submit">`** – pozwala zgrupować dane i wysłać je żądaniem np. `POST` do backendu do przetworzenia.

---

## Etap 2: Oddzielenie Prezentacji od Struktury (CSS)
*Wyciągnięcie stylów z atrybutów HTML do dedykowanego pliku.*

### Struktura pliku CSS
CSS to arkusze stylów, które opisują, jak przeglądarka ma pokolorować i ułożyć tagi HTML. Plik `.css` działa w oparciu o reguły: definicje selektora i zestaw atrybutów wykończeniowych.

**Przykład:**
```css
.przycisk {
  background-color: #ffcc00; /* Tło elementu */
  font-size: 14px;           /* Wielkość czcionki */
  border-radius: 5px;        /* Zaokrąglenie rogów */
}
```
- **Selektor (`.przycisk`)** – decyduje do kogo trafi reguła (zaczynający się od kropki oznacza w HTML `class="przycisk"`). Podanie samego `button` ostyluje wszystkie pozycje z użyciem tagów `<button>`.
- **Własność (`background-color`) i Wartość (`#ffcc00`)** – konkretna cecha, jaką przypisujemy do wskazanego selektora, zakończona średnikiem.

---

## Etap 3: Single Page Application (SPA), JavaScript i DOM
*Aplikacja przestaje pytać o nową stronę. Logika zaczyna działać po obu stronach lub całkowicie w przeglądarce klienta przy pomocy asynchroniczności, dając wrażenie natychmiastowego działania strony.*

### 1. Drzewo DOM (Document Object Model)
To sposób w jaki przeglądarka zapamiętuje zczytane pojęcia kodu HTML i przetwarza je na pamięć (takie pudełka umieszczone w pudełkach jak na drzewku rodzinnym). Gdy stworzymy w HTML-u przycisk, trafia on jako "węzeł" (Node) do struktur wewnętrznych przeglądarki. Interfejs DOM pozwala w JavaScript dynamicznie wybierać wskazany węzeł tak jak podnosi kubek z biurka.

### 2. Podstawy składni JavaScript'u (manipulacja na obiekcie DOM-u)
Czysty JS ("Vanilla JS") z tej fazy pozwala pobierać te węzły i aktualizować program:
- **Deklaracje:** `const` (zmienna chroniona przed całkowitym nadpisaniem, stała), `let` (zwykła zmienna modyfikowalna).
- **Funkcje (`() => { ... }`) lub (`function doSomething() { ... }`):** Blok gotowego kodu, który się wykona tylko we wezwaniu.
- **Instrukcja warunkowa (`if (...) { ... }`)** - operacja "jeśli prawda, zrób to, w przeciwnym robi to".
- **Selekcja DOM:** np. `const guzik = document.getElementById('jakis-id')` służy do złapania przycisku po jego unikalnym identyfikatorze z HTML'a `id="jakis-id"`. Inną opcją jest nowsze przypasowanie selektorów z CSS - `document.querySelector('.moja-klasa')`.
- **Łapanie zdarzeń:** `guzik.addEventListener('click', wywolajCos)` - nasłuchujemy akcji konkretnego punktu interakcji u użytkowania z przeglądarką.

---

## Etap 4: Nowoczesny Układ (Div i Flexbox/Grid)
*Koniec używania starych HTML-owych tagów `<table>`! Elementy na stronce rozkłada z wykorzystaniem modeli blokowych.*

- **`<div>`** – najpopularniejszy pusty element w HTML. Kontener-pudełko pomagający grupować zawartości bez posiadania wbudowanego stylu i funkcji specjalnej.
- **Flexbox / Grid** – potężne systemy w CSS przypisywane do kontenerów nadrzędnych, układające swoje tak zwane `divy-dzieci` symetrycznie pod różne wielkości odstępów - wyrównując np. paski narzędzi, menu lub numery na klawiaturze, niezależnie jako układ pionowy czy poziomy (i obok siebie w wierszu/siatce!).

---

## Etap 5: Komponenty i środowisko Frameworku React
*Frontend nie polega już na pisaniu gołych zapytań DOM. Środowisko Reacta robi to szybciej polegając pod Virtual DOM przy "komponentalizacji".*

- **Komponent** – w systemie React zamiast z całego skryptu JS i ogromnego pliku HTMLa pisze się osobne i wielokrotnie uzywane małe izolowane sekcje, np `Przycisk.jsx`. Komponent to zwykła JS'owa funkcja, która musi "wypluwać" strukturę wyświetlającej się części (czyli znaczników HTML - tzw JSX).

### Podstawy składni JSX
JSX do format zapisu ułatwiający "mieszanie i wrzucanie kodów JavaScript prosto do wnętrza Tagów upodabniających się od tagów HTML" z bardzo z minimalnymi zmianami form.

**Przykład pliku `.jsx`:**
```jsx
const Button = () => {
  const tytul = "Kliknij Mnie!";

  // Uwaga na camelCase np (zamiast onclick pisze się onClick):
  return (
    <button className="przycisk-styl" onClick={() => console.log('Kliknięto!')}>
      {tytul} 
    </button>
  );
};
```
1. **Atrybuty camelCase:** Znane Ci atrybuty ulegają zapisach o pierwszą małą do kolejnie duża litera (`onclick` to `onClick`, `tabindex` to `tabIndex`).
2. **`className` zamiast `class`:** Od JS, termin `class` ma zakodowane słowo ze starodawnej deklaratury programowania obiektowego. Dla selektorów CSS nadano zastępczo więc odświeżoną wersję (`className`). Nawiasem rzecz biorąc w efekcie w finalnej produkcji używana jest powszechna tradycyjna i poprawna klasa w generowanym standardowym kodzie HTMLa.
3. **Klamry `{ ... }`:** To jedyna furtka by "przebić z warstwy HTML'a do warstwy czystej logiki Javascript". Pozwala wpisać nam matematykę, zwrócić obiekty tekstowe zdefiniowane wyżej po stronie z programowaniem czy wywołanie funkcji do interakcji w renderze. To samo rozwiązanie u HTMLa trzeba obsłużyć zewnętrznymi operacjami z podmianą struktury tekstowych w elementach po stornie odwołanie `id`.

- **State (Stan, np. `useState`)** – React nie zmienia za nas "w locie" po wylistowanych odwołanej do elementu by np dopisać mu nową nazwę do znacznika `button` u HTMLa jak w `script.js` z Etapu 3! Komponent deklaruje wewnętrzną pojemność w zmienną określoną "stanem" np. `const [wynik, setWynik] = useState('0')`. Za każdym gdy nastąpi aktualizacja by użyć podwykonawcy np. przez zapis `setWynik('5')` - Komponent **wymusi całkowity "refresh render" od siebie samego (Virtual Dom).** i podmieni w oknie cyferki tak, gdy wszystko po pod nowym stanem "wyrenderowane z logiki".

---

## Etap 6: React + Utility-First CSS (Tailwind)
*Ograniczenie rozrzucania kodu wyglądu i wrócenie części logiki formatujących do jednego scentralizowanego w miejscu z dokumentem.*

- Zamiast do osobnego `style.css` pisać np. `.przycisk { background: blue; padding: 4px; }`...
- Korzystamy ze specyficznych "narzędziowych klas" pod **TailwindCSS** (w skrócie - skompilowanych gotowych, krótkich regułek na wszystkie sytuacje do układu), nadając elementowi cechy rzędami jak polecenia na ułożenia do budowania:  
  `<button className="bg-blue-500 py-4 px-2 flex justify-center text-white ...">`

Usuwa to obowiązek od przeskakiwania po dwóch monitorów by sprawdzać jaki plik nazwaliśmy dla selektora. Klasy same ucieleśniają cały format danego pudła na jednym dokumencie `JSX`.
`flex` - włączenie formatowania elementów w elastycznej ramce flexbox'owej.
`justify-center` - wyśrodkowanie osiowe.
`p-4` - wewnętrznego przestrzennego wyciszenia brzegowego, czyli padding!
