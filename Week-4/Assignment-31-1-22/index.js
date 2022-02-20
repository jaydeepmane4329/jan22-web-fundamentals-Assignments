
   /*Use the object. take a number input from user  and return a list of all 
     the students who have scored equal to or more then those marks */

   var obj = {
    "first_name": "Aayush",
    "last_name": "Sinha",
    "email": "aayush.aryan@me.com",
    "website": "sdfhsdhfjds",
    "k": "This is Key K's value",
    "students": [
	{
	    "name": "Jaydeep",
	    "marks": 15
	},
	{
	    "name": "Pawan",
	    "marks": 17
	},
	{
	    "name": "Aayush",
	    "marks": 19
	},
	{
	    "name": "Kabir",
	    "marks": 21
	},
	{
	    "name": "Akhil",
	    "marks": 0
	},
        {
	    "name": "Vikas",
	    "marks": 27
	},
    ],
};
    
    var num = parseInt(prompt("Enter a number"));
    var studentData =  obj.students;
    for(var i = 0;i < studentData.length; i++){
              if(studentData[i].marks >= num){
                  console.log(studentData[i].name);
             }
   }







