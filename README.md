# 日付・会議・QRミニツール

date-meeting-qr-mini-tools は、ChromeExtension 領域の NON PICKUP Rank 16 アイデアをクローズドアルファとして実装したローカルファーストの検証ツールです。

## 目的

小さな補助操作のために別アプリを開く手間がある。

このリポジトリでは、予定抽出、会議メモ、現在URLのQR、小型電卓をポップアップにまとめる。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。 ための入力正規化、代表シナリオ検証、レビュー判断、レポート出力、導入・手動テスト手順、QCDS 証跡を一式で管理します。

## クローズドアルファ範囲

- 中核ロジック: `src/core`
- 入力検証: `src/validators`
- レポート生成: `src/report`
- 判断モデル: `src/review-model`
- CLI: `src/cli`
- ホスト/UI adapter: `extension`
- 代表サンプル: `samples/representative-suite.json`

## 実行

```powershell
npm test
npm run validate
npm run build
```

## 公開位置づけ

- Version: v0.1.0-alpha.1
- GitHub prerelease: closed alpha
- 手動テスト: Codex 側では未実施。ユーザー実施用の手順は `docs/manual-test.md` と `docs/strict-manual-test-addendum.md` に記録。
- 主な公開先: Chrome Web Store

## 差別化

ページ上の文脈を保ったまま小窓で処理する。
