import  prompt  from 'prompt-sync';
const input = prompt()

function main() {
    let [a,b] = input('Digite dois valores (A e B):').split(' ').map(Number)
    let counter = 2
    let mmc = 1

    while (a != 1 || b!=1) {
        // console.log(mmc)
        

        if(a%counter===0 && b%counter===0) {
            a = a/counter
            b = b/counter
            mmc *= counter

            console.log(counter)
        } else if(a%counter===0) {
            a = a/counter
            mmc *= counter

            console.log(counter)
        } else if(b%counter===0) {
            b = b/counter
            mmc *= counter

            console.log(counter)
        } else {
            counter++
        }

    }

    console.log(`MMC: ${mmc}`)
}

main()