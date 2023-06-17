import {ChangeEvent, useState} from "react";

interface EditableLabelProps {
    label: string
    onChangeLabel:(newLabel:string)=>void
}

export function EditableLabel({label, onChangeLabel}: EditableLabelProps) {
    const [editState, setEditState] = useState(false)
    const [changeLabel, setChangeLabel] = useState('')
    const onDoubleClick = () => {
        setEditState(true)
        setChangeLabel(label)
    }
    const onBlur = () => {
        setEditState(false)
        onChangeLabel(changeLabel)
        setChangeLabel(label)
    }

    const onChangedLabel = (e: ChangeEvent<HTMLInputElement>) => {
        setChangeLabel(e.target.value)
    }

    return editState
        ? <input autoFocus value={changeLabel} onBlur={onBlur} onChange={onChangedLabel}/>
        : <label onDoubleClick={onDoubleClick}>{label}</label>
}