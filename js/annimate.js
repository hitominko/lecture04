var endFlipFoxkeh = function(){
	//endFlipfoxkehの箱に無名関数を入れる
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	//#slidein-foxkeh img の画像を選び出してfoxkehの箱に入れる
	foxkeh.removeEventListener("animationend", endFlipFoxkeh);
	//animationが終わったらendFlipFoxkehが発動する

	foxkeh.setAttribute("class", "");
};　//class属性を削除する

var endSlideinFoxkehAndStartFlipFoxkeh = function(){
	//endSlideinFoxkehAndStartFlipFoxkehの箱に無名関数を入れる
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	//#slidein-foxkeh imgの画像を選び出してfoxkehの箱に入れる

	foxkeh.removeEventListener("animationend", endSlideinFoxkehAndStartFlipfoxkeh);
	//animationが終わったらendSlideinFoxkehAndStartFlipFoxkehが発動する
	foxkeh.addEventListener("animationend", endFlipFoxkeh);
    //発動した endSlideinFoxkehAndStartFlipfoxkehをendFlipFoxkehに置き換えます

	foxkeh.setAttribute("class", "flip");
};　//class属性をflipという名前にします

var startSlideinFoxkeh = function(){
	//startSlideinFoxkeh という箱に無名関数を入れる
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	//slidein-foxkeh imgの画像を選び出しfoxkehの箱に入れる
	foxkeh.setAttribute("class", "slidein");
	//class属性をslideinにします

	foxkeh.addEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
};　//animationが終わったらendSlideinFoxkehAndStartFlipFoxkehに置き換えます

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
   //#slidein-foxkeh buttonというボタンを置きます
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
　　//clickを押すとボタンが発動します
　　
　　
