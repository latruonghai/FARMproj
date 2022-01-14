import { useEffect, useState } from 'react';

const useModal = () =>{
    const [isShowing, setShowing] = useState(false);

    function toggle(){
        setShowing(!isShowing);
    }

    return {
        isShowing,
        toggle
    }
}

export default useModal;