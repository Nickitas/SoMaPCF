
export const getVirtualBox = async (si) => {

    console.log(`\n\n ### INFORMATION about Bluetooth \n`)

    try {

        const vboxInfo = await si.vboxInfo().then(data => data.map((item, i) => {
            console.log(`\nVB ${i+1}: `)
            console.table(item)
        }))

    } catch(err) {
        console.log(err)
    }
}