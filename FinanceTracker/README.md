# 簡單記帳網站項目

## 專案簡介

這是一個使用 TypeScript 開發的簡單記帳網站。該項目始於我接觸 JavaScript 近三個月後的一個嘗試，目的是想從零開始實踐瞭解 TypeScript 的應用。

## 設計過程

- **初步設計**：項目的設計從繪製 **活動圖（Activity Diagram）**、**類別圖（Class Diagram）** 以及 **實體關係圖（Entity Relationship Diagram）** 開始。

- **類別調整**：在設計過程中，我將原先的 `Tag` 類別更名為 `Category`。這個變更使得整個項目的邏輯更加合理。

## 架構選擇

受到《Clean Architecture》一書的啟發後，想嘗試遵循 **倉庫模式（Repository Pattern）** 進行開發。

## 開發進度

該項目正在積極開發中，未來將有一個初步可用的版本。

## TypeScript 編譯過程

本項目的 TypeScript 源代碼位於 `/src` 目錄中。為了在生產環境中運行，我們需要將 TypeScript 代碼編譯成 JavaScript，編譯後的代碼將被放置於 `/dist` 目錄。

### 編譯步驟

1. 確保你已經安裝了 Node.js 和 npm。
2. 在項目根目錄下運行 `npm install` 命令以安裝依賴。
3. 執行 `npm run build` 命令來編譯 TypeScript 代碼。這會將 `/src` 目錄下的 `.ts` 文件轉換成 `/dist` 目錄下的 `.js` 文件。
4. 編譯完成後，你可以通過執行 `npm start` 命令來啟動應用程序，該命令將運行 `/dist` 目錄下的主 JavaScript 文件。

## 結語

這是一個學習和實踐 TypeScript 以及軟件設計模式的項目。通過實際操作，期待對這些概念有更深入的理解和應用。
