# DevKit Rehberi

BPR201 - İnternet Tabanlı Programlama · Haftalık Proje Ödevi - 2

## Proje amacı

DevKit Rehberi, yazılıma yeni başlayanlar için beş temel geliştirme aracını (Visual Studio Code, Git, GitHub, Postman, Chrome DevTools) tanıtan üç sayfalık bir web sitesidir. Her araç için kısa bir açıklama, kategori ve denenebilecek ilk görev verilir. Ziyaretçi, İçerikler sayfasındaki arama kutusuyla araçları başlığa göre bulabilir.

**Hedef kitle:** İlk kez kod yazmaya başlayan öğrenciler ve kendi kendine öğrenenler.

## Sayfalar

| Sayfa | Dosya | İçerik |
|---|---|---|
| Ana Sayfa | `index.html` | Site adı, hedef kitle, kısa tanıtım ve İçerikler sayfasına bağlantı |
| İçerikler | `icerikler.html` | Beş içerik kartı, başlığa göre arama, sonuç sayacı, boş sonuç mesajı, Temizle düğmesi |
| Hakkında | `hakkinda.html` | Konunun seçilme gerekçesi ve sitenin ziyaretçiye faydası |

Üç sayfada da aynı menü ve aynı `style.css` kullanılır.

## Çalıştırma adımları

1. Repository'yi klonlayın veya ZIP olarak indirip çıkarın.
2. Klasörde `index.html` dosyasını tarayıcıda açın (çift tıklamak yeterlidir).
3. Alternatif: VS Code'da Live Server eklentisiyle veya Codespaces içinde `python3 -m http.server 8000` komutuyla açın.

Backend, veritabanı veya giriş sistemi yoktur; arama tamamen tarayıcıda çalışır.

## Dosya yapısı

```
├── index.html
├── icerikler.html
├── hakkinda.html
├── style.css
├── script.js
├── README.md
├── AI_NOTLARI.md
├── TEST_NOTLARI.md
└── ekran_goruntuleri/
    ├── 01_normal_arama.png
    ├── 02_bos_sonuc.png
    └── 03_mobil_gorunum.png
```

## Belgeler

- [AI_NOTLARI.md](AI_NOTLARI.md): Kullanılan promptlar, öneri değerlendirmeleri ve kod açıklamaları
- [TEST_NOTLARI.md](TEST_NOTLARI.md): Altı testin beklenen ve gerçekleşen sonuçları

## Repository bağlantısı

GitHub: **https://github.com/KULLANICI_ADI/REPO_ADI** (öğretim elemanının erişebilmesi için repository herkese açık olmalıdır)
