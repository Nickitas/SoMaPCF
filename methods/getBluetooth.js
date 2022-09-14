
export const getBluetooth = async (si) => {

    console.log(`\n\n ### INFORMATION about Bluetooth \n`)

    try {
        const bluetoothDevices = await si.bluetoothDevices().then(data => data.map((item, i) => {
            console.log(`\ndevice ${i+1}: `)
            console.table(item)
        }))
    } catch(err) {
        console.log(err)
    }
}