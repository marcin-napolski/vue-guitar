    // nString function that will return an array based on delivered array
    // it's looped (if regested array is longer than provided) and can start from defined position 
    var nString = (notesList, startingPosition, finalLength) => {
        let newArray = [];
        for (let n = startingPosition; n < finalLength+startingPosition; n++) {
            if (n >= notesList.length) {
                newArray.push(notesList[n - notesList.length]);
            } else {
                newArray.push(notesList[n]);
            }
        }
        return newArray;
    }
    // basic C-scale
    scale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    
    // let's see the 1st five threads of D-String
    forthString = nString(scale, 2, 6);
    console.log(forthString);
