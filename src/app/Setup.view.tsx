import React, { FC } from "react";
import { AppNavigation } from '../navigation';

interface ISetupProps {
}

const Setup: FC<ISetupProps> = () => {

    return (
        <>
            <AppNavigation authenticated={false} />
        </>
    )
}

export default Setup;