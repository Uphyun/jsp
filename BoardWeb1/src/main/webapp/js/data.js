/**
 * js/data.js
 */
const myMembers = [
	{id: 'user01', name:'홍길동', phone:'010-1111-2222', point:90}, // or new object();
	{id: 'user02', name:'박석민', phone:'010-2341-2321', point:95},
	{id: 'user03', name:'김시후', phone:'010-4567-7896', point:120}	
]; //or new Array();

const json = `[{"id":1,"first_name":"Lowell","last_name":"Alfonsini","email":"lalfonsini0@house.gov","gender":"Male","salary":4693},
{"id":2,"first_name":"Eleonora","last_name":"Glew","email":"eglew1@posterous.com","gender":"Female","salary":7471},
{"id":3,"first_name":"Wilmette","last_name":"Grouer","email":"wgrouer2@va.gov","gender":"Female","salary":4122},
{"id":4,"first_name":"Mateo","last_name":"Creyke","email":"mcreyke3@hexun.com","gender":"Male","salary":6258},
{"id":5,"first_name":"Lexis","last_name":"Urey","email":"lurey4@behance.net","gender":"Female","salary":7579},
{"id":6,"first_name":"Hasty","last_name":"Von Der Empten","email":"hvonderempten5@gravatar.com","gender":"Male","salary":3859},
{"id":7,"first_name":"Philbert","last_name":"Phythean","email":"pphythean6@netscape.com","gender":"Male","salary":5547},
{"id":8,"first_name":"Vita","last_name":"McCurlye","email":"vmccurlye7@over-blog.com","gender":"Female","salary":5002},
{"id":9,"first_name":"Yorker","last_name":"Clougher","email":"yclougher8@over-blog.com","gender":"Male","salary":7681},
{"id":10,"first_name":"Filberto","last_name":"Martusewicz","email":"fmartusewicz9@storify.com","gender":"Male","salary":3506},
{"id":11,"first_name":"Maxy","last_name":"Such","email":"msucha@alexa.com","gender":"Male","salary":3467},
{"id":12,"first_name":"Perle","last_name":"Faircliff","email":"pfaircliffb@storify.com","gender":"Female","salary":6940},
{"id":13,"first_name":"Catlaina","last_name":"O'Harney","email":"coharneyc@creativecommons.org","gender":"Female","salary":7869},
{"id":14,"first_name":"Boony","last_name":"Ninnotti","email":"bninnottid@storify.com","gender":"Male","salary":7827},
{"id":15,"first_name":"Melisandra","last_name":"Brenneke","email":"mbrennekee@rediff.com","gender":"Female","salary":5690}]`;


const employees = JSON.parse(json); //자바스립으로 만들어줌
