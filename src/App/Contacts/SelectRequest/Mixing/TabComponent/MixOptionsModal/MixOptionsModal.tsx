import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useFormContext, Controller  } from "react-hook-form";
//Components
import NeonButton from "@common/NeonButton/NeonButton"
import { Modal } from '@mui/material';
import { Checkbox, Typography,  Box, Button, Icon} from '@mui/material';
import { RxMixerVertical, RxMixerHorizontal } from "react-icons/rx";
//Services
import sendContacts from"@services/sendContacts"
import "./MixOptionsModal.scss"




type PropTypes = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    openModal: boolean,
    tabType: string,
    price: number,
    trackNumber: number | string, 
    days: number
}

const options = [
  {
    title: "Extra-fast 1-day delivery",
    description: "Popular",
    price: 32.12,
    currency: "EUR"
  },
  {
    title: "Include DAW project file",
    description: "Include a DAW project file with the delivery.",
    price: 22.95,
    currency: "EUR"
  },
  {
    title: "Vocal Tuning",
    description: "I will tune your vocals using Autotune and Melodyne.",
    price: 27.53,
    currency: "EUR"
  },
  {
    title: "Mixed Stems",
    description: "I will send mixed and processed stems back to you.",
    price: 13.77,
    currency: "EUR"
  },
  {
    title: "Vocal Cleanup Plus",
    description: "I will de-breath, mouth de-click, de-pop, and remove saliva noises using iZotope RX software.",
    price: 18.36,
    currency: "EUR"
  },
  {
    title: "Analog Equipment",
    description: "I will use analog gear for your mix & master for a warmer sounding master.",
    price: 27.53,
    currency: "EUR"
  },
  {
    title: "Streaming Master",
    description: "I will send an additional streaming-optimized master (-14 LUFS) for Spotify, Apple Music, etc.",
    price: 9.18,
    currency: "EUR"
  },
  {
    title: "Dolby Atmos Master",
    description: "I will mix your track in Dolby Atmos and deliver a Dolby Atmos master compliant with Apple Music and Tidal.",
    price: 137.67,
    currency: "EUR",
    additionalDeliveryDays: 3
  }
];

function MixOptionsModal({setOpenModal, openModal, tabType, price, trackNumber, days}: PropTypes) {
    const navigate = useNavigate()
    const [responseObj, setResponseObj] = useState< null | {response: string, status: number}>(null)
    const {control, handleSubmit, register} = useFormContext()  
    const array = Array.from("len")
    
    useEffect(() => {
      if (responseObj == null) return 
     if (responseObj.status >= 300 && responseObj.status <= 500) throw new Error(JSON.stringify(responseObj))
     
    }, [responseObj])

  return (
            <>
              <Box className="devport-infomodal-ctnr-total">
                <div style={{display: "none"}}>
                  <input {...register("mix_type", {required: true, value: tabType})} type="text"/>
                  <input {...register("price", {required: true, value: price})} type="text"/>
                  <input {...register("track_number", {required: true, value: trackNumber})} type="text"/>
                  <input {...register("days", {required: true, value: days})} type="text"/>
                </div>
                <Box component="div" sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                <Typography className="devport-infomodal-header" >
                Mix Options
                </Typography>
                <Button onClick={() => {
                  setOpenModal(!openModal)
                }} size="large">
                  <Icon color="action" fontSize="large" style={{color: "white"}}>close</Icon>
                </Button>
                </Box>
                <div className="devport-infomodal-ctnr">
                 <hr />
                <div className="devport-infomodal-icon-ctnr">
                  {array.map((value, index) => {
                      if (index%2 === 0) return <RxMixerHorizontal key={index}/>
                      else return <RxMixerVertical key={index}/>
                  })}
                </div>
                <hr/>
                <Box sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                }}>
                  <Typography variant="h5" color="white">
                    {tabType}
                  </Typography>
                  <Typography variant="h5" color="white">
                    {price}€
                  </Typography>
                </Box>
                <Typography color="white">
                  {tabType} Mixing your song (up to {trackNumber} tracks/stems). 
                  Free consultation, up to three rendering
                </Typography>
                <hr />
                <Box component="div" sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem"}}>              
                  <Typography sx={{width: "100%"}} align="left" color="white">
                    Upgrade your order with extras
                  </Typography>
                  {options.map((option, index) => {

                    return <div key={index}><Box component="div" key={index} sx={{display: "flex", border: "solid 1px white", width: "100%", padding: "0.5rem", justifyContent: "space-between"} }>
                      <Box component="div" sx={{display: "flex", flexDirection: "column", alignItems: "left"}}>
                        <Typography color="white" sx={{fontSize: "0.9rem"}}>{option.title}</Typography>
                        <Typography color="white" sx={{fontSize: "0.8rem"}}>{option.description}</Typography>
                        <Typography color="white" sx={{fontSize: "0.8rem"}}>{option.price}€</Typography>
                      </Box>
                      <Controller
                        control={control}
                        name={`option-${option.title}`}
                        render={({field}) => (< Checkbox onChange={field.onChange} color="secondary" sx={{color: "white"}}/>)}
                      >
                        
                      </Controller>
                    </Box></div>
                  })}
                </Box>
                </div>
                <NeonButton
                  action={handleSubmit(async (data) => {
                    const responseObj = await sendContacts(data)
                    
                      setResponseObj(responseObj)

                  })}
                  buttonText="Request Your Mix"
                  classString="btn2"
                  style={{
                    width: "100%",
                    height: "5%",
                    marginTop: "1rem"
                  }}
                />
                <div className="devport-infomodal-img-ctnr">
                  <img src={`${import.meta.env.VITE_DEV_API}images/lwd-image.webp`} alt="" fetchPriority='high' />
                </div>
              </Box>
              <Modal
                open={responseObj?.status === 200 && true}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "40%",
                    border: "solid black 3px",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <p>Thank you so much for requesting a mix!</p>
                  <p>You'll receive an email with further instructions in short time!</p>
                  <button style={{color: "red", cursor: "pointer"}} onClick={() => {
                    setResponseObj(null)
                    navigate("/")
                    }}>X</button>
                </Box>
              </Modal>
            </>
              )
}

export default MixOptionsModal