var endSlideinFoxkeh = function(){
	//endSlideinFoxkehの箱に無名関数を入れる
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	/*　//#slidein-foxkeh imgの画像を選び出してfoxkehの箱に入れる
<<<<<<< HEAD
	foxkeh.setAttribute("class", "slidein");
};　//class属性をslideinに置き換える

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("mouseover", slideinFoxkeh);
=======*/
	foxkeh.setAttribute("class", "");
}; class属性を白紙にする

var startSlideinFoxkeh = function(){
	//tartSlideinFoxkehの箱に無名関数を入れる
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	//#slidein-foxkeh imgの画像を選び出しfoxkehの箱に入れる
	foxkeh.setAttribute("class", "slidein");
	//class属性をslide in に置き換える

	foxkeh.addEventListener("animationend", endSlideinFoxkeh);
};　//animation が終わったらendSlideinFoxkehを発動させる

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
　　//#slidein-foxkeh buttonというボタンを置く
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
//>>>>>>> origin/make_slidein_retriable
　　//clickを押すとstartSlideinFoxkehが発動する
　　
　　
