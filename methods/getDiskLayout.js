
export const getDiskLayout = async (si) => {

    console.log(`\n\n ### INFORMATION about Physical Disk Layout: \n`)

    try {
        const diskLayout = await si.diskLayout().then(data => {
            data.map((item, i) => {
                console.log(`\nlayout ${i+1}: `)
                console.table(item)
            })
        })

    } catch(err) {
        console.log(err)
    }
}