// 現在のURLからURLオブジェクトを生成（例として、https://example.com上で以下Javascriptを実行しているとする）
const url = new URL(window.location.href);
console.log(url.href); // https://example.com

// キーを指定し、クエリパラメータを付与
url.searchParams.set('display', 'none');
console.log(url.href); // https://example.com?addParam=test

const button1 = document.getElementById("button1");
if (window.location.href == 'https://okazhiko.github.io/?display=none') {
	button1.style.display = "none";
}
