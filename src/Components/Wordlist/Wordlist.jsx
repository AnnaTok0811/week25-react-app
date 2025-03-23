import { useState } from 'react'
import style from './Wordlist.module.scss'

export default function Wordlist({ item }) {
    console.log(item);
    const {word, translate, transcription, tag } = item;

    const [isEditMode, setIsEditMode] = useState(false);

    const [currentWordValue, setCurrentWordValue] = useState(word);
    const [wordValue, setWordValue] = useState(currentWordValue);

    const [currentTranslateValue, setCurrentTranslateValue] = useState(translate);
    const [translateValue, setTranslateValue] = useState(currentTranslateValue);


    const [isDeleted, setIsDeleted] = useState(false);

    const handleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    const handleCancel = () => {
        setIsEditMode(!isEditMode);
    }

    const onSave = () => {
        setCurrentWordValue(wordValue)
        setIsEditMode(!isEditMode);
        
    }

    const onSaveTranslate = () => {
        setCurrentTranslateValue(translateValue)
        setIsEditMode(!isEditMode);}

    const onDelete = () => {
        setIsDeleted(true)
    }
    const saveCancelBtns = () => {
        return (
            <>
                <input value={wordValue} onChange={(event)=>setWordValue(event.target.value)} className={style.input} placeholder='Введите слово' defaultValue={wordValue}></input>
                <input value={translateValue} onChange={(event)=>setTranslateValue(event.target.value)} className={style.input} placeholder='Введите перевод' defaultValue={translateValue}></input>
                <input className={style.input} placeholder='Введите транскрипцию' defaultValue={transcription}></input>
                <input className={style.input} placeholder='Введите категорию' defaultValue={tag}></input>
                <div className={style.buttons}>
                    <button onClick={'onSave();onSaveTranslate()'} className={style.btn}>Сохранить</button>
                    <button className={style.btn} onClick={handleCancel}>Отмена</button>
                </div>
            </>
        )
    }

    // 

    const editDeleteBtns = () => {
        return (
            <>
                <div className={style.item}>{currentWordValue}</div>
                <div className={style.item}>{translate}</div>
                <div className={style.item}>{transcription}</div>
                <div className={style.item}>{tag}</div>
                <div className={style.buttons}>
                    <button className={style.btn} onClick={handleEditMode}>Редактировать</button>
                    <button onClick={onDelete} className={style.btn} >Удалить</button>
                </div>
            </>
        )
    }

    return (
        <>
        {
            isDeleted ? null :  
            <div className={style.container}>
            {isEditMode ? saveCancelBtns() : editDeleteBtns()}
        </div >
        }
       </>
    )
}
