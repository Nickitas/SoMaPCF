
export const getOS = async (si) => {

    console.log(`\n\n ### INFORMATION about Operating System: \n`)

    try {
        const osInfo = await si.osInfo().then(data => {
            console.log(`\nOS: `)
            console.table(data)
        })
        
        const users = await si.users(data => {
            data.map((item, i) => {
                console.log(`User ${i+1}: `)
                console.table(item)
            })
        })

    } catch(err) {
        console.log(err)
    }
}