
export const getUsb = async (si) => {

    console.log(`\n\n ### INFORMATION about USBs: \n`)

    try {
        const usb = await si.usb().then(data => {
            data.map((item, i) => {
                console.log(`USB device ${i+1}`)
                console.table(item)
            })
        })
    } catch(err) {
        console.log(err)
    }
}