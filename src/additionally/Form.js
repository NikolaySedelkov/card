import { useState, useRef } from "react";

function Form({func}){
    const [form, setForm] = useState({
        title: '',
        description: ''
    });
    const [checkbox, setCheckbox] = useState(true);
    const handleClick = () => {
        let obj = {};
        Object.assign(obj, form);
        if(!checkbox) {
            delete obj.img;
            setForm(obj);
        }
        setCheckbox(!checkbox);
    }
    const fileRef = useRef();
    const handleNameChange = ({target}) => {
        let {name, value} = target;
        setForm(form => ({...form, [name]: value}));
    }
    const handleFileChange = ({target}) => {
        let {name, value} = target;
        setForm(form => ({...form, [name]: URL.createObjectURL(fileRef.current.files[0])}));
    }
    const handleSubmit = evt =>{
        evt.preventDefault();
        func(form);
        setForm({
            title: '',
            description: ''
        })
    }
    return (
        <form id="conteiner__form">
            <label htmlFor="inputTitle">Название: </label>
            <input id="inputTitle" name="title" type="text" value={form.title} onChange={handleNameChange}/> <br/>
            <label htmlFor="inputDescription">Описание: </label>
            <input id="inputDescription" name="description" type="text" value={form.description} onChange={handleNameChange}/> <br/>
            <label>Добавлять изображение: </label><input type="checkbox" value={checkbox} onClick={handleClick}/> <br/>
            {!checkbox?(
               <span><input name="img" type="file" ref={fileRef} onChange={handleFileChange}/><br/></span>
            ):null}
            <button onClick={handleSubmit}>Добавить</button>
        </form>
    )
}


export default Form;