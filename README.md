# AC_middleware-practice

<br>

此專案使用 Node/Express，做一個 middleware 來偵測伺服器收到請求的狀態。

## 產品功能

<br>

伺服器接到任一請求時，server log 上能正確印出：
(1) 時間戳記 (time-stamps) - 以當地時間 (台北) 顯示
(2) 請求的 HTTP 方法
(3) 請求的 URL
(4) 伺服器回應的時間長度(equest-response cycle time)，如 8ms

<br>

## 建置環境

<br>

* node.js : 10.15.0
* express: 4.17.1
* express-handlebars: 5.3.2

<br>

## 安裝流程

<br>

1. 開啟終端機(terminal)，利用 git clone 將專案下載至本機
```
git clone https://github.com/Linus-Peng1/AC_middleware-practice.git
```
2. 進入存放此專案資料夾
```
cd middleware-practice
```
3. 安裝套件
```
npm install
```

4. 啟動網頁伺服器
```
npm run dev
```
5. 出現下列訊息，表示啟動成功，可點選連結開啟網頁

App is running on http://localhost:3000

