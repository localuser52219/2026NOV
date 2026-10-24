# 海岸與城市｜芭堤雅 × 曼谷

可運作的七天互動旅程指南初版。使用繁體中文、HTML/CSS、原生 JavaScript ES Modules、Leaflet 1.9.4、OpenStreetMap 與 localStorage。無建置依賴、無後端、無登入。

**尚未發布 GitHub Pages。** 使用者未指定新網站的目標倉庫；沒有修改或覆蓋參考倉庫 `remtoec/2026D3Trip`。

## 原始資料與固定安排

- 使用者上載圖片：`photo_2026-10-25_00-36-46(1).jpg`。原圖不含年份；星期與 2026 相符，暫以 **2026-10-31 至 2026-11-06** 建檔，年份狀態仍為 Unverified。
- 逐日轉錄 71 行原表安排，建立 36 個活動實體。11月3日由芭堤雅轉曼谷。
- 原表明確標 booked：The Sky Gallery 17:15、Here Hai 13:30、Copper Beyond Buffet（19…被截字）、Lay Lao Silom 19:30。
- 已確認狀態的依據為使用者表上的 booked，沒有核實訂位系統、訂位人數、付款或訂單編號；Copper 分店與完整時間不得推定。
- 原表抵達機場及航班未列。回程原表為 BKK、TG602、18:10–21:55；航線、機票與到達時區未核實。
- 芭堤雅及曼谷住宿名稱、地址、人數、預算與費用未提供，保留 null／未確認。
- 沒有代訂、付款或聯絡任何店家。

## 本機使用

在解壓後的專案根目錄執行：

```sh
python3 -m http.server 8080
```

瀏覽 `http://localhost:8080/`。ES Modules 不支援直接以 `file://` 雙擊開啟。

驗證資料、匯入關係、JavaScript 語法及預算：

```sh
node tools/check-data.mjs
```

## GitHub Pages 部署

1. 建立專用的新倉庫，或使用你指定且授權的目標倉庫，勿覆蓋北海道參考網站。
2. 把本套完整檔案放進倉庫根目錄；`index.html` 必須位於根目錄。
3. GitHub 倉庫 Settings → Pages → Deploy from a branch，選擇目標分支及 `/ (root)`，儲存。
4. 使用 GitHub 回傳的 Pages 網址，不要自行假設已發布成功。
5. 本程式所有本地資產使用相對路徑，支援 `/repository-name/` 子目錄；hash 路由不需要伺服器 rewrite。

若使用私人倉庫，先核對你的 GitHub 方案與 Pages 支援。Pages 發布後的閱覽權限與倉庫權限須另行確認。勿把機票條碼、訂單編號、證件、門鎖碼或非公開住宿地址加入公開版本。

## 檔案結構

| 路徑 | 用途 |
|---|---|
| `index.html` | HTML 入口、導覽、詳情 dialog |
| `assets/itinerary-data.js` | 唯一旅程資料來源；ESM 匯出 DATA，亦掛在 window.ITINERARY_DATA |
| `assets/photos.js` | 圖片網址、作者、原始頁面、授權及用途 |
| `assets/theme.css` | 淺色／深色設計 tokens |
| `assets/app.css` | 手機、桌面及各元件樣式 |
| `assets/js/main.js` | 主入口、事件、匯入匯出及表單處理 |
| `assets/js/router.js` | hash 路由 |
| `assets/js/state.js` | 收藏、主題、預算及待辦本機儲存 |
| `assets/js/trip.js` | 查找、時間、狀態、Google Maps 連結 |
| `assets/js/map.js` | Leaflet 及失敗備援 |
| `assets/js/budget.js` | 整數分攤及守恆運算 |
| `assets/js/ui.js` | 照片、卡片、詳情與提示 |
| `assets/js/views/` | 今日、行程、景點、想去、住宿預算 |
| `tools/check-data.mjs` | 結構、引用、日期、價格、語法、分攤檢查 |
| `RESEARCH.md` | 已查核來源與未核實範圍 |
| `QA.md` | 驗證結果及已知限制 |
| `.nojekyll` | 靜態 Pages 發布標記 |

