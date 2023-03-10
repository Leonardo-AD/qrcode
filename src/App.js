import { useState } from 'react'
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode';

import './App.css';

export function App() {

  const [link, setLink] = useState("")
  const [qrcodeImage, setQrcodeImage] = useState("")

  function imageGenerate(link_url){
    
    QRCodeLink.toDataURL(link_url, {
      width: 500,
      margin: 2
    }, function(error, url){ //Calback
      setQrcodeImage(url)
    })

  }

  function handleLink(event){

    setLink(event.target.value)
    imageGenerate(event.target.value)

  }

  return (
    <div className ="container">
      
      <QRCode
        value = { link }
      />

      <input
        className = "text-input"
        placeholder = "Digite seu link"
        maxLength = "2000"
        value = { link }
        onChange = { (event) => handleLink(event) }
      />

      <a href = { qrcodeImage } download = {`qrcode.png`}>Baixar QR Code</a>  

    </div>
  );
}