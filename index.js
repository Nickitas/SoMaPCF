import si from 'systeminformation'
import promptSync from 'prompt-sync'

import { getOS } from './methods/getOS.js'
import { getSystem } from './methods/getSystem.js'
import { getCPU } from './methods/getCPU.js'
import { getDiskLayout } from './methods/getDiskLayout.js'
import { getBlockDevices } from './methods/getBlockDevices.js'
import { getDisksIO } from './methods/getDisksIO.js'
import { getFSSize } from './methods/getFSSize.js'
import { getMemory } from './methods/getMemory.js'
import { getMemoryLayout } from './methods/getMemoryLayout.js'
import { getBattery } from './methods/getBattery.js'
import { getGraphics } from './methods/getGraphics.js'
import { getProcesses } from './methods/getProcesses.js'
import { getPrinter } from './methods/getPrinter.js'
import { getNetwork } from './methods/getNetwork.js'
import { getWifiNetworks } from './methods/getWifiNetworks.js'
import { getBluetooth } from './methods/getBluetooth.js'
import { getVirtualBox } from './methods/getVirtualBox.js'




// const prompt = promptSync()

// console.log(`
// >>> What information you want to get?
// > press 1: information about OS;
// > press 2: information about System;
// > press 3: information about CPU;
// > press 4: information about Disk Layout;
// > press 5: information about Block Devices;
// > press 6: information about Disks IO;
// > press 7: information about Fail System;
// > press 8: information about Memory;
// > press 9: information about Memory Layout;
// > press 10: information about Battery;
// > press 11: information about Graphics;
// > press 12: information about Processes;
// > press 13: information about Printers;
// > press 14: information about Networks;
// > press 15: information about Wi-fi Networks;
// > press 16: information about Bluetooth;
// > press 17: information about VirtualBox;
// > press "s" to get information.
// `)

// let user_choice = ''

// while(user_choice != 's') {
//     user_choice = prompt('Process code: ')

//     if(user_choice == 1) {
//         getOS(si)
//     }
//     if(user_choice == 2) {
//         getSystem(si)
//     }
//     if(user_choice == 3) {
//         getCPU(si)
//     }
//     if(user_choice == 4) {
//         getDiskLayout(si)
//     }
//     if(user_choice == 5) {
//         getBlockDevices(si)
//     }
//     if(user_choice == 6) {
//         getDisksIO(si)
//     }
//     if(user_choice == 7) {
//         getFSSize(si)
//     }
//     if(user_choice == 8) {
//         getMemory(si)
//     }
//     if(user_choice == 9) {
//         getMemoryLayout(si)
//     }
//     if(user_choice == 10) {
//         getBattery(si)
//     }
//     if(user_choice == 11) {
//         getGraphics(si)
//     }
//     if(user_choice == 12) {
//         getProcesses(si)
//     }
//     if(user_choice == 13) {
//         getPrinter(si)
//     }
//     if(user_choice == 14) {
//         getNetwork(si)
//     }
//     if(user_choice == 15) {
//         getWifiNetworks(si)
//     }
//     if(user_choice == 16) {
//         getBluetooth(si)
//     }
//     if(user_choice == 17) {
//         getVirtualBox(si)
//     }
//     else {
//         console.log(' ~~~~ Error of choice! ~~~~')
//     }
//     console.log('Processed...')

// }