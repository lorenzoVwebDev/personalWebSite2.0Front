import { saveAs } from 'file-saver';

const downloadResume = async () => {
  //fake uri
  try {
      const response = await fetch(`${import.meta.env.VITE_DEV_API}/getcv`).
    then(response => response.blob());
  
  saveAs(response, "lorenzoViganegoCV.pdf")
  
} catch (err) {
  console.error(err)
}
}

export default downloadResume;