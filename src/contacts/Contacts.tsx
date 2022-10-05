import React, {FormEvent, useState} from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/Container.module.css'
import emailjs from 'emailjs-com'

const Contacts = () => {
    const [state, setState] = useState('')
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //@ts-ignore
        emailjs.sendForm('service_w1khurw', 'template_o1iah2o', e.target, '9CjYJwGuFS2SedEBH')
            .then((result) => {
                setState('Message sent, thank you!')
            }, (error) => {
                setState(error.text);
            });
        //@ts-ignore
        e.target.reset()
    };

    return (
        <div className={`${style.contacts}`} id={'Contact me'}>
            <div className={`${styleContainer.container} ${styleContainer.listContainer}`}>
                <h2>Get in touch</h2>
                <form className={style.form} onSubmit={sendEmail}>
                    <input placeholder={'Fill in your name'} name={'name'} className={style.input}/>
                    <input placeholder={'Email'} name={'email'} className={style.input}/>
                    <textarea placeholder={'Write a message'} name={'message'} className={style.input} rows={5}/>
                    <button className={`${styleContainer.link} ${style.button}`}>Send</button>
                </form>
                <div>{state}</div>
            </div>
        </div>
    );
};

export default Contacts;