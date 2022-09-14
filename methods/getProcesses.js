
export const getProcesses = async (si) => {
    
    console.log(`\n\n ### INFORMATION about Processes: \n`)

    try {
        const processes = await si.processes().then(data => {
            data.list.map((item, i) => {
                console.log(`\nprocesses details ${i+1}: `)
                console.table(item)
            })
        })
    } catch(err) {
        console.log(err)
    }
}