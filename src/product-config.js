export const productConfig = {
  "product": {
    "rank": 16,
    "tier": "P1",
    "score": 67,
    "domain": "ChromeExtension",
    "ideaNo": 9,
    "ideaName": "日付・会議・QRミニツール",
    "repository": "date-meeting-qr-mini-tools",
    "publish": "Chrome Web Store",
    "priorityReason": "機能は小さいが審査範囲を抑えやすく、Chrome拡張の量産枠として使える。",
    "surface": "Chrome Manifest V3 拡張、popup、options、local storage を備えた検証可能な拡張パッケージ",
    "integration": "",
    "overview": "予定抽出、会議メモ、現在URLのQR、小型電卓をポップアップにまとめる。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
    "problem": "小さな補助操作のために別アプリを開く手間がある。",
    "differentiation": "ページ上の文脈を保ったまま小窓で処理する。",
    "adobeHost": null,
    "adobeHostReason": null
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
