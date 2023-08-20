//Normal function
function getStudents(classRoom){
    let {hasTeachingAssistance, classList} = classRoom;
    let teacher, teachingAssistance, students;

    if(hasTeachingAssistance){
        [teacher, teachingAssistance, ...students] = classList;
    }else{
        [teacher, ...students] = classList;
    }
    return students
}

console.log(getStudents({
    hasTeachingAssistance:false,
    classList: ["Eddy", "Grace", "Stan"]
}));



//Arrow function
const getStudents = (classRoom) =>{
    let {hasTeachingAssistance, classList} = classRoom;
    let teacher, teachingAssistance, students;

    if(hasTeachingAssistance){
        [teacher, teachingAssistance, students] = classList;
    }else{
        [teacher, ...students] = classList;
    }
    return students;
}

console.log(getStudents({
    hasTeachingAssistance: false,
    classList: ["Eddy", "Grace", "Stan"]
}));
