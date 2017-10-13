(function() {
    "use strict";
kintone.events.on('app.record.edit.change.ドロップダウン_0', function(event) {
    var record = event.record;
    record['文字列__1行_']['error'] = 'このエラーメッセージを表示';
//    record['Table']['value'][0]['value']['文字列_1']['error'] = 'テーブルの1レコード目にエラーを表示';
    return event;
});
})();
