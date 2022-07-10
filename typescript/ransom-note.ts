const canConstruct = (ransomNote: string, magazine: string): boolean => {
    let arr = []
    const arrMagazine = magazine.split('')
    const arrRansomNote = ransomNote.split('')
    arrRansomNote.forEach((v) => {
        const index = arrMagazine.indexOf(v)
        if (index > -1) {
            arr.push(arrMagazine.splice(index, 1))
        }
    })

    return arr.length >= ransomNote.length
}
