function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ijjqV1wM79":
        Script1();
        break;
      case "6dNtKui0NYL":
        Script2();
        break;
      case "5lmcuVuqYht":
        Script3();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwhaztDWHKcVUyunI3sAMuTXBMk6VHey2OM6LWPg36yehR6s3qjqOncnR0tMa9RLZf7/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v2q1attempts:player.GetVar("v2q1attempts"),v2q1answeredcorrect:player.GetVar("v2q1answeredcorrect")})
	}
	)
}

function Script2()
{
  const url="https://script.google.com/macros/s/AKfycbwhaztDWHKcVUyunI3sAMuTXBMk6VHey2OM6LWPg36yehR6s3qjqOncnR0tMa9RLZf7/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v2q2attempts:player.GetVar("v2q2attempts"),v2q2answeredcorrect:player.GetVar("v2q2answeredcorrect")})
	}
	)
}

function Script3()
{
  const url="https://script.google.com/macros/s/AKfycbwhaztDWHKcVUyunI3sAMuTXBMk6VHey2OM6LWPg36yehR6s3qjqOncnR0tMa9RLZf7/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v2q3attempts:player.GetVar("v2q3attempts"),v2q3answeredcorrect:player.GetVar("v2q3answeredcorrect")})
	}
	)
}

