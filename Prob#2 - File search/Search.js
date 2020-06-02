let obj = require('./Store.json')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Which file that you want to search?\n', file => {
    fileSearch(file, obj)
    readline.close();
});

let ans = []

function fileSearch(fileToSearch, filesObj) {
    let keyArr = Object.keys(filesObj)
    for (let i = 0; i < keyArr.length; i++) {
        search(fileToSearch, keyArr[i], filesObj, '/' + keyArr[i] + '/')
    }
    console.log(ans)
}

function search(fileToSearch, currentKey, filesObj, directory) {
    let arr = filesObj[currentKey]
    if (arr instanceof Array) {
        arr.sort()
        arr.forEach((key) => {
            if (key === fileToSearch) {
                ans.push(directory + key)
            }
        })
    }
    else {
        let _keyArr = Object.keys(filesObj[currentKey])
        let keyArr = _keyArr.map((key) => {
            if (key !== '_files') {
                return key
            }
        })
        keyArr.sort().unshift('_files')
        keyArr.forEach((key) => {
            if (key !== undefined) {
                let moreDirect = key + '/'
                if (moreDirect === '_files/') {
                    moreDirect = ''
                }
                search(fileToSearch, key, filesObj[currentKey], directory + moreDirect)
            }
        })
    } 
}
