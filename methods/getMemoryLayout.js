
export const getMemoryLayout = async (si) => {

    console.log(`\n\n ### INFORMATION about Memory Layout ${i+1}: \n`)

    try {
        const memLayout = await si.memLayout().then(data => {
            data.map((item, i) => {
                console.log(`\nlayout ${i+1}: `)
                console.table(item)
            })
        })

    } catch(err) {
        console.log(err)
    }
}