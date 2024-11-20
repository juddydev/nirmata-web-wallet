const InputTemplate = ({

    labelText,
    labelStyle,
    inputStyle,
    placeholder,
    onChange,
    value,
    type

}) => {
    return (
        <div>
            <p>
                <label style={labelStyle}>{labelText}</label>
            </p>
            <input type={type} className={`${inputStyle} border-2 border-green-300 rounded-md`} placeholder={placeholder} onChange={onChange} value={value} />
        </div>
    );
};

export default InputTemplate;
