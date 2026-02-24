# 2 Perbedaan Utama dari Tailwind v3 dan v4

Berikut adalah dua perbedaan arsitektur yang paling menonjol antara Tailwind CSS versi 3 dan versi 4:

## 1. Konfigurasi CSS

*   **Tailwind v3:** Menggunakan file eksternal `tailwind.config.js` untuk mendefinisikan *theme*, *plugin*, dan customisasi lainnya. Konfigurasi ini ditulis dalam bentuk objek JavaScript.
*   **Tailwind v4:** Menggunakan pendekatan **variabel CSS modern**, sehingga konfigurasi dilakukan langsung di dalam file CSS. Kita tidak lagi membutuhkan tab/file konfigurasi JavaScript yang terpisah. Sebagai gantinya, kustomisasi dilakukan menggunakan *directive* `@theme` langsung di dalam file CSS tersebut.

## 2. Penggantian `@tailwind` Directive

*   **Tailwind v3:** Kita perlu menggunakan instruksi khusus (*directive*) `@tailwind` di dalam file CSS untuk mengimpor *style* dasar, komponen, dan utilitas:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
*   **Tailwind v4:** Instruksi khusus `@tailwind` telah dihapus seutuhnya. Sebagai gantinya, versi terbaru ini sudah mendukung impor native CSS biasa. Kita hanya cukup menuliskan satu baris berikut pada file CSS utama:
    ```css
    @import "tailwindcss";
    ```
