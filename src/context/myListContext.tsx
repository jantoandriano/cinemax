import { createContext, useContext, useReducer } from 'react';

const MyListContext = createContext(null);

const MyListDispatchContext = createContext(null);

export function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );

    return (
        <MyListContext.Provider value={tasks}>
            <MyListDispatchContext.Provider value={dispatch}>
                {children}
            </MyListDispatchContext.Provider>
        </MyListContext.Provider>
    );
}

export function useTasks() {
    return useContext(MyListContext);
}

export function useTasksDispatch() {
    return useContext(MyListDispatchContext);
}

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            let storedNames = localStorage.getItem("mylist");
            let listRes = JSON.parse(storedNames as string);
            const temp = [...listRes, action.payload]
            localStorage.setItem("mylist", JSON.stringify(temp));
            return [...tasks, action.payload];
        }
        case 'remove': {
            let storedNames = localStorage.getItem("mylist");
            let listRes = JSON.parse(storedNames as string);
            const res = listRes.filter(val => val.imdbID !== action.payload)            
            localStorage.setItem("mylist", JSON.stringify(res));
            window.location.reload();
            return [...tasks, res];
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialTasks = [

];
