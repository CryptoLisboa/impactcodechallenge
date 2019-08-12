const isInSentence = (sentence, word) => sentence && word && !!sentence.trim().split(' ').find(wordInS => wordInS.includes(word))

export const searchWines = (list, termToSearch) => {
    const filtered = []
    for (let index = 0; index < list.length; index++) {
        const wine = list[index];
        let hasMatched = false
        // match year
        const terms = termToSearch.trim().split(' ')
        for (let index = 0; index < terms.length && !hasMatched; index++) {
            const element = terms[index];
            if ((!isNaN(element) && wine.year === parseInt(element)) || isInSentence(wine.name, element) || isInSentence(wine.description, element)) {
                hasMatched = true
            }
        }
        if(hasMatched) filtered.push(wine)
    }
    if(filtered.length) return filtered
}