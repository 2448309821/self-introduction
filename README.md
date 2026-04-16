# 自己紹介ページ

React と Vite で作成した自己紹介サイトです。

## 開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

## ファイル構成

- `src/App.jsx`: ページ本体
- `src/styles.css`: ページスタイル
- `src/main.jsx`: React エントリポイント
- `vite.config.js`: Vite 設定
- `.github/workflows/deploy.yml`: GitHub Pages デプロイ設定

## GitHub Pages

このリポジトリは GitHub Actions で `dist` をビルドして Pages に公開します。

GitHub の `Settings` -> `Pages` で、公開元を `GitHub Actions` に設定してください。
