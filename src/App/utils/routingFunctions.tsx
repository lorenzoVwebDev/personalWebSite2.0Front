export function createBacklinkArray(backlickArray: string[]): string[] {
   let newBackLinkArray: string[] = [];

  for (let i = 0; i < backlickArray.length; i++) {
      if (i === 0) {
        newBackLinkArray[i] = backlickArray[i]  
      } else if (i === 1) {
        newBackLinkArray[i] = newBackLinkArray[i-1] + backlickArray[i] 
      } else {
        newBackLinkArray[i] = newBackLinkArray[i-1] + '/' + backlickArray[i]
      }
  }

  return newBackLinkArray
 }

 export function splitPathCreator(devPath: string): string[] {
    const backlickArray: string[] = devPath.split('/')
    backlickArray[0] = '/'
    return backlickArray
 }