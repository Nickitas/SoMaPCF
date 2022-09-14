
export const getGraphics = async (si) => {

    console.log(`\n\n ### INFORMATION about  Graphics Controllers and Displays: \n`)

    try {
        const graphics = await si.graphics().then(data => {

            data.controllers.map(item => {
                console.table(item)
            })
            
            data.displays.map(item => {
                console.table(item)
            })
        })

    } catch(err) {
        console.log(err)
    }
}