
export const getBlockDevices = async (si) => {

    console.log(`\n\n ### INFORMATION about Array of Disks, Partitions, Raids and Roms ${i+1}: \n`)

    try {
        const blockDevices = await si.blockDevices().then(data => {
            data.map((item, i) => {
                console.log(`\ndevice ${i+1}:`)
                console.table(item)
            })
        })
        
    } catch (err) {
        console.log(err)
    }
}