# AI Kullanım Notları

Bu projede yapay zekâ asistanı olarak Claude kullanıldı. Promptlar, öneri değerlendirmeleri ve kod açıklamaları aşağıdadır.

## 1. Kullanılan promptlar

### Prompt 1: Planlama
**Amaç:** Dosya yapısını ve kabul ölçütlerini önceden belirlemek.

> "Yazılım araçları hakkında, yeni başlayanlar için üç sayfalık bir site tasarlıyorum. Beş içerik başlığım: Visual Studio Code, Git, GitHub, Postman, Chrome DevTools. HTML, CSS ve JavaScript kullanacağım. Ortak menüyü ve başlığa göre aramayı nasıl kurabilirim? Önce dosyaları ve kabul ölçütlerini öner; henüz kod yazma."

### Prompt 2: Arama fonksiyonu
**Amaç:** Label'lı arama kutusu, sonuç sayacı, boş sonuç mesajı ve Temizle düğmesini eklemek.

> "icerikler.html sayfasına label ile etiketlenmiş bir arama kutusu ekle. Yazdıkça yalnızca kart başlıklarını filtrele, sonuç sayısını göster, sonuç yoksa mesaj çıkar ve bir Temizle düğmesi olsun."

### Prompt 3: Erişilebilirlik ve mobil düzen
**Amaç:** 390 px genişlikte yatay taşmayı önlemek ve klavye odağını görünür yapmak.

> "style.css için 390 px genişlikte yatay kaydırma olmayan, Tab ile gezinirken odağı belirgin gösteren bir düzen öner."

## 2. Öneri değerlendirmeleri

**Kabul ettiklerim**
- Arama için `input` olayını dinlemek: kullanıcı yazdıkça sonuç güncelleniyor, ayrıca bir "Ara" düğmesine gerek kalmıyor.
- Kartları silip yeniden oluşturmak yerine `hidden` sınıfını açıp kapatmak: kodu kısaltıyor ve kartların HTML'de kalmasını sağlıyor.
- `:focus-visible` ile sarı odak çerçevesi: klavyeyle gezinen biri nerede olduğunu görebiliyor.

**Ödev şartlarına göre tercih ettiklerim**
- Ödev "yalnızca başlıkları filtrelemelidir" dediği için aramayı kart açıklamasına değil, sadece başlığa (`data-title`) bağladım.
- Metni küçük harfe çevirmek için `toLowerCase()` yerine `toLocaleLowerCase("tr-TR")` kullandım; çünkü Türkçe karakterlerde (İ, ı) doğru sonuç veriyor.

## 3. Kod açıklamaları (kendi sözlerimle)

### Açıklama 1: `normalize` fonksiyonu
```js
function normalize(text) {
  return text.toLocaleLowerCase("tr-TR").trim();
}
```
Bu fonksiyon hem kart başlığını hem de kullanıcının yazdığını aynı biçime getirir: harfleri küçültür ve baştaki/sondaki boşlukları siler. Böylece "POSTMAN", "postman" ve "  Postman " aynı sonucu verir. Türkçe yerel ayarı kullanıldığı için "İ" harfi doğru küçülür.

### Açıklama 2: `input` olay dinleyicisi ve `filterCards`
```js
searchInput.addEventListener("input", filterCards);
```
Kutuya her harf yazıldığında veya silindiğinde `filterCards` çalışır. Bu fonksiyon her kartın başlığına bakar; yazılan metin başlıkta geçiyorsa kartı gösterir, geçmiyorsa `hidden` sınıfıyla gizler. Gösterilen kartlar sayılır, sayı ekrana yazılır. Sayı 0 ise boş sonuç mesajı görünür hale getirilir.

## 4. Kod incelemesi (code review)

> TODO (teslimden önce kendin doldur): Değişen satırları GitHub'da veya `git diff` ile açıp kendi gözlemlerini yaz. Aşağıdakiler incelerken bakabileceğin noktalardır.

- Arama yalnızca `data-title` değerine bakıyor; açıklama metni aranmıyor.
- Yalnızca boşluk yazılınca `normalize` boşlukları sildiği için sorgu boş sayılıyor ve tüm kartlar görünüyor (bkz. TEST_NOTLARI.md, Test 4).
- Sayfa yüklendiğinde `filterCards()` bir kez çağrılıyor; böylece sonuç sayacı ilk açılışta da "5 sonuç bulundu" gösteriyor.
