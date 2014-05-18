
// 授業変更データ取得
var api = 'http://153.121.46.23/twitteroauth-bot/changes.jsonp'; // 授業変更のデータがある場所（仮設置）
$.ajax({
	type: 'GET',
	url: api,
	dataType: 'jsonp',
	jsonpCallback: 'callback',
	success: function(json){
		// データ取得後の処理
		for (var i = 0; i < json.length; i++) {
			if(json[i].data != null){
				$("#main").append('<div class="content" id=' + json[i].name + '>');
				$(".content:last").append('<h1>' + json[i].name + '</h1>')
					.append('<table></table>');
				for (var j = 0; j < json[i].data.length; j++) {
					var row = "<tr>";
					row += "<td>" + json[i].data[j].date + "</td>";
					row += "<td>" + json[i].data[j].period + "</td>";
					row += "<td>" + json[i].data[j].before + "</td>";
					row += "<td>" + json[i].data[j].after + "</td>";
					row += "</td>";
					$(".content table:last").append(row);
				}
			}
		}
	}
});