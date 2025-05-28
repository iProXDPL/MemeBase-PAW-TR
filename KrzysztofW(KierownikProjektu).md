# Sprawozdanie z pełnienia funkcji kierownika projektu

## Projekt: Aplikacja do wyświetlania memów (technologie MERN)

Na potrzeby realizacji projektu zespołowego zostałem wybrany na stanowisko **kierownika projektu**. Decyzja została podjęta przeze mnie, ponieważ nikt inny nie chciał objąć tej roli. Zgłosiłem się głównie ze względu na moje doświadczenie w pracy z technologiami wybranymi do realizacji projektu.

---

## Wybór technologii

Wspólnie z zespołem przeanalizowaliśmy różne stosy technologiczne, uwzględniając wymagania funkcjonalne oraz nasze umiejętności. Finalnie zdecydowaliśmy się na wykorzystanie stosu **MERN**, w skład którego wchodzą:

* **MongoDB** – baza danych NoSQL
* **Express.js** – framework backendowy dla Node.js
* **React** – biblioteka frontendowa do tworzenia interfejsu użytkownika
* **Node.js** – środowisko uruchomieniowe dla JavaScript

---

## Zarządzanie projektem

W ramach organizacji pracy nad projektem:

* Założyłem repozytorium na **GitHubie** oraz skonfigurowałem strukturę projektu. Utworzyłem główne **branche**: `frontend`, `backend` oraz `dokumentacja`.
* Utworzyłem **milestone'y** odpowiadające kluczowym etapom realizacji projektu:

  * Inicjalizacja projektu
  * System logowania i rejestracji
  * Tworzenie i zarządzanie postami
  * Ranking i pozostałe funkcjonalności
  * Docker aplikacji
* Rozpisałem zadania dla pierwszego i drugiego **milestone’a** jako **issues** na GitHubie i przydzieliłem je członkom zespołu zgodnie z ich kompetencjami.
* Po wykonaniu pierwszego i drugiego **milestone’a** dotyczących logowania, zorganizowałem spotkanie w celu połączenia backendu z frontendem. Sprawdziliśmy, czy wszystko działa poprawnie i czy nie występują błędy.
* Po weryfikacji działania aplikacji:

  * Branche `frontend` i `backend` zostały zmergowane do `main`
  * Oryginalne branche zostały przemianowane odpowiednio na `FrontendPierwszyMilestone` i `BackendPierwszyMilestone`
  * Utworzyłem nowe, czyste branche: `frontend`, `backend`, `docker`
* Następnie rozpisałem zadania dla trzeciego **milestone’a** jako kolejne **issues** na GitHubie i ponownie przydzieliłem je członkom zespołu.

---

### Trzeci i czwarty milestone – kluczowe funkcjonalności

W ramach trzeciego i czwartego milestone’a skoncentrowaliśmy się na kluczowych funkcjonalnościach aplikacji, czyli tworzeniu, edytowaniu, usuwaniu postów oraz ich rankingu:

#### Backend:

* Modele danych w MongoDB dla postów.
* Endpointy REST API do tworzenia, edycji, usuwania postów, ich oceniania (ranking) oraz lajkowania.
* Logika odpowiedzialna za ranking postów według liczby polubień, czasu publikacji oraz mechanizm dodawania i usuwania lajków.

#### Frontend:

* Formularze do dodawania i edycji oraz usuwania postów.
* Interfejs do zarządzania listą postów oraz widok rankingu.

---

Po ukończeniu implementacji zorganizowałem spotkanie zespołu w celu przetestowania funkcjonalności oraz weryfikacji poprawności działania kodu.

* Po pozytywnym zakończeniu testów, wykonaliśmy merge do głównej gałęzi `main` oraz zarchiwizowaliśmy wcześniejsze branche:

  * `FrontendDrugi/TrzeciMilestone` oraz `BackendDrugi/TrzeciMilestone` zostały utworzone dla celów archiwizacji.

---

Następnie przygotowałem nowe, czyste branche: `frontend`, `backend` oraz zahostowałem stronę na darmowym hostingu w celu zapoznania się z hostowaniem aplikacji.

---

Następnym krokiem będzie pozbycie się błędów oraz dodanie Dockera.
Po dodaniu Dockera oraz usunięciu błędów i mergowaniu tego, projekt będzie ukończony z wcześniejszymi założeniami.

---

**Podpis:**
Kierownik projektu – Krzysztof W
