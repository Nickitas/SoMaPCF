
export const getNetwork = async (si) => {
    
    console.log(`\n\n ### INFORMATION about Network: \n`)

    try {

        const networkInterfaceDefault = await si.networkInterfaceDefault().then(
            data => console.log(`Network Interface default: ${data}`)
        )

        const networkGatewayDefault = await si.networkGatewayDefault().then(
            data => console.log(`Network Gateway default: ${data}`)
        )

        const networkInterfaces = await si.networkInterfaces().then(data => {
            console.log(`\nNetwork Interfaces: \n`)
            data.map((item, i) => {
                console.log(`\ninterface ${i+1}: `)
                console.table(item)
            })
        })

        const networkStats = await si.networkStats().then(data => {
            console.log(`\nNetwork Stats: \n`)
            data.map((item, i) => {
                console.log(`№ ${i+1}`)
                console.table(item)
            })
        })

        const networkConnections = await si.networkConnections().then(data => {
            console.log(`\nNetwork Connections: \n`)
            data.map((item, i) => {
                console.log(`\nconnection ${i+1}: `)
                console.table(item)
            })
        })


    } catch(err) {
        console.log(err)
    }
}