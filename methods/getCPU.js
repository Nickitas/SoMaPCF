
export const getCPU = async (si) => {

    console.log(`\n\n ### INFORMATION about CPU:\n`)
    
    try {
        const cpu = await si.cpu()
        const cpuTemp = await si.cpuTemperature().then(data => data.main)

        console.log(`[CPU Temperature]: ${cpuTemp} C`)
        console.table(cpu)
        
    } catch(err) {
        console.log(err)
    }
}