function experssion(gradScore,hscScore,sscScore,candidateName)
{
    if (gradScore>=70||hscScore>=80||sscScore>=90) {
        console.log(`${candidateName}: you are eligiable for TCS interview`);
        
    } else {console.log(`${candidateName}:Unfortunately you are not eligiable for interview`);
        
    }
}
experssion(80,86,90,"Rutuja");
console.log("************************");
experssion(70,65,55,"Dipali");
console.log("************************");
experssion(60,79,88,"Kadambari");