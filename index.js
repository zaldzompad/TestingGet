import React from 'react';
import ReactDOM from 'react-dom';


setInterval(myTimer,1000);
function myTimer()
{

	ReactDOM.render(
		
		<h1> Time nows {new Date().toLocaleTimeString()}</h1>,document.getElementById('root')

	);
}


