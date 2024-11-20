const ButtonTemplate = ({
    buttonText,
    buttonStyle,
    onClick,
}) => {
    return (
        <div>
            <button style={buttonStyle} onClick={onClick}>{buttonText}</button>
        </div>
    );
};

export default ButtonTemplate;
