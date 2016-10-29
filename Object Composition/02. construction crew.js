function processWorker (worker){

    if (worker.handsShaking == true){

        return letsDrinkBastards(worker);

    }

    else {

        return worker;
    }


    function letsDrinkBastards (worker){

       let weight = worker.weight;
        let experience = worker.experience;

        worker.bloodAlcoholLevel += 0.1 * weight * experience;
        worker.handsShaking = false;

        return worker;


    }

}

processWorker({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }
);

