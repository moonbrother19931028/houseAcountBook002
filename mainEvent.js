// 収入登録ボタンをクリックされた時の処理関数
function onRecordHouseMoney(){
    // input要素を取得。
    let mo_MoneyInput=document.getElementById("mo_MoneyInput");
    // 入力された内容を取得。
    let mo_MoneyText=mo_MoneyInput.value;
    // mo_Money要素を取得。
    let mo_Money=document.getElementById("mo_Money");
    // 取得した要素に入力値を代入する。
    mo_Money.textContent="収入:"+mo_MoneyText+"円";
}
// 支出登録ボタンをクリックされた時の処理関数
function onRecordSpeddingMoney(){
    // input要素を取得。
    let mo_speddingInput=document.getElementById("mo_speddingInput");
    // 入力された内容を取得。
    let mo_speddingText=mo_speddingInput.value;
    // li要素を生成。
    let spddingList=document.createElement("li");
 
    // input要素を取得。
    let mo_speddingDetail=document.getElementById("mo_speddingDetail");
    // 入力された内容を取得。
    let mo_speddingDetailText=mo_speddingDetail.value;
    // li要素のテキスト部分に入力された文字列を設定。
    spddingList.textContent=mo_speddingText+"円,内容:"+mo_speddingDetailText;

    // mo_Moneylist要素を取得。
    let mo_Moneylist=document.getElementById("mo_Moneylist");
    // リストに追加する。
    mo_Moneylist.appendChild(spddingList);
    // 支出記録要素の親のノードを取得。
    let recorddingMoney=document.getElementById("recorddingMoney");
    // class名displayNoneを削除
    recorddingMoney.removeAttribute("class");

};　
