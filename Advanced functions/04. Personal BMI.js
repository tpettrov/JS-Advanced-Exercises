function solve(name, age, weight, height) {

    let patient = {};

    patient.name = name;
    patient.personalInfo = {age: age, weight: weight, height: height};
    patient.BMI = Math.round(weight / ((height/ 100) * height / 100));
    patient.status = status(patient.BMI);

    if(patient.status == 'obese'){

        patient.recommendation = 'admission required';
    }

/*
    let patient = {

        name: name,
        personalInfo: {age: age, weight: weight, height: height},
        BMI:  Math.round(weight / ((height/ 100) * height / 100)),
        status: status(this.BMI),

    }*/

    (()=> { return ('aha')})()
    function status(bmi) {

        let b = Number(bmi);

        if (b < 18.5) return 'underweight';
        if (b < 25) return 'normal';
        if (b < 30) return 'overweight';
         if (b > 30) return 'obese';

    }

return(patient);

}


solve('Peter', 29, 75, 182);