## 資料模型及維護

根欄位包括 trip、travelers、transport、hotels、bases、days、activities、excluded、route、budget、todo、usefulLinks、updated、sources。

- 每個實體均有唯一穩定 ID。每日事件以 activityId、hotelId、transportIds 引用資料。`events.text` 是保留原始表格內容的轉錄證據，不應被誤認為最新營業資料；新官方資訊寫在活動詳情。
- status 是 Confirmed／Planned／Optional／Unverified／Excluded。bookingStatus 獨立表示預訂狀態；來源可信度另放 confidence。
- unknown amount 一律 null。原幣及幣別須並存。不要把官網一般價寫成使用者已付款。
- coords 目前全部是標示清楚的約略區域位置，並非經核實入口。未知座標保持 null，導航使用名稱搜尋，讓使用者先核對。
- fromBaseMinutes 目前全部 null。補充住宿後才逐項研究實際交通；限時篩選會排除未知時間，不會把它們當成零分鐘。
- sources 每項為 `[標籤, URL, official|traveler]`。checked 只表示曾查核部分來源，不表示所有欄位已核實。
- 更新日期、人數、交通模式請改 trip 與相應實體。變更日期時須同步 days、hotels、活動 days 及來源轉錄；不要只改畫面文字。
- 新增／刪除活動時更新來源、日程引用、圖片及相關驗證，不能以刪除真實行程通過檢查。

## 功能

- 今日：按 Asia/Bangkok 日期判定出發前、旅途中或旅程後；旅程前顯示第一天、結束後保留最後一天。
- 行程：七天日期選單、左右掃動、原始安排、衝突、替代方案及位置地圖。
- 景點：基地、類別、日期、時段、預約、推薦、收藏、交通上限、文字搜尋、六項分頁。手機卡片左右掃動；桌面清單與地圖並列。
- 詳情：`#/item/sky`，獨立公共交通、汽車及步行導航、來源與未核實欄位。
- 日期深連結：`#/days/2026-11-03`。篩選深連結：`#/explore?base=bangkok&cat=Culture`。
- 想去：本機收藏、取消、複製名稱＋適合日期＋地圖連結。Clipboard API 不可用時顯示文字框供手動複製。
- 備份：匯出／匯入本機收藏、成員、預算、待辦 JSON；不跨裝置自動同步。
- 預算：自行填成員，每項選實際參與者，一人／多人／分隊皆可；THB/HKD/USD/JPY，非 THB 須輸入匯率、日期與來源。
- 深淺色：預設跟系統，可切換並儲存。地圖或圖片失敗不影響清單及名稱導航。

## 財務規則

- 匯率定義：1 原幣 = rate THB，沒有提供即不自行估算。
- 每項按換算後泰銖「分」四捨五入，再平均分攤；不足整除的餘數按參與者順序逐分分配。
- 全組已計入小計 = 各成員分攤總和。100 THB 三人為 33.34／33.33／33.33。
- 空白金額為未知並另計數；手動填 0 是使用者明確輸入值。
- 本頁為預算分攤，不是誰代付給誰的結算系統，也不表示已付款。
- 沒有完整旅程預算上限，故不顯示假剩餘預算或假完成百分比。

## 設計規則

暖米白、深河綠及黃銅色；文化旅程雜誌式排版，照片先行、詳情分層。手機底部五分頁，桌面延伸行程、地圖與來源；元件顏色由 theme.css 管理。

目前只使用兩張 CC BY-SA 城市照片，標明「城市意象，非各景點實景」，不是各餐廳或住宿照片。來源與授權見 photos.js／RESEARCH.md。後續應逐項補有合法授權的實景照片，勿用不存在的酒店照片。

## 交付界線

程式可操作，並非已完全核實的旅行定案。特別是年份、住宿、人數、餐廳分店、營業及價格、海上套餐、船期、機票仍待補。GitHub 連線僅用於讀取參考專案，未寫入現有正式分支。
