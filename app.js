const student_info= [
 
    /**
     * name, roll, age, class, gender, location, Admission fees
    */
    
    
        ['Ridoy','1','21','12','male','chittagong','100'],
        ['Rakib','2','32','13','male','dighinala','200'],
        ['Rajib','3','31','10','male','dhaka','150'],
        ['Ruhi','4','21','12','female','chittagong','300'],
        ['Azim','5','20','10','male','dhaka','500'],
        ['Safia','6','11','5','female','dighinala','100'],
        ['Shahed','7','31','12','male','chittagong','200'],
        ['Sohel','8','11','6','male','chittagong','400'],
        ['Hasem','9','22','12','male','dhaka','150'],
        ['Rana','10','15','8','male','dighinala','180'],
        ['Raza','11','16','9','male','dhaka','400'],
        ['Rubel','12','11','7','male','dighinala','300'],
        ['Nafiz','13','18','10','male','chittagong','350'],
        ['Riya','14','40','11','female','chittagong','450'],
        ['Mitu','15','21','12','female','dighinala','580'],
        ['Faisal','16','21','12','male','chittagong','180'],
        ['Nazmul','17','15','8','male','dhaka','170'],
        ['Shakib','18','26','12','male','dighinala','140'],
        ['Rafi','19','20','10','male','chittagong','700'],
        ['Raisa','20','37','12','female','dighinala','250'],
        ['Rahad','21','10','11','male','chittagong','100'],
        ['Nahid','22','23','13','male','dhaka','500'],
        ['Shahab','23','20','10','male','cumilla','400'],
        ['Saber','24','21','12','male','chittagong','600'],
        ['Riad','25','25','14','male','chittagong','200'],
        ['Rana','26','11','6','male','cumilla','600'],
        ['Razu','27','19','9','male','chittagong','800'],
        ['Hasan','28','21','12','female','cumilla','400'],
        ['Dulal','29','20','10','female','dhaka','800'],
        ['Yeasin','30','24','13','male','cumilla','600'],
    ]
    
    
    /**
     * Total admission fees
    */

    // =========================
    
    let totalFees= 0;
    student_info.forEach((data,i)=>{
        console.log(`${i + 1}. ${data[0]} = ${data[6]}`);
        totalFees += parseInt(data[6])
    
    })
    console.log(`
    ---------------------
     Total fees= ${totalFees}`);
    
    
    
    //  Find All Female Students
    //  ==============================
    
    
    // student_info.sort().map((data,i)=>{
    //     if (data[4]=='female') {
    //         console.log(`${data[0]}`);
    //     }
        
    // })
    
    
    
    // - Find class wise student result
    // ===================================
    
    // console.log(`
    //  Student of class- 9
    // ========================
    // `)
    // student_info.sort().map((data,i)=>{
    //     if (data[3]==9) {
    //         console.log(`${i+1}. Hello ${data[0]}, your class is ${data[3]}.`);
    //     }
    // })
    // console.log(`
    //  Student of class- 10
    // ========================
    // `)
    // student_info.sort().map((data,i)=>{
    //     if (data[3]==10) {
    //         console.log(`${i+1}. Hello ${data[0]}, your class is ${data[3]}.`);
    //     }
    // })
    // console.log(`
    //  Student of class- 11
    // ========================
    // `)
    // student_info.sort().map((data,i)=>{
    //     if (data[3]==11) {
    //         console.log(`${i+1}. Hello ${data[0]}, your class is ${data[3]}.`);
    //     }
    // })
    // console.log(`
    //  Student of class- 12
    // ========================
    // `)
    // student_info.sort().map((data,i)=>{
    //     if (data[3]==12) {
    //         console.log(`${i+1}. Hello ${data[0]}, your class is ${data[3]}.`);
    //     }
    // })
    // console.log(`
    //  Student of class- 13
    // ========================
    // `)
    // student_info.sort().map((data,i)=>{
    //     if (data[3]==13) {
    //         console.log(`${i+1}. Hello ${data[0]}, your class is ${data[3]}.`);
    //     }
    // })
    
    
    
    
    // - Location wise student result
    // =================================
    
    // console.log(`
    //  Students who are from Dhaka:
    // =============================
    // `)
    // student_info.forEach((data,i)=>{
    //     if (data[5]=='dhaka') {
    //         console.log(`${i+1}. Hi ${data[0]}, your location is ${data[5]}`);
    //     }
    // })
    // console.log(`
    //  Students who are from Cumilla:
    // ===============================
    // `)
    // student_info.forEach((data,i)=>{
    //     if (data[5]=='cumilla') {
    //         console.log(`${i+1}. Hi ${data[0]}, your location is ${data[5]}`);
    //     }
    // })
    // console.log(`
    //  Students who are from Chittagong:
    // ==================================
    // `)
    // student_info.forEach((data,i)=>{
    //     if (data[5]=='chittagong') {
    //         console.log(`${i+1}. Hi ${data[0]}, your location is ${data[5]}`);
    //     }
    // })
    // console.log(`
    //  Students who are from Dighinala:
    // =================================
    // `)
    // student_info.forEach((data,i)=>{
    //     if (data[5]=='dighinala') {
    //         console.log(`${i+1}. Hi ${data[0]}, your location is ${data[5]}`);
    //     }
    // })
    
    
    
    
    // - find student between 10 - 25 age
    // ===================================
    
    
    // studentData.sort().map((data)=>{
    //     if (data[2]>=10 && data[2]<=25) {
    //         console.log(`
    //         Student name: ${data[0]}
    //         Student Age : ${data[2]}
    //         `);
            
    //     }
    // })


