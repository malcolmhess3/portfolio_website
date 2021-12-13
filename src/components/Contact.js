import { useForm } from 'react-hook-form'
import MyAlert from "./MyAlert"
import { useState } from 'react'
import { useFormspark } from '@formspark/use-formspark'

function Contact() {
    const { register, handleSubmit, formState: {errors}} = useForm()
    const [open, setOpen] = useState(false)
    const [resOK, setResOK] = useState(true)
    const [submit, submitting] = useFormspark({formId: "p1SlCD8m"})

    const onSubmit = (data) => {
        submit(data)
          .then((res) => {
            setOpen(true)
            setResOK(true)
            console.log(res)
          })
          .catch((e)=> {
            console.log(e)
            setOpen(true)
            setResOK(false)
          })
    }

    // const onSubmit = (data) => {
    //     console.log(data)
    //     setOpen(true)
    //     setResOK(false)
    // }
    const openAlert = () => (setOpen(!open))

    return (
        <div className="contact-section">
            <h1>&#123;Contact:</h1>
            {submitting && <p>sending...</p>}
            <MyAlert open={open} onClick={openAlert} text={resOK ? "Message Sent!" : "Sorry something went wrong"} type={resOK ? "success" : "error"} />
            <div className="formControl">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="formControlBox">
                        <label>Name:</label>
                        <input {...register('name', {required: true})} />
                        {errors.name?.type === 'required' && <p>Name is required</p>}
                    </div>
                    <div className="formControlBox">
                        <label>Email:</label>
                        <input {...register('email', {required: true})} />
                        {errors.email?.type === 'required' && <p>Email is required</p>}
                    </div>
                    <div className="formControlBox">
                        <label>Message:</label>
                        <textarea rows={6} {...register('message', {required: true})} />
                        {errors.message?.type === 'required' && <p>Message is required</p>}
                    </div>
                    {submitting ? <dd>sending...</dd> : <input type="submit" />}
                </form>
            </div>
        </div>
    )
}

export default Contact
