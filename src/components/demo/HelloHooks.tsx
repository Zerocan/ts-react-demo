import React, {useState, useEffect} from 'react';
import { Button } from 'antd';

interface Greeting {
    name: string;
    firstName?: string;
    lastName?: string;
}

const HelloHooks = (props: Greeting) => {
    const [count, setCount] = useState(1);
    const [text, setText] = useState<string | null>(null);
    useEffect(() => {
        if (count > 5) {
            setText('休息一下')
        }
    }, [count])
    
    return (
        <>
            <p>你点击了{count}次 {text}</p>
            <Button onClick={() => {setCount(count + 1);}}>HelloClass {props.name}</Button>
        </>
    )
}

export default HelloHooks;