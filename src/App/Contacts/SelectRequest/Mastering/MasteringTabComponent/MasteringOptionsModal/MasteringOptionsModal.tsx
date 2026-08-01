import NeonButton from "@common/NeonButton/NeonButton"
import { useFormContext, Controller } from "react-hook-form"
import { Checkbox, Typography, Box, Button, Icon } from '@mui/material'
import sendContacts from "@services/sendContacts"
import "./MasteringOptionsModal.scss"
//react-icons
import { RxMixerVertical, RxMixerHorizontal } from "react-icons/rx"

type PropTypes = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    openModal: boolean
    tabType:  "low" | "balanced" | "high"
}

const options = [
    {
        title: "Extra-fast 1-day delivery",
        description: "Popular",
        price: 13.65,
        currency: "EUR"
    },
    {
        title: "Additional revision",
        description: "Add an additional revision your seller will provide after the delivery.",
        price: 13.65,
        currency: "EUR"
    },
    {
        title: "Additional song",
        description: "Additional song added to your order",
        price: 45.49,
        currency: "EUR"
    },
    {
        title: "Mix Feedback",
        description: "I will give you a mix feedback before mastering",
        price: 13.65,
        currency: "EUR"
    },
    {
        title: "Unlimited Revisions",
        description: "I will give you unlimited revisions, so we fine-tune your master until it's exactly right.",
        price: 22.75,
        currency: "EUR"
    }
]

function MasteringOptionsModal({ setOpenModal, openModal, tabType}: PropTypes) {
    const { control, handleSubmit, register } = useFormContext()
    const array = Array.from("len")

    return (
        <Box className="devport-infomodal-ctnr-total">
            <div style={{ display: "none" }}>
                <input {...register("mastering_type", { required: true, value: tabType })} type="text" />
            </div>
            <Box component="div" sx={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "10%" }}>
                <Typography className="devport-infomodal-header">Mastering Options</Typography>
                <Button onClick={() => setOpenModal(!openModal)} size="large">
                    <Icon color="action" fontSize="large" style={{ color: "white" }}>close</Icon>
                </Button>
            </Box>
            <div className="devport-infomodal-ctnr">
                <hr />
                <div className="devport-infomodal-icon-ctnr">
                    {array.map((value, index) => {
                        if (index % 2 === 0) return <RxMixerHorizontal key={index} />
                        return <RxMixerVertical key={index} />
                    })}
                </div>
                <hr />
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", paddingLeft: "1rem", paddingRight: "1rem" }}>
                    <Typography variant="h5" color="white">{String(tabType).toUpperCase()}</Typography>
                </Box>
                <Typography color="white">
                    {String(tabType).toUpperCase()} master for your song.
                </Typography>
                <hr />
                <Box component="div" sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                    <Typography sx={{ width: "100%" }} align="left" color="white">
                        Upgrade your order with extras
                    </Typography>
                    {options.map((option, index) => (
                        <div key={index}>
                            <Box component="div" key={index} sx={{ display: "flex", border: "solid 1px white", width: "100%", padding: "0.5rem", justifyContent: "space-between" }}>
                                <Box component="div" sx={{ display: "flex", flexDirection: "column", alignItems: "left" }}>
                                    <Typography color="white" sx={{ fontSize: "0.9rem" }}>{option.title}</Typography>
                                    <Typography color="white" sx={{ fontSize: "0.8rem" }}>{option.description}</Typography>
                                    <Typography color="white" sx={{ fontSize: "0.8rem" }}>{option.price}€</Typography>
                                </Box>
                                <Controller
                                    control={control}
                                    name={`option-${option.title}`}
                                    render={({ field }) => <Checkbox onChange={field.onChange} color="secondary" sx={{ color: "white" }} />}
                                />
                            </Box>
                        </div>
                    ))}
                </Box>
            </div>
            <NeonButton
                action={handleSubmit((data) => sendContacts(data))}
                buttonText="Request Your Mastering"
                classString="btn2"
                style={{ width: "100%", height: "5%", marginTop: "0rem" }}
            /> 

            <div className="devport-infomodal-img-ctnr">
                <img src={`${import.meta.env.VITE_DEV_API}images/lwd-image.webp`} alt="" fetchPriority="high" />
            </div>
        </Box>
    )
}

export default MasteringOptionsModal