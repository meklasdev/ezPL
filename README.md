# Ciśnienie w normie - Kawiarnia Website

Kompletna strona internetowa dla kawiarni "Ciśnienie w normie" z nowoczesnym designem glassmorphism.

## 🎨 Funkcje

- **Glassmorphism UI** - Efekt szklanego szkła dla wszystkich kart i paneli
- **100% Responsywność** - Doskonale wygląda na wszystkich urządzeniach
- **Animacje** - Subtelne animacje pary kawy, unoszących się ziaren i efektów hover
- **Sekcje**:
  - Hero z animowaną parą kawy
  - O nas z informacjami o kawiarni
  - Menu z kategoriami kawy i jedzenia
  - Rezerwacja z formularzem wyboru stolika
  - Kontakt z mapą i danymi kontaktowymi

## 🎯 Technologie

- **React 18** - Nowoczesny framework JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Szybki bundler i dev server
- **Font Awesome** - Ikony
- **Google Fonts** - Typografia (Playfair Display, Inter, Dancing Script)

## 🚀 Szybki start

### Wymagania
- Node.js 16+ 
- npm lub yarn

### Instalacja

1. **Sklonuj repozytorium**
```bash
git clone <repository-url>
cd cisnienie-w-normie-cafe
```

2. **Zainstaluj zależności**
```bash
npm install
```

3. **Uruchom serwer deweloperski**
```bash
npm run dev
```

4. **Otwórz przeglądarkę**
```
http://localhost:3000
```

### Build dla produkcji
```bash
npm run build
```

## 🎨 Paleta kolorów

- **Jasny kremowy**: `#F6F1EB`
- **Ciepły beż**: `#D9C5B2`
- **Głęboki brąz**: `#5B4636`
- **Zieleń oliwkowa**: `#7C8B5A`
- **Zgaszona terakota**: `#B86B5B`
- **Biały**: `#FFFFFF`

## 📱 Responsywność

Strona jest w pełni responsywna i zoptymalizowana dla:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ✨ Efekty Glassmorphism

- Tło kart: `rgba(255, 255, 255, 0.15)`
- Obramowanie: `1px solid rgba(255, 255, 255, 0.3)`
- Cień: `0 8px 32px rgba(0, 0, 0, 0.15)`
- Efekt rozmycia: `backdrop-filter: blur(10px)`

## 🎭 Animacje

- **Pływająca kawa** - Logo z animowaną parą
- **Unoszące się ziarna** - Tło z animowanymi ziarnami kawy
- **Hover effects** - Subtelne powiększenie kart menu
- **Smooth scrolling** - Płynne przewijanie między sekcjami

## 📋 Struktura projektu

```
src/
├── components/
│   ├── Hero.jsx          # Sekcja główna
│   ├── About.jsx         # O nas
│   ├── Menu.jsx          # Menu kawiarni
│   ├── Reservation.jsx   # Formularz rezerwacji
│   ├── Contact.jsx       # Kontakt i mapa
│   └── Navigation.jsx    # Nawigacja
├── App.jsx               # Główny komponent
├── main.jsx              # Entry point
└── index.css             # Style globalne
```

## 🔧 Konfiguracja

### Tailwind CSS
Konfiguracja w `tailwind.config.js` zawiera:
- Niestandardowe kolory
- Fonty Google
- Animacje CSS
- Efekty glassmorphism

### Vite
Konfiguracja w `vite.config.js` z:
- Plugin React
- Port 3000
- Auto-open browser

## 📞 Rezerwacje

Formularz rezerwacji zawiera:
- Dane osobowe (imię, nazwisko, email, telefon)
- Wybór daty i godziny
- Wybór stolika (3 opcje):
  - Stół przy oknie
  - Stół w rogu
  - Stół na zewnątrz
- Liczba gości
- Dodatkowe informacje

## 🗺️ Mapa

Sekcja kontaktowa zawiera:
- Google Maps embed
- Dane adresowe
- Godziny otwarcia
- Social media
- Newsletter signup

## 🎨 Typografia

- **Nagłówki**: Playfair Display (bold/semibold)
- **Tekst**: Inter (regular)
- **Cytaty/Akcenty**: Dancing Script

## 📄 Licencja

Projekt stworzony dla kawiarni "Ciśnienie w normie".

## 🤝 Kontakt

W przypadku pytań lub sugestii dotyczących projektu, prosimy o kontakt.

---

**Ciśnienie w normie** - Gdzie każda filiżanka to chwila relaksu ☕