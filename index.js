
const isCapitalLetter = (letter) => letter === letter.toUpperCase();
const isLetter = (value) =>{
    const regex = new RegExp("[A-Za-z]")
    return regex.test(value)
}
const vocals = ["a","e","i","u","o"]
const isVocal = (letter) => vocals.includes(letter); 
const transformWord = (word) => {
    const muttedString = word.split("")
    const firstLetter = muttedString[0]
    const lastLetter = [...muttedString].pop();
    const isFirstLetterCapital = isCapitalLetter(firstLetter)
    const isLastLetterLetter = isLetter(lastLetter)

    if(!isVocal(firstLetter)){
        if(!isLastLetterLetter){
            muttedString.pop();
        }
        muttedString.push(isFirstLetterCapital ? firstLetter.toLowerCase() : firstLetter)
        muttedString.shift();
        if(isFirstLetterCapital){
            muttedString[0] = muttedString[0].toUpperCase()
        }
    }
    muttedString.push("a")
    muttedString.push("y")
    if(!isLastLetterLetter){
        muttedString.push(lastLetter)
    }
    return muttedString.join("") 
}
const translator = (string) => {
    const words =  string.split(" ")
    const muttedWords = words.map(transformWord)
    return muttedWords.join(" ")
}

module.exports = translator