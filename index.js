// question 1
// let studentRecords = [ 
//           {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] 

//          let stures = studentRecords.map((x) => {
//             console.log (x.name.toUpperCase());
            
//          }) 

    // questin 2
        //  let studentRecords = [ 
        //     {name: 'John', id: 123, marks : 98 },
        //     {name: 'Baba', id: 101, marks : 23 },
        //     {name: 'yaga', id: 200, marks : 45 },
        //     {name: 'Wick', id: 115, marks : 75 } ]    
            
        //     let stumarks = studentRecords.filter((mar) => {
        //         return mar.marks > 50;
        //     })
        //     console.log(stumarks);

        // question 3

          // let studentRecords = [ 
          // {name: 'John', id: 123, marks : 98 },
          // {name: 'Baba', id: 101, marks : 23 },
          // {name: 'yaga', id: 200, marks : 45 },
          // {name: 'Wick', id: 115, marks : 75 } ] 

        //   for(let i=0;i < studentRecords.length; i++){
        //     if((studentRecords[i].marks > 50) && (studentRecords[i].id > 120)){
        //         console.log(studentRecords[i]);
        //     }
        // }

        // question 4

        // let studentRecords = [ 
        //   {name: 'John', id: 123, marks : 98 },
        //   {name: 'Baba', id: 101, marks : 23 },
        //   {name: 'yaga', id: 200, marks : 45 },
        //   {name: 'Wick', id: 115, marks : 75 } ] 

        //   let stumarks = studentRecords.reduce((arr, sum) => arr + sum.marks,0);
        //   console.log(stumarks);

        // question 5 
        // let studentRecords = [ 
        //   {name: 'John', id: 123, marks : 98 },
        //   {name: 'Baba', id: 101, marks : 23 },
        //   {name: 'yaga', id: 200, marks : 45 },
        //   {name: 'Wick', id: 115, marks : 75 } ] 

        //   let array =[];

        //   for(i=0 ; i< studentRecords.length ; i++){
        //     if(studentRecords[i].marks > 50){
        //       array.push(studentRecords[i].name);
        //     }
        //   }
        //   console.log(array);

          // question 6

          // let array = [];
          // let a=0;
          // let studentRecords = [ 
          //   {name: 'John', id: 123, marks : 98 },
          //   {name: 'Baba', id: 101, marks : 23 },
          //   {name: 'yaga', id: 200, marks : 45 },
          //   {name: 'Wick', id: 115, marks : 75 } ] 
  
          //   for(let i=0 ; i< studentRecords.length ; i++){
          //      if(studentRecords[i].id > 120){
          //       (a += studentRecords[i].marks);
          //     }
          //   }
          //   console.log(a);
            
            
            // let totalmarks = studentRecords.filter((x) => x.id >120).reduce((acc , sum) => acc + sum.marks,0);
            // console.log(totalmarks);

            // question 7 
            
            // let studentRecords = [ 
            // {name: 'John', id: 123, marks : 98 },
            // {name: 'Baba', id: 101, marks : 23 },
            // {name: 'yaga', id: 200, marks : 45 },
            // {name: 'Wick', id: 115, marks : 75 } ] 

            // let result = studentRecords.map((x) => {
            //   if(x.marks < 50){
            //     x.marks += 15;
            //   }
            //   return x;
            // }).filter((x) => x.marks > 50).reduce((acc , curv) => acc + curv.marks,0);
            // console.log(result);

            // question 8
          
            let obj1 = { name: "akash", class: "12th", rollno: 4 };
            let obj2 = { name: "amit", class: "10th", rollno: 5 };
            let obj3 = { name: "ayush", class: "12th", rollno: 6 };
            let obj4 = { name: "avish", class: "10th", rollno: 7 };
            let obj5 = { name: "mia", class: "12th", rollno: 9 };
            let obj6 = { name: "sanjay", class: "9th", rollno: 1 };

            let array1 = [obj1,obj2,obj3,obj4,obj5,obj6];
            console.log(array1);