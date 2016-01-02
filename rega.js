//-----------------------------------	Оптимизация		-----------------------------------

alert("prs::" + prskey + "::cookies::ALL");
alert("prs::" + prskey + "::set::mouse=1");
alert("prs::" + prskey + "::agent::group=IE;FF;Chrome;Opera;Safari");
alert("prs::" + prskey + "::set::debug=1");
alert("prs::" + prskey + "::set::js=1"); //влючение javascript
alert("prs::" + prskey + "::set::popup=2");
alert("prs::" + prskey + "::set::popuptab=next");


//-----------------------------------Действия на сайте партнера-----------------------------------


//выводим информацию о показе первого блока на вкладку Журнал программы тестирования.
alert("prs::" + prskey + "::debug::Running First Block");

//задаем параметры команд

// var referer=prompt("prs::" + prskey + "::parse::http://<rndt(jethosting.ru!!regjet.ru!!reg.ru!!nic.ru)>"); //список рефереров
// var cmdname="nav"; //команда переход
// var cmdtime=parseInt(10)//время показа команды от 20 до 30 секунд.
// var cmdparam="https://twitter.com/Berder_/status/682145017369079808"; //параметры команды


//список рефереров
var referer="https://www.facebook.com/loteron.loterona/posts/809505132511247"

var cmdname="nav"; //команда переход
var cmdtime=parseInt(5)//время показа команды от 20 до 30 секунд.
var cmdparam="http://vk.com/wall208558025_2240"; //параметры команды
//добавляем команду команду в презентацию. если удачно - команда появится на вкладке "Информация" программы тестирования презентации.
alert("prs::" + prskey + "::add::" + cmdname + "::" + cmdtime + "::" + cmdparam);

//команда выполнилась
alert("prs::" + prskey + "::debug::nav");

var cmdname="click";
var cmdtime=parseInt(2);
var cmdparam="a;link;geper.pythonanywhere.com";
alert("prs::" + prskey + "::add::" + cmdname + "::" + cmdtime + "::" + cmdparam); //Клик по случайной ссылки на сайте!

//event

// var cmdname="event";
// var cmdtime=parseInt(10);
// var cmdparam="a;text;geper.pythonanywhere.com";
// alert("prs::" + prskey + "::add::" + cmdname + "::" + cmdtime + "::" + cmdparam); //Клик по случайной ссылки на сайте!



// var cmdname="nav"; //команда переход
// var cmdtime=parseInt(prompt("prs::" + prskey + "::parse::<rndr(10:15)>")); //время показа команды от 15 до 20 секунд.
// var cmdparam="http://geper.pythonanywhere.com<referer(" + referer + ")>"; //параметры команды
//добавляем команду команду в презентацию. если удачно - команда появится на вкладке "Информация" программы тестирования презентации.
// alert("prs::" + prskey + "::add::" + cmdname + "::" + cmdtime + "::" + cmdparam);


var cmdname="click";
var cmdtime=parseInt(15);
var cmdparam="a;link;geper.pythonanywhere.com;-1";
alert("prs::" + prskey + "::add::" + cmdname + "::" + cmdtime + "::" + cmdparam); //Клик по случайной ссылки на сайте!


// var cmdname="script";
// var cmdtime=parseInt(60);
// var cmdparam="document.getElementsByTagName('iframe').scrollIntoView()";
// alert("prs::" + prskey + "::add::" + cmdname + "::" + cmdtime + "::" + cmdparam); // прокрутка

var cmdname="click";
var cmdtime=parseInt(20);
var cmdparam="iframe;number;0;318:177:326:182";
alert("prs::" + prskey + "::add::" + cmdname + "::" + cmdtime + "::" + cmdparam); //Клик по случайной ссылки на сайте!


var cmdname="script";
var cmdtime=parseInt(30);
var cmdparam="window.scrollTo(0,<rnd(3:#n)>);";
alert("prs::" + prskey + "::add::" + cmdname + "::" + cmdtime + "::" + cmdparam); // прокрутка








