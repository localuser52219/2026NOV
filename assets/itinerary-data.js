export const DATA = {
  "trip": {
    "id": "thailand-coast-city-2026",
    "name": "海岸與城巿",
    "subtitle": "芭堤雅 × 曼谷・七日旅程指南",
    "country": "Thailand",
    "start": "2026-10-31",
    "end": "2026-11-06",
    "timezone": "Asia/Bangkok",
    "yearStatus": "Unverified",
    "yearBasis": "原圖星期與 2026 吻合，未明示年份",
    "departure": "未確認",
    "pax": null,
    "mode": "mixed",
    "pace": "原表較緊密；保留安排並標示衝突",
    "currency": "THB",
    "inputSource": "使用者上載行程表 photo_2026-10-25_00-36-46(1).jpg"
  },
  "travelers": [],
  "transport": [
    {
      "id": "arrival",
      "name": "抵達泰國機場 → 芭堤雅",
      "status": "Planned",
      "details": "11:30 抵達、14:00 上路（原表）；機場、航班、車輛及費用未確認"
    },
    {
      "id": "transfer",
      "name": "芭堤雅 → 曼谷",
      "status": "Planned",
      "details": "11月3日 11:00 出發（原表）；規劃預留約 3–4 小時含塞車、寄存及轉乘，非實測導航，13:30 訂位有衝突"
    },
    {
      "id": "return",
      "name": "TG602 回程",
      "status": "Planned",
      "details": "11月6日 BKK；18:10–21:55 為原表文字，未核實機票、目的地及時區"
    }
  ],
  "hotels": [
    {
      "id": "stay-pattaya",
      "name": "芭堤雅住宿｜未提供",
      "base": "pattaya",
      "checkin": "2026-10-31",
      "checkout": "2026-11-03",
      "status": "Unverified",
      "address": null,
      "room": null,
      "cost": null
    },
    {
      "id": "stay-bangkok",
      "name": "曼谷 Airbnb｜名稱未提供",
      "base": "bangkok",
      "checkin": "2026-11-03",
      "checkout": "2026-11-06",
      "status": "Unverified",
      "address": null,
      "room": null,
      "cost": null
    }
  ],
  "bases": [
    {
      "id": "pattaya",
      "name": "芭堤雅基地",
      "dates": [
        "2026-10-31",
        "2026-11-01",
        "2026-11-02"
      ],
      "hotelId": "stay-pattaya",
      "coords": [
        12.93,
        100.88
      ],
      "note": "市區約略中心，非住宿位置；基地交通時間未能計算",
      "range": "住宿地址待補，不以市中心代替"
    },
    {
      "id": "bangkok",
      "name": "曼谷基地",
      "dates": [
        "2026-11-03",
        "2026-11-04",
        "2026-11-05",
        "2026-11-06"
      ],
      "hotelId": "stay-bangkok",
      "coords": [
        13.74,
        100.54
      ],
      "note": "市區約略中心，非住宿位置；住宿附近探索範圍待確認",
      "range": "按原表區分河岸、Silom、Phrom Phong，非同一酒店周邊"
    },
    {
      "id": "transfer",
      "name": "跨城轉場",
      "kind": "Transfer",
      "dates": [
        "2026-11-03"
      ],
      "coords": null,
      "note": "與住宿周邊活動分開",
      "range": "先保留交通及行李時間"
    }
  ],
  "days": [
    {
      "id": "2026-10-31",
      "date": "2026-10-31",
      "title": "抵埗，向海出發",
      "base": "pattaya",
      "kind": "Transfer",
      "hotelId": "stay-pattaya",
      "transportIds": [
        "arrival"
      ],
      "participants": null,
      "route": "機場 → 芭堤雅",
      "events": [
        {
          "time": "11:30",
          "activityId": null,
          "text": "抵達機場（機場未確認）",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "12:00",
          "activityId": null,
          "text": "入境／取行李",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "12:30",
          "activityId": null,
          "text": "機場午餐",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "13:30",
          "activityId": null,
          "text": "集合／上車",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "14:00",
          "activityId": null,
          "text": "前往芭堤雅",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "15:30",
          "activityId": null,
          "text": "辦理入住／休息",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "16:30",
          "activityId": "sky",
          "text": "前往 The Sky Gallery（飲桔水）",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "17:15",
          "activityId": "sky",
          "text": "The Sky Gallery（booked 1715）",
          "status": "Confirmed",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "18:30",
          "activityId": "thep",
          "text": "Thepprasit 夜市",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "19:00",
          "activityId": "beach",
          "text": "海灘街",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "19:30",
          "activityId": "walking",
          "text": "步行街－萬聖節",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "20:30",
          "activityId": null,
          "text": "Big C／7-11 買水",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        }
      ],
      "warnings": [
        "入境、入住與 17:15 餐廳訂位緩衝有限。",
        "原表晚間節目密集；延誤時夜市或步行街可縮短。"
      ],
      "backup": "下雨／臨時取消時：保留已訂用餐，減少戶外活動，改室內商場或住宿休息；先確認住宿位置。"
    },
    {
      "id": "2026-11-01",
      "date": "2026-11-01",
      "title": "動物園與海鮮晚餐",
      "base": "pattaya",
      "kind": "Stay",
      "hotelId": "stay-pattaya",
      "transportIds": [],
      "participants": null,
      "route": "芭堤雅 → 是拉差 → 芭堤雅",
      "events": [
        {
          "time": "08:45",
          "activityId": null,
          "text": "出門",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "09:30",
          "activityId": "eak",
          "text": "Eak Fish Balls（原表 7am open）／Neon Boat Noodles（原表 10am open）",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "11:00",
          "activityId": "zoo",
          "text": "Khao Kheow Open Zoo 動物園",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "17:00",
          "activityId": "relax",
          "text": "Let’s Relax massage",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "19:30",
          "activityId": "pupen",
          "text": "Pupen Seafood 晚餐",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        }
      ],
      "warnings": [
        "動物園與按摩分店未確認接駁，17:00 到店時間有風險。"
      ],
      "backup": "下雨／臨時取消時：保留已訂用餐，減少戶外活動，改室內商場或住宿休息；先確認住宿位置。"
    },
    {
      "id": "2026-11-02",
      "date": "2026-11-02",
      "title": "Koh Larn 海島日",
      "base": "pattaya",
      "kind": "Stay",
      "hotelId": "stay-pattaya",
      "transportIds": [],
      "participants": null,
      "route": "芭堤雅 → Koh Larn → 芭堤雅",
      "events": [
        {
          "time": "08:30",
          "activityId": null,
          "text": "早餐",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "09:00",
          "activityId": "koh",
          "text": "前往出海／潛水集合點",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "10:00",
          "activityId": "koh",
          "text": "乘船前往活動地點 Koh Lan",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "11:00",
          "activityId": "koh",
          "text": "水上活動：香蕉船",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "11:30",
          "activityId": "koh",
          "text": "水上活動：水上電單車",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "12:00",
          "activityId": "koh",
          "text": "水上活動：潛水體驗",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "13:30",
          "activityId": null,
          "text": "午餐",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "15:00",
          "activityId": null,
          "text": "回程",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "16:00",
          "activityId": null,
          "text": "回 Airbnb 整理",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "18:00",
          "activityId": "panya",
          "text": "Panya 地道泰菜午餐／So Tai Seafood 海邊餐廳（原表晚間列內寫午餐，待核對）",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "20:00",
          "activityId": "massage",
          "text": "Massage?（芭堤雅店未定）",
          "status": "Optional",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "21:30",
          "activityId": null,
          "text": "宵夜外賣",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        }
      ],
      "warnings": [
        "水上活動按營運商及海況決定；未提供套餐及回程船。"
      ],
      "backup": "下雨／臨時取消時：保留已訂用餐，減少戶外活動，改室內商場或住宿休息；先確認住宿位置。"
    },
    {
      "id": "2026-11-03",
      "date": "2026-11-03",
      "title": "由海岸轉入曼谷",
      "base": "bangkok",
      "kind": "Transfer",
      "hotelId": "stay-bangkok",
      "transportIds": [
        "transfer"
      ],
      "participants": null,
      "route": "芭堤雅 → 曼谷",
      "events": [
        {
          "time": "09:00",
          "activityId": "baguette",
          "text": "La Baguette Phra Tamnak Hill（原表 8:00 open）",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "10:30",
          "activityId": null,
          "text": "Check out",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "11:00",
          "activityId": null,
          "text": "前往曼谷",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "12:30",
          "activityId": null,
          "text": "Airbnb 寄存行李",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "13:30",
          "activityId": "here",
          "text": "Here Hai 午餐（booked 1330）",
          "status": "Confirmed",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "14:30",
          "activityId": "central",
          "text": "CentralWorld",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "15:00",
          "activityId": "ice",
          "text": "Luscious Creamery 雪糕",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "15:30",
          "activityId": "kaew",
          "text": "Kaew Boutique 班蘭椰絲捲餅＆soft卷",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "16:30",
          "activityId": "kart",
          "text": "卡丁車 TopKart Bangkok（不能穿涼鞋、拖鞋）",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "19:00",
          "activityId": "copper",
          "text": "Copper Beyond Buffet（booked 19…，圖片截斷）",
          "status": "Confirmed",
          "timeConfidence": "原表暫定，非營運班次"
        }
      ],
      "warnings": [
        "11:00 由芭堤雅出發再寄存行李，13:30 Here Hai 訂位風險高；建議提早出發或直赴餐廳。",
        "卡丁車與晚餐間須留候場、清潔及轉乘時間。",
        "Copper 訂位時間在原圖被截斷，分店未列。"
      ],
      "backup": "下雨／臨時取消時：保留已訂用餐，減少戶外活動，改室內商場或住宿休息；先確認住宿位置。"
    },
    {
      "id": "2026-11-04",
      "date": "2026-11-04",
      "title": "老街、河岸與恐龍",
      "base": "bangkok",
      "kind": "Stay",
      "hotelId": "stay-bangkok",
      "transportIds": [],
      "participants": null,
      "route": "Song Wat → ICONSIAM → Asiatique",
      "events": [
        {
          "time": "09:30",
          "activityId": "song",
          "text": "SONG WAT",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "10:00",
          "activityId": "rong",
          "text": "牛麵王 Rong Klan Nuea（原表 10am open）",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "12:00",
          "activityId": "boat",
          "text": "Boat（原表 12:18／12:42／12:48）／Grab",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "12:30",
          "activityId": "icon",
          "text": "ICONSIAM",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "13:00",
          "activityId": "icon",
          "text": "Karun Thai Tea 泰奶",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "14:00",
          "activityId": "icon",
          "text": "Food court",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "15:00",
          "activityId": "boat",
          "text": "藍旗觀光船（原表 14:56／15:26）或 Grab",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "15:30",
          "activityId": "asiatique",
          "text": "Asiatique 河濱碼頭",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "16:30",
          "activityId": "jurassic",
          "text": "侏羅紀世界沉浸式體驗",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "18:00",
          "activityId": "skyfly",
          "text": "SkyFlyers 高空鞦韆",
          "status": "Optional",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "19:30",
          "activityId": "mad",
          "text": "Mad Moa Asok／Niku Sho Sukhumvit 31（二選一）",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        }
      ],
      "warnings": [
        "船班資料衝突；優先核對是否直達 Asiatique，Grab 作備案。",
        "兩項付費體驗加 Asok 晚餐可能太密；優先恐龍體驗，高空鞦韆保留可選。"
      ],
      "backup": "下雨／臨時取消時：保留已訂用餐，減少戶外活動，改室內商場或住宿休息；先確認住宿位置。"
    },
    {
      "id": "2026-11-05",
      "date": "2026-11-05",
      "title": "城市綠地與泰式滋味",
      "base": "bangkok",
      "kind": "Stay",
      "hotelId": "stay-bangkok",
      "transportIds": [],
      "participants": null,
      "route": "Silom／Dusit Central Park",
      "events": [
        {
          "time": "09:30",
          "activityId": "dusit",
          "text": "Dusit Central Park",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "10:00",
          "activityId": "thong",
          "text": "ThongSmith 船麵",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "11:30",
          "activityId": "chong",
          "text": "Chongdee Tea 泰奶",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "12:00",
          "activityId": "garden",
          "text": "空中花園",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "14:00",
          "activityId": "foodcourt",
          "text": "LG/F Foodcourt／TOH KIM 海南雞",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "16:00",
          "activityId": "massage",
          "text": "massage?",
          "status": "Optional",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "17:30",
          "activityId": "bigc",
          "text": "Big C 買手信",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "19:30",
          "activityId": "lay",
          "text": "Lay Lao Silom（booked 1930）",
          "status": "Confirmed",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "21:00",
          "activityId": null,
          "text": "執行李",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "21:30",
          "activityId": "wings",
          "text": "宵夜外賣－Joe Wings 炸雞",
          "status": "Optional",
          "timeConfidence": "原表暫定，非營運班次"
        }
      ],
      "warnings": [
        "空中花園可能與 Dusit 公園重複；先確認位置。",
        "10:00 船麵店開門未核實；不要把公園時間套用至商場。"
      ],
      "backup": "下雨／臨時取消時：保留已訂用餐，減少戶外活動，改室內商場或住宿休息；先確認住宿位置。"
    },
    {
      "id": "2026-11-06",
      "date": "2026-11-06",
      "title": "早午餐，帶回旅途記憶",
      "base": "bangkok",
      "kind": "Transfer",
      "hotelId": null,
      "transportIds": [
        "return"
      ],
      "participants": null,
      "route": "EmQuartier → 住宿取行李 → BKK",
      "events": [
        {
          "time": "09:00",
          "activityId": null,
          "text": "整理行李",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "09:30",
          "activityId": null,
          "text": "退房／寄存行李",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "10:30",
          "activityId": "roast",
          "text": "Roast @ EmQuartier",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "11:30",
          "activityId": "emsphere",
          "text": "EmSphere 商場",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "14:00",
          "activityId": null,
          "text": "取行李／準備出發",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "14:30",
          "activityId": null,
          "text": "出發赴機場",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "15:30",
          "activityId": null,
          "text": "抵達 BKK 機場（原表估計）",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "16:00",
          "activityId": null,
          "text": "辦理登機／寄行李",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "16:30",
          "activityId": null,
          "text": "機場內休息／用餐",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "17:30",
          "activityId": null,
          "text": "等候登機",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        },
        {
          "time": "18:10",
          "activityId": null,
          "text": "TG602 18:10–21:55（原表；航線、時區及訂位未核實）",
          "status": "Planned",
          "timeConfidence": "原表暫定，非營運班次"
        }
      ],
      "warnings": [
        "保留原表 14:30 出發赴機場；交通估算不是即時導航。",
        "TG602 的航線、當地起飛與到達時區需用機票核對。"
      ],
      "backup": "下雨／臨時取消時：保留已訂用餐，減少戶外活動，改室內商場或住宿休息；先確認住宿位置。"
    }
  ],
  "activities": [
    {
      "id": "sky",
      "name": "The Sky Gallery",
      "localName": null,
      "base": "pattaya",
      "category": "Food",
      "hook": "海景餐桌迎接第一晚",
      "description": "保留原表 17:15 訂位；落機、入境、車程和入住延誤可能壓縮到店時間。官方旅遊局確認為 Pratamnak 海景餐廳。",
      "status": "Confirmed",
      "bookingStatus": "Confirmed",
      "bookingRequired": true,
      "bookingEvidence": "使用者上載行程表明確標示 booked；未提供訂單編號／付款證明",
      "coords": [
        12.919,
        100.858
      ],
      "positionConfidence": "約略區域，非入口",
      "mapQuery": "The Sky Gallery Pattaya Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 90,
      "timeOfDay": "evening",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [
        [
          "泰國旅遊局｜The Sky Gallery",
          "https://www.tourismthailand.org/Restaurant/the-sky-gallery-pattaya",
          "official"
        ]
      ],
      "checked": "2026-10-25",
      "confidence": "部分資料已查核",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "pattaya",
      "days": [
        "2026-10-31"
      ]
    },
    {
      "id": "thep",
      "name": "Thepprasit 夜市",
      "localName": null,
      "base": "pattaya",
      "category": "Shopping",
      "hook": "夜市小食與在地攤檔",
      "description": "夜市小食與在地攤檔",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "Thepprasit 夜市 Pattaya Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 60,
      "timeOfDay": "evening",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "pattaya",
      "days": [
        "2026-10-31"
      ]
    },
    {
      "id": "beach",
      "name": "芭堤雅海灘街",
      "localName": null,
      "base": "pattaya",
      "category": "Sight",
      "hook": "沿海步行，毋須趕場",
      "description": "沿海步行，毋須趕場",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": [
        12.935,
        100.883
      ],
      "positionConfidence": "約略區域，非入口",
      "mapQuery": "芭堤雅海灘街 Pattaya Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 60,
      "timeOfDay": "evening",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "pattaya",
      "days": [
        "2026-10-31"
      ]
    },
    {
      "id": "walking",
      "name": "Walking Street 萬聖節",
      "localName": null,
      "base": "pattaya",
      "category": "Event",
      "hook": "原表的萬聖節晚間散步",
      "description": "2026-10-31 只是原表安排；未核實當晚有任何官方特別節目。酒吧及人潮環境，按同行者意願決定停留。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "Walking Street 萬聖節 Pattaya Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 60,
      "timeOfDay": "evening",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "pattaya",
      "days": [
        "2026-10-31"
      ]
    },
    {
      "id": "eak",
      "name": "Eak Fish Balls／Neon Boat Noodles",
      "localName": null,
      "base": "pattaya",
      "category": "Food",
      "hook": "魚蛋或船麵早餐",
      "description": "原表兩間二選一，所寫 07:00／10:00 開門未經核實；不要導航到錯誤分店。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "Eak Fish Balls／Neon Boat Noodles Pattaya Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 60,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "pattaya",
      "days": [
        "2026-11-01"
      ]
    },
    {
      "id": "zoo",
      "name": "Khao Kheow Open Zoo",
      "localName": null,
      "base": "pattaya",
      "category": "Experience",
      "hook": "留半天慢看開放式動物園",
      "description": "保留原表週日動物園安排。園區不在芭堤雅市中心，需安排回程車；演出、看動物時段、外國人票價仍待官方確認。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": [
        13.215,
        101.056
      ],
      "positionConfidence": "約略區域，非入口",
      "mapQuery": "Khao Kheow Open Zoo Pattaya Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 240,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [
        [
          "動物園官方",
          "https://khaokheow.zoothailand.org/en/ewt_news.php?c_id=34&n_id=176",
          "official"
        ]
      ],
      "checked": "2026-10-25",
      "confidence": "部分資料已查核",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "pattaya",
      "days": [
        "2026-11-01"
      ]
    },
    {
      "id": "relax",
      "name": "Let’s Relax 按摩",
      "localName": null,
      "base": "pattaya",
      "category": "Relaxation",
      "hook": "動物園後放鬆雙腳",
      "description": "原表 17:00；未提供分店、療程及預約，需核對由動物園返回的交通時間。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "Let’s Relax 按摩 Pattaya Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 90,
      "timeOfDay": "evening",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "pattaya",
      "days": [
        "2026-11-01"
      ]
    },
    {
      "id": "pupen",
      "name": "Pupen Seafood",
      "localName": null,
      "base": "pattaya",
      "category": "Food",
      "hook": "海鮮晚餐留足交通時間",
      "description": "原表約 19:30 晚餐；分店、候位及價錢未確認。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "Pupen Seafood Pattaya Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 90,
      "timeOfDay": "evening",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "pattaya",
      "days": [
        "2026-11-01"
      ]
    },
    {
      "id": "koh",
      "name": "Koh Larn 出海及水上活動",
      "localName": null,
      "base": "pattaya",
      "category": "Experience",
      "hook": "保留整天海島體驗",
      "description": "原表含香蕉船、水上電單車及潛水；未有營運商、套餐、碼頭、海況或回程船資料，不保證全數能於半天完成。先確認回程及項目次序；天氣取消時以市內休息替代。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": [
        12.915,
        100.781
      ],
      "positionConfidence": "約略區域，非入口",
      "mapQuery": "Koh Larn 出海及水上活動 Pattaya Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 300,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [
        [
          "泰國旅遊局手冊（2024，非最新船期）",
          "https://image.mfa.go.th/mfa/0/uK8Kxy2oDV/E_Brochure_TAT_2024_English_Version.pdf",
          "official"
        ]
      ],
      "checked": "2026-10-25",
      "confidence": "部分資料已查核",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "pattaya",
      "days": [
        "2026-11-02"
      ]
    },
    {
      "id": "panya",
      "name": "Panya／So Tai Seafood 海鮮晚餐",
      "localName": null,
      "base": "pattaya",
      "category": "Food",
      "hook": "海島回程後安排正餐",
      "description": "原圖店名可能是兩間候選；須先確認店名及地址，不合併成同一間已核實餐廳。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "Panya／So Tai Seafood 海鮮晚餐 Pattaya Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 90,
      "timeOfDay": "evening",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "pattaya",
      "days": [
        "2026-11-02"
      ]
    },
    {
      "id": "baguette",
      "name": "La Baguette Phra Tamnak Hill",
      "localName": null,
      "base": "pattaya",
      "category": "Food",
      "hook": "轉場前簡單早餐",
      "description": "原表 09:00、註 08:00 開門；營業資訊未核實。早餐後回住宿收行李，預留退房時間。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "La Baguette Phra Tamnak Hill Pattaya Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 60,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "pattaya",
      "days": [
        "2026-11-03"
      ]
    },
    {
      "id": "here",
      "name": "Here Hai 午餐",
      "localName": null,
      "base": "bangkok",
      "category": "Food",
      "hook": "保留 13:30 已訂午餐",
      "description": "原表 booked 1330；未列分店。芭堤雅 11:00 出發、寄存行李再赴餐廳，可能趕不上；建議先核對訂位分店，再決定提早退房或直接前往餐廳，不自行取消訂位。",
      "status": "Confirmed",
      "bookingStatus": "Confirmed",
      "bookingRequired": true,
      "bookingEvidence": "使用者上載行程表明確標示 booked；未提供訂單編號／付款證明",
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "Here Hai 午餐 Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 75,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [
        [
          "Here Hai 地址與旅客資料（非營業核實）",
          "https://www.tripadvisor.com/Restaurant_Review-g293916-d15237670-Reviews-Here_Hai-Bangkok.html",
          "traveler"
        ]
      ],
      "checked": "2026-10-25",
      "confidence": "部分資料已查核",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-03"
      ]
    },
    {
      "id": "central",
      "name": "CentralWorld",
      "localName": null,
      "base": "bangkok",
      "category": "Shopping",
      "hook": "轉場後逛街與室內休息",
      "description": "11月3日原表購物安排；行李寄存點未確認，勿帶大型行李趕場。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": [
        13.746,
        100.54
      ],
      "positionConfidence": "約略區域，非入口",
      "mapQuery": "CentralWorld Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 90,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-03"
      ]
    },
    {
      "id": "ice",
      "name": "Luscious Creamery 雪糕",
      "localName": null,
      "base": "bangkok",
      "category": "Food",
      "hook": "逛街途中短休息",
      "description": "逛街途中短休息",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "Luscious Creamery 雪糕 Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 30,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-03"
      ]
    },
    {
      "id": "kaew",
      "name": "Kaew Boutique 班蘭糕／絲捲",
      "localName": null,
      "base": "bangkok",
      "category": "Food",
      "hook": "手信甜點留作順路短停",
      "description": "手信甜點留作順路短停",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "Kaew Boutique 班蘭糕／絲捲 Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 30,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-03"
      ]
    },
    {
      "id": "kart",
      "name": "TopKart Bangkok 卡丁車",
      "localName": null,
      "base": "bangkok",
      "category": "Experience",
      "hook": "穿包頭鞋再上場",
      "description": "官方指南要求所有駕駛者穿包頭鞋。原表已提示不可涼鞋或拖鞋；場次、最新票價、身高及安全限制另向營運商確認。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": true,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "TopKart Bangkok 卡丁車 Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 90,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [
        [
          "TopKart 官方安全指南",
          "https://www.topkartbangkok.com/the-ultimate-guide-to-go-karting-in-bangkok/",
          "official"
        ]
      ],
      "checked": "2026-10-25",
      "confidence": "部分資料已查核",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-03"
      ]
    },
    {
      "id": "copper",
      "name": "Copper Beyond Buffet",
      "localName": null,
      "base": "bangkok",
      "category": "Food",
      "hook": "已訂自助餐作晚間錨點",
      "description": "原圖寫 booked 19…，完整分鐘被截斷，不能當成 19:00。官方場地頁確認 Gaysorn Amarin 分店，但你的訂位分店仍待訂單核實。",
      "status": "Confirmed",
      "bookingStatus": "Confirmed",
      "bookingRequired": true,
      "bookingEvidence": "使用者上載行程表明確標示 booked；未提供訂單編號／付款證明",
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "Copper Beyond Buffet Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 120,
      "timeOfDay": "evening",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [
        [
          "Gaysorn 官方｜Copper",
          "https://www.gaysornvillage.com/en/mingle/copper-beyond-buffet/",
          "official"
        ]
      ],
      "checked": "2026-10-25",
      "confidence": "部分資料已查核",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-03"
      ]
    },
    {
      "id": "song",
      "name": "Song Wat 松瓦路",
      "localName": null,
      "base": "bangkok",
      "category": "Culture",
      "hook": "老街倉庫與新咖啡文化",
      "description": "旅遊局介紹的歷史商業街；建議步行慢看建築。街道不代表所有店舖同時營業，早餐店未開時可先散步。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": [
        13.738,
        100.508
      ],
      "positionConfidence": "約略區域，非入口",
      "mapQuery": "Song Wat 松瓦路 Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 90,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [
        [
          "泰國旅遊局｜Song Wat",
          "https://www.thailandtravel.or.jp/song-wat/",
          "official"
        ]
      ],
      "checked": "2026-10-25",
      "confidence": "部分資料已查核",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-04"
      ]
    },
    {
      "id": "rong",
      "name": "Rong Klan Nuea 牛肉麵",
      "localName": null,
      "base": "bangkok",
      "category": "Food",
      "hook": "老街早餐的原定選擇",
      "description": "原表註 10:00 開門，未核實。不要把 09:30 到老街等同餐廳已營業。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "Rong Klan Nuea 牛肉麵 Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 60,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-04"
      ]
    },
    {
      "id": "icon",
      "name": "ICONSIAM／Karun Thai Tea",
      "localName": null,
      "base": "bangkok",
      "category": "Shopping",
      "hook": "河畔商場與泰式茶歇",
      "description": "保留中午過河安排；餐廳、茶店分店及船票另查。官方網站作出發前核對入口，未確認本次日期的交通班次。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": [
        13.727,
        100.51
      ],
      "positionConfidence": "約略區域，非入口",
      "mapQuery": "ICONSIAM／Karun Thai Tea Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 150,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [
        [
          "ICONSIAM 官方",
          "https://www.iconsiam.com/en",
          "official"
        ]
      ],
      "checked": "2026-10-25",
      "confidence": "部分資料已查核",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-04"
      ]
    },
    {
      "id": "boat",
      "name": "湄南河藍旗觀光船",
      "localName": null,
      "base": "bangkok",
      "category": "Stop",
      "hook": "以實際船期串連河岸",
      "description": "原表 14:56／15:26 等精確班次未核實。Asiatique 官方交通頁與票務資料服務時段不一致；先向營運商核對當日是否直達，否則改 Grab，勿預設 15:30 必達。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "湄南河藍旗觀光船 Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 60,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [
        [
          "Chao Phraya Tourist Boat 官方",
          "https://chaophrayatouristboat.com/",
          "official"
        ]
      ],
      "checked": "2026-10-25",
      "confidence": "部分資料已查核",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-04"
      ]
    },
    {
      "id": "asiatique",
      "name": "Asiatique 河濱碼頭",
      "localName": null,
      "base": "bangkok",
      "category": "Shopping",
      "hook": "河岸黃昏與夜間散步",
      "description": "保留原表午後至晚間安排；船務及各設施開放時間需分別確認。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": [
        13.705,
        100.503
      ],
      "positionConfidence": "約略區域，非入口",
      "mapQuery": "Asiatique 河濱碼頭 Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 90,
      "timeOfDay": "evening",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [
        [
          "Asiatique 官方交通",
          "https://www.asiatiquethailand.com/contact-us",
          "official"
        ]
      ],
      "checked": "2026-10-25",
      "confidence": "部分資料已查核",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-04"
      ]
    },
    {
      "id": "jurassic",
      "name": "Jurassic World 沉浸式體驗",
      "localName": null,
      "base": "bangkok",
      "category": "Experience",
      "hook": "把恐龍體驗作當日重點",
      "description": "官方發展商確認 Asiatique 設有體驗。指定日期票價、場次、入場限制未確認；不要同時計成已買套票。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": true,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "Jurassic World 沉浸式體驗 Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 90,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [
        [
          "AWC 官方新聞入口｜SkyFlyers／Jurassic World",
          "https://www.assetworldcorp-th.com/en/newsroom/news-activities",
          "official"
        ]
      ],
      "checked": "2026-10-25",
      "confidence": "部分資料已查核",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-04"
      ]
    },
    {
      "id": "skyfly",
      "name": "SkyFlyers 高空鞦韆",
      "localName": null,
      "base": "bangkok",
      "category": "Experience",
      "hook": "按天氣與個人意願選擇",
      "description": "官方發展商介紹的 Asiatique 設施；入場資格、操作時段、天氣停駛及是否與恐龍體驗同票仍待核實。",
      "status": "Optional",
      "bookingStatus": "Unverified",
      "bookingRequired": true,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "SkyFlyers 高空鞦韆 Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 45,
      "timeOfDay": "any",
      "priority": "extra",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [
        [
          "AWC 官方新聞入口｜SkyFlyers／Jurassic World",
          "https://www.assetworldcorp-th.com/en/newsroom/news-activities",
          "official"
        ]
      ],
      "checked": "2026-10-25",
      "confidence": "部分資料已查核",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-04"
      ]
    },
    {
      "id": "mad",
      "name": "Mad Moa Asok／Niku Sho Sukhumvit 31",
      "localName": null,
      "base": "bangkok",
      "category": "Food",
      "hook": "晚餐二選一，避免折返趕場",
      "description": "原表兩間候選及營業時間均未核實。Asiatique 回 Asok 的交通需留彈性，當日太累可河岸用餐。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "Mad Moa Asok／Niku Sho Sukhumvit 31 Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 90,
      "timeOfDay": "evening",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-04"
      ]
    },
    {
      "id": "dusit",
      "name": "Dusit Central Park 屋頂公園",
      "localName": null,
      "base": "bangkok",
      "category": "Sight",
      "hook": "城市建築與高層綠地",
      "description": "官方公告屋頂公園每日 06:00–22:00；商場及餐飲不代表同時開門。09:30 可先散步再用餐，雨天轉室內。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": [
        13.729,
        100.537
      ],
      "positionConfidence": "約略區域，非入口",
      "mapQuery": "Dusit Central Park 屋頂公園 Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 90,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "屋頂公園 06:00–22:00（官方公告；商場另計）",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [
        [
          "Dusit Central Park 官方公告",
          "https://dusitcentralpark.com/new/dusit-central-park-unveils-roof-park/",
          "official"
        ]
      ],
      "checked": "2026-10-25",
      "confidence": "部分資料已查核",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-05"
      ]
    },
    {
      "id": "thong",
      "name": "ThongSmith 船麵",
      "localName": null,
      "base": "bangkok",
      "category": "Food",
      "hook": "公園後的船麵午餐",
      "description": "原表排 10:00，分店與開門時間未確認；如尚未營業，先散步，勿當作已訂早餐。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "ThongSmith 船麵 Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 60,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-05"
      ]
    },
    {
      "id": "chong",
      "name": "Chongdee Tea 奶茶",
      "localName": null,
      "base": "bangkok",
      "category": "Food",
      "hook": "留作商場內短休息",
      "description": "留作商場內短休息",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "Chongdee Tea 奶茶 Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 30,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-05"
      ]
    },
    {
      "id": "garden",
      "name": "空中花園",
      "localName": null,
      "base": "bangkok",
      "category": "Sight",
      "hook": "名稱未確認的原表項目",
      "description": "可能與 Dusit 屋頂公園重複；保留原始安排，確認位置前不計成另一個付費景點。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "空中花園 Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 30,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-05"
      ]
    },
    {
      "id": "foodcourt",
      "name": "LG/F Foodcourt／TOH KIM 海南雞",
      "localName": null,
      "base": "bangkok",
      "category": "Food",
      "hook": "午餐按食量二選一",
      "description": "原表兩個選擇；避免船麵後再硬排完整午餐。商場、店名與樓層待確認。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "LG/F Foodcourt／TOH KIM 海南雞 Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 60,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-05"
      ]
    },
    {
      "id": "massage",
      "name": "按摩（候選）",
      "localName": null,
      "base": "unassigned",
      "category": "Relaxation",
      "hook": "讓下午保留休息彈性",
      "description": "原表 massage?；未有店名、地址、療程及價格。",
      "status": "Optional",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "massage Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 90,
      "timeOfDay": "any",
      "priority": "extra",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-02",
        "2026-11-05"
      ]
    },
    {
      "id": "bigc",
      "name": "Big C 手信補給",
      "localName": null,
      "base": "bangkok",
      "category": "Shopping",
      "hook": "晚餐前集中買手信",
      "description": "分店待確認，留意買完大袋物品的存放安排。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "Big C 手信補給 Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 60,
      "timeOfDay": "evening",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-05"
      ]
    },
    {
      "id": "lay",
      "name": "Lay Lao Silom",
      "localName": null,
      "base": "bangkok",
      "category": "Food",
      "hook": "19:30 已訂晚餐",
      "description": "保留原表 booked 1930。官方預約入口分 Ari 及 Silom；此處按原表 Silom，仍需核對人數、訂位姓名及付款情況。",
      "status": "Confirmed",
      "bookingStatus": "Confirmed",
      "bookingRequired": true,
      "bookingEvidence": "使用者上載行程表明確標示 booked；未提供訂單編號／付款證明",
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "Lay Lao Silom Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 90,
      "timeOfDay": "evening",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [
        [
          "Lay Lao 預約入口",
          "https://linktr.ee/laylao.reservation",
          "official"
        ]
      ],
      "checked": "2026-10-25",
      "confidence": "部分資料已查核",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-05"
      ]
    },
    {
      "id": "wings",
      "name": "Joe Wings 炸雞宵夜",
      "localName": null,
      "base": "bangkok",
      "category": "Food",
      "hook": "食量及精神許可才外賣",
      "description": "店名及外送範圍未確認；不列入必食主線。",
      "status": "Optional",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "Joe Wings 炸雞宵夜 Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 30,
      "timeOfDay": "evening",
      "priority": "extra",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-05"
      ]
    },
    {
      "id": "roast",
      "name": "Roast EmQuartier",
      "localName": null,
      "base": "bangkok",
      "category": "Food",
      "hook": "回程前的早午餐",
      "description": "官網列 EmQuartier 分店地址為 1 Helix Building A, 693/695 Sukhumvit Road。保留原表 10:30，營業與候位仍需確認。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": null,
      "positionConfidence": "未核實，導航按名稱搜尋",
      "mapQuery": "Roast EmQuartier Bangkok Thailand",
      "address": "1 Helix Building A, 693/695 Sukhumvit Road, Bangkok 10110（官方店頁）",
      "fromBaseMinutes": null,
      "stayMinutes": 75,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [
        [
          "Roast EmQuartier 官方",
          "https://www.roastbkk.com/location/emquartier/",
          "official"
        ]
      ],
      "checked": "2026-10-25",
      "confidence": "部分資料已查核",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-06"
      ]
    },
    {
      "id": "emsphere",
      "name": "EmSphere 商場",
      "localName": null,
      "base": "bangkok",
      "category": "Shopping",
      "hook": "離境日前最後短逛",
      "description": "原表 11:30；14:00 前取回行李、14:30 出發赴 BKK 優先，購物不可侵蝕機場緩衝。",
      "status": "Planned",
      "bookingStatus": "Unverified",
      "bookingRequired": false,
      "bookingEvidence": null,
      "coords": [
        13.731,
        100.568
      ],
      "positionConfidence": "約略區域，非入口",
      "mapQuery": "EmSphere 商場 Bangkok Thailand",
      "address": "未確認；請先核對導航搜尋結果",
      "fromBaseMinutes": null,
      "stayMinutes": 90,
      "timeOfDay": "any",
      "priority": "main",
      "cost": {
        "amount": null,
        "currency": "THB",
        "status": "Unverified"
      },
      "hours": "未核實",
      "closed": "未核實",
      "reservation": "需確認分店及時段",
      "dateFit": "原行程日期；營業及場次仍待確認",
      "tips": [],
      "sources": [],
      "checked": null,
      "confidence": "僅有使用者行程表",
      "unverified": [
        "指定日期營業、最新價格、分店、基地交通"
      ],
      "photoKey": "bangkok",
      "days": [
        "2026-11-06"
      ]
    }
  ],
  "excluded": [
    {
      "id": "far-ayutthaya",
      "name": "大城一日遊",
      "status": "Excluded",
      "reason": "原表已排滿，額外跨城將擠壓已訂用餐及住宿時間"
    },
    {
      "id": "extra-island",
      "name": "另加第二個海島",
      "status": "Excluded",
      "reason": "與 Koh Larn 體驗重複，增加船程及海況風險"
    }
  ],
  "route": [
    "stay-pattaya",
    "stay-bangkok"
  ],
  "budget": {
    "currency": "THB",
    "exchangeRates": {
      "THB": 1
    },
    "exchangeSource": null,
    "entries": [],
    "limit": null
  },
  "todo": [
    "確認旅程年份（暫按星期推定為 2026）",
    "補充同行人數、分組及分攤方法",
    "補充芭堤雅及曼谷住宿名稱、地址、房型、價格和入住條件",
    "確認抵達航班、機場、回程 TG602 航線及兩地時區",
    "核對四間 booked 餐廳的分店、人數、完整時段、訂位及付款證明",
    "確認 Koh Larn 營運商、集合碼頭、活動資格、回程及天氣取消條款",
    "核對 11月4日觀光船最新班表、Asiatique 接駁及體驗場次",
    "核對芭堤雅 → 曼谷轉場是否趕上 13:30 Here Hai",
    "補充預算上限、已付費用與匯率來源"
  ],
  "usefulLinks": [
    [
      "泰國旅遊局",
      "https://www.tourismthailand.org/"
    ],
    [
      "觀光船官方",
      "https://chaophrayatouristboat.com/"
    ],
    [
      "泰航官方｜航班核對",
      "https://www.thaiairways.com/"
    ]
  ],
  "updated": "2026-10-25",
  "sources": {
    "sky": [
      "泰國旅遊局｜The Sky Gallery",
      "https://www.tourismthailand.org/Restaurant/the-sky-gallery-pattaya",
      "official"
    ],
    "zoo": [
      "動物園官方",
      "https://khaokheow.zoothailand.org/en/ewt_news.php?c_id=34&n_id=176",
      "official"
    ],
    "koh": [
      "泰國旅遊局手冊（2024，非最新船期）",
      "https://image.mfa.go.th/mfa/0/uK8Kxy2oDV/E_Brochure_TAT_2024_English_Version.pdf",
      "official"
    ],
    "kart": [
      "TopKart 官方安全指南",
      "https://www.topkartbangkok.com/the-ultimate-guide-to-go-karting-in-bangkok/",
      "official"
    ],
    "copper": [
      "Gaysorn 官方｜Copper",
      "https://www.gaysornvillage.com/en/mingle/copper-beyond-buffet/",
      "official"
    ],
    "lay": [
      "Lay Lao 預約入口",
      "https://linktr.ee/laylao.reservation",
      "official"
    ],
    "boat": [
      "Chao Phraya Tourist Boat 官方",
      "https://chaophrayatouristboat.com/",
      "official"
    ],
    "asiatique": [
      "Asiatique 官方交通",
      "https://www.asiatiquethailand.com/contact-us",
      "official"
    ],
    "dusit": [
      "Dusit Central Park 官方公告",
      "https://dusitcentralpark.com/new/dusit-central-park-unveils-roof-park/",
      "official"
    ],
    "song": [
      "泰國旅遊局｜Song Wat",
      "https://www.thailandtravel.or.jp/song-wat/",
      "official"
    ],
    "roast": [
      "Roast EmQuartier 官方",
      "https://www.roastbkk.com/location/emquartier/",
      "official"
    ],
    "here": [
      "Here Hai 地址與旅客資料（非營業核實）",
      "https://www.tripadvisor.com/Restaurant_Review-g293916-d15237670-Reviews-Here_Hai-Bangkok.html",
      "traveler"
    ],
    "icon": [
      "ICONSIAM 官方",
      "https://www.iconsiam.com/en",
      "official"
    ],
    "aw": [
      "AWC 官方新聞入口｜SkyFlyers／Jurassic World",
      "https://www.assetworldcorp-th.com/en/newsroom/news-activities",
      "official"
    ]
  }
};
if (typeof window !== "undefined") window.ITINERARY_DATA = DATA;
