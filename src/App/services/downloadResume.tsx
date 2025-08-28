import { saveAs } from 'file-saver';

const downloadResume = async () => {
  //fake uri
  try {
    const response = await fetch(`${import.meta.env.VITE_DEV_API}upload/resume`).
    then(response => response.blob());
  
    if (response) {
      const urlOjbect = URL.createObjectURL(response);

      const a = document.createElement('a');
      a.href = urlOjbect;
      a.target = '__blank'; 
      a.setAttribute("download", 'lorenzoViganegoCV.pdf');
      a.click(); 
      document.body.removeChild(a); 

      window.URL.revokeObjectURL(urlOjbect);
    }

  
} catch (err) {
  console.error(err)
}
}

export default downloadResume;