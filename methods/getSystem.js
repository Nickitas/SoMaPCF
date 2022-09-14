
export const getSystem = async (si) => {

    console.log(`\n\n ### INFORMATION about System: \n`)

    try {
        const system = await si.system().then(data => {
            console.log(`\nsystem: `)
            console.table(data)
        })
        const uuid = await si.uuid().then(data => {
            console.log(`\nUUID: `)
            console.table(data)
        })
        const bios = await si.bios().then(data => {
            console.log(`\nBIOS: `)
            console.table(data)
        })
        const baseboard = await si.baseboard().then(data => {
            console.log(`\nBaseboard: `)
            console.table(data)
        })
        const chassis = await si.chassis().then(data => {
            console.log(`\nChassis: `)
            console.table(data)
        })
        

    } catch(err) {
        console.log(err)
    }
}