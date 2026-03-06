# Historia stron internetowych

Jest to prosty webowy kalkulator zaimplementowany w różnych stylach pokazujący rózne etapy rozwoju stron internetowych.

Każdy etap to osobny katalog (`etap-0`, `etap-1`, `etap-2` itd.). Każdą wersję można uruchomić lokalnie przy pomocy node.js i yarn.

## Etap 0: Prawdziwy Web 1.0 (Same pliki HTML)

Przedstawia stronę zbudowaną wyłącznie ze statycznych plików HTML wygenerowanych skryptem. Każde kliknięcie "przycisku" to w rzeczywistości przejście do nowej, wygenerowanej podstrony. Obsługuje tylko pojedyncze cyfry bez znaku (0-5) i działania na nich w tym samym zakresie.

## Etap 1: HTML + layout tabelaryczny + backend - Multi Page Application

Przedstawia stronę zbudowaną przy pomocy tabel HTML. Backend jest napisany w node.js i udostępnia API do obliczania wartości. Jest to najprostsza wersja strony. Wszelkie style są zdefiniowane bezpośrednio w HTMLu jako atrybuty.

## Etap 2: HTML + CSS + backend - Multi Page Application

Przedstawia stronę zbudowaną przy pomocy tabel HTML. Backend jest napisany w node.js i udostępnia API do obliczania wartości. Wszelkie style są zdefiniowane w osobnym pliku CSS.

## Etap 3: HTML + CSS + JavaScript - Single Page Application

Przedstawia stronę zbudowaną przy pomocy tabel HTML. Backend jest zastąpiony przez JavaScript w przeglądarce, który oblicza wartości lokalnie. Wszelkie style są zdefiniowane w osobnym pliku CSS.

## Etap 4: HTML/divy + CSS + JavaScript - Single Page Application

Przedstawia stronę zbudowaną przy pomocy divów. Backend jest zastąpiony przez JavaScript, który oblicza wartości lokalnie. Wszelkie style są zdefiniowane w osobnym pliku CSS.

## Etap 5: HTML/divy + CSS + React - Single Page Application

Przedstawia stronę zbudowaną przy pomocy divów. Backend jest zastąpiony przez JavaScript, który oblicza wartości lokalnie. Wszelkie style są zdefiniowane w osobnym pliku CSS. Strona jest zbudowana przy pomocy frameworka React.

## Etap 6: HTML/divy + CSS + React + Tailwind - Single Page Application

Przedstawia stronę zbudowaną przy pomocy divów i frameworka React. Style są zdefiniowane przy pomocy Tailwind CSS.
