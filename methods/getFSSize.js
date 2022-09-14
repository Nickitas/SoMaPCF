
export const getFSSize = async (si) => {
    
    console.log(`\n\n ### INFORMATION about Mounted File Systems: \n`)

    try {
        const fsSize = await si.fsSize().then(data => {
            data.map((item, i) => {
                console.log(`\nfs ${i+1}: `)
                console.table(item)
            })
        })

    } catch(err) {
        console.log(err)
    }
}