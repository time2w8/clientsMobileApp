import React from "react";
import Setup from "./Setup.view";
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
    return (
        <>
            <PaperProvider>
                <Setup />
            </PaperProvider>
        </>
    )
}

export default App;