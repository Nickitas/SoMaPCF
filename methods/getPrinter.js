
export const getPrinter = async (si) => {

    console.log(`\n\n ### INFORMATION about Printers: \n`)

    try {
        const printer = si.printer().then(data => {
            data.map((item, i) => {
                console.log(`\device ${i+1}: `)
                console.table(item)
            })
        })

    } catch(err) {
        console.log(err)
    }
}