const $start = document.getElementById("start");
const $result = document.getElementById("result");

const omikuji = ["大吉","中吉","吉","凶","大凶",]

num = 0

//スタート押したら開始されるメソッド
$start.addEventListener("click",function() {
    //ランダムに選ぶ
    //Math.floor(Math.random() * n)…「0~5までをランダムで出力する」
    //Math.floor…「小数点切り捨て」
    const num = Math.floor(Math.random() * omikuji.length);

    //配列を表示する
    $result.textContent = omikuji[num]
    
    //特定の値にアラートを出す
    if($result.textContent === "大吉"){
      alert("最高だな！")
    }else if($result.textContent === "中吉"){
      alert("まぁまぁ！")
    }else if($result.textContent === "吉"){
        alert("普通！")
    }else if($result.textContent === "凶"){
        alert("次があるよ！")
    }else if($result.textContent === "大凶"){
        alert("最悪だね！")
    }
})
