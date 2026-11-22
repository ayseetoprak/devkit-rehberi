# Test Notları

Testler Google Chrome'da `icerikler.html` (ve menü testi için üç sayfa) üzerinde yapıldı. Toplam 5 içerik kartı vardır.

| # | Girdi | Beklenen sonuç | Gerçekleşen sonuç | Sonuç |
|---|---|---|---|---|
| 1 | Ayırt edici bölüm yazıldı: `postman` | Yalnızca eşleşen kart görünür; sayaç bu sayıya eşittir. | Yalnızca "Postman" kartı göründü; sayaç "1 sonuç bulundu". | Geçti |
| 2 | Harf büyüklüğü değiştirilip kenarlara boşluk eklendi: `  PoStMaN  ` | Aynı başlık eşleşir. | Yine yalnızca "Postman" kartı göründü; sayaç "1 sonuç bulundu". | Geçti |
| 3 | Hiçbir başlıkta olmayan ifade: `zzzxyz` | Sayaç 0 olur ve boş sonuç mesajı görünür. | Sayaç "0 sonuç bulundu"; "Aramanızla eşleşen içerik bulunamadı" mesajı göründü. | Geçti |
| 4 | Temizle'ye basıldı; sonra yalnızca boşluk yazıldı: `   ` | İki durumda da tüm kartlar görünür. | Temizle sonrası 5 kart göründü, mesaj gizlendi. Yalnızca boşlukla da 5 kart göründü. | Geçti |
| 5 | Her sayfadaki menü bağlantıları açıldı (3 sayfa × 3 bağlantı) | Bağlantılar doğru sayfalara gider. | 9 bağlantının tamamı doğru sayfayı açtı. | Geçti |
| 6 | Ekran 390 px genişliğe getirildi; Tab ile gezildi | Yatay taşma olmaz; input ve düğmeye klavyeyle ulaşılır. | Yatay kaydırma oluşmadı. Tab sırası: logo → 3 menü bağlantısı → arama kutusu → Temizle düğmesi. | Geçti |

## Ek kontroller

- Tarayıcı konsolunda JavaScript hatası görülmedi.
- Test 1 sırasında alınan ekran görüntüsü: `ekran_goruntuleri/01_normal_arama.png`
- Test 3 sırasında alınan ekran görüntüsü: `ekran_goruntuleri/02_bos_sonuc.png`
- Test 6 sırasında alınan ekran görüntüsü: `ekran_goruntuleri/03_mobil_gorunum.png`
