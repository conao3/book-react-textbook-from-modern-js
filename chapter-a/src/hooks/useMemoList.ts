import { useCallback, useState } from 'react';

export const useMemoList = () => {
    const [memos, setMemos] = useState<string[]>([]);
    const addTodo = useCallback((text: string) => {
        setMemos((memos) => [...memos, text]);
    }, [memos]);

    const deleteTodo = useCallback((index: number) => {
        setMemos((memos) => {
            const newMemos = [...memos];
            newMemos.splice(index, 1);
            return newMemos;
        });
    }, [memos]);

    return { memos, addTodo, deleteTodo };
}
