//-----------------------------------	Оптимизация		-----------------------------------

alert("prs::" + prskey + "::cookies::ALL");
alert("prs::" + prskey + "::set::mouse=1");
alert("prs::" + prskey + "::agent::group=IE;FF;Chrome;Opera;Safari");
alert("prs::" + prskey + "::set::debug=1");
alert("prs::" + prskey + "::set::js=1"); //влючение javascript
alert("prs::" + prskey + "::set::popup=2");
alert("prs::" + prskey + "::set::popuptab=next");
//выводим информацию о показе первого блока на вкладку Журнал программы тестирования.
alert("prs::" + prskey + "::debug::Running First Block");
//список рефереров
var cmdname="nav"; //команда переход
var cmdtime=parseInt(13)//время показа команды от 20 до 30 секунд.5
var cmdparam="http://twitter.com/dimonddddd"; //параметры команды
//добавляем команду команду в презентацию. если удачно - команда появится на вкладке "Информация" программы тестирования презентации.
alert("prs::" + prskey + "::add::" + cmdname + "::" + cmdtime + "::" + cmdparam);
//########
var cmdname="click";
var cmdtime=parseInt(17);
var cmdparam="a;link;t.co;-1"
alert("prs::" + prskey + "::add::" + cmdname + "::" + cmdtime + "::" + cmdparam); //Клик по случайной ссылки на сайте!
//########
var cmdname="script";
var cmdtime=parseInt(9);
var cmdparam="window.scrollTo(0,<rnd(3:#n)>);";
alert("prs::" + prskey + "::add::" + cmdname + "::" + cmdtime + "::" + cmdparam); // прокрутка
//########
var cmdname="script";
var cmdtime=parseInt(5);
var cmdparam="window.scrollTo(0,<rnd(0:0)>);";
alert("prs::" + prskey + "::add::" + cmdname + "::" + cmdtime + "::" + cmdparam); // прокрутка
//########
var cmdname="click";
var cmdtime=parseInt(13);
var cmdparam="img;id;skip_ad_button"
alert("prs::" + prskey + "::add::" + cmdname + "::" + cmdtime + "::" + cmdparam); //Клик по случайной ссылки на сайте!
//########
var cmdname="script";
var cmdtime=parseInt(9);
var cmdparam="window.scrollTo(0,<rnd(3:#n)>);";
alert("prs::" + prskey + "::add::" + cmdname + "::" + cmdtime + "::" + cmdparam); // прокрутка



