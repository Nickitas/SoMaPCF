
export const getMemory = async (si) => {

    console.log(`\n\n ### INFORMATION about Memory: \n`)

    try {
        const mem = await si.mem().then(data => {
            console.table(data)
        })

    } catch(err) {
        console.log(err)
    }
}