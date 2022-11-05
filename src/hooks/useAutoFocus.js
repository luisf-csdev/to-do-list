import { useRef, useEffect } from "react";

const useAutoFocus = (props) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (props.show) {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    }, [props.show]);

    return inputRef;
};

export default useAutoFocus;