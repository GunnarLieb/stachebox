/**
* This is a bug creation file which is only used in development
 */
import Stachebox from "stachebox";

fetch(
    '/stachebox/api/v1/authentication',
    {
        method: 'HEAD'
    }
).then(
    ( response ) => {

        let authToken = response.headers.get( "x-auth-token" );

        if( authToken ){
            window.StacheboxLogger = new Stachebox( { token : authToken } );

            window.onerror = function( message, source, lineno, colno, error ) {
                if( error ){
                    StacheboxLogger.log( error );
                }
            };
        }
    }
);

var makeErrors = function(){
	fetch(
		'/main/data',
		{
			method: 'get'
		}
	);
}

setInterval(
	function(){
		throw( "Boom goes the javascript" );
	},
	5000
);
setInterval(
	function(){
		throw( "Kapow! Your javascript is buggy" );
	},
	7000
);
setInterval(
	function(){
		makeErrors();
	},
	10000
);