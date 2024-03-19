"use strict";

let height = window.prompt("身長を入力してください。");

if (height === null) {
    window.alert("入力がないと判定できません");
} else {
    if (isNaN(height)) {
        window.alert("半角数字で入力してください");
    } else {
        height = parseInt(height); 

        if (height >= 100) {
            
            let ticket = window.confirm("プレミアムチケットを持っていますか？");

            if (ticket) {
                window.alert("プレミアムシートに乗車可能です");
            } else {
                window.alert("通常のシートに乗車可能です");
            }
        } else if (height >= 90) {
            window.alert("付き添いありで乗車可能です");
        } else {
            window.alert("乗車できません");
        }
    }
}