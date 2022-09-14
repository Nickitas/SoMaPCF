
export const getDisksIO = async (si) => {

  console.log('\n\n ### INFORMATION about Current Transfer Stats: \n')  

  try {
    setInterval(() => {
      si.disksIO().then(data => {
        console.table(data)  
      })
    }, 1000)
    
  } catch (err) {
    console.log(err)
  }
}