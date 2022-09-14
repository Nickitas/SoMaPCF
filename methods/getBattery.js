
export const getBattery = async (si) => {

    console.log(`\n\n ### INFORMATION about Battery: \n`)

    try {
        const battery = await si.battery().then(data => {
            console.table(data)
        })

    } catch(err) {
        console.log(err)
    }
}