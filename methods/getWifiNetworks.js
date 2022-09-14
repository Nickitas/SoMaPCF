
export const getWifiNetworks = async (si) => {

    console.log(`\n\n ### INFORMATION about Wifi Networks \n`)

    try {
        const wifiNetworks = await si.wifiNetworks().then(data => {
            console.log(`\nWi-Fi Networks`)
            data.map((item, i) => {
                console.log(`\nnet ${i+1}: `)
                console.table(item)
            })
        })

        const wifiInterfaces = await si.wifiInterfaces().then(data => {
            console.log(`\nWi-Fi Interfaces`)
            data.map((item, i) => {
                console.log(`\ninterface ${i+1}: `)
                console.table(item)
            })
        })

        const wifiConnections = await si.wifiConnections().then(data => {
            console.log(`\nWi-Fi Connections`)
            data.map((item, i) => {
                console.log(`\wconnection ${i+1}: `)
                console.table(item)
            })
        })

    } catch(err) {
        console.log(err)
    }
}