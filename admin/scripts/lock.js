var Lock = function () {

    return {
        //main function to initiate the module
        init: function () {

             $.backstretch([
		        "media/bg/1.jpg",
    		    "media/bg/2.jpg",
    		    "media/bg/3.jpg",
    		    "media/bg/4.jpg"
		        ], {
		          fade: 1000,
		          duration: 8000
		      });
        }

    };

}();