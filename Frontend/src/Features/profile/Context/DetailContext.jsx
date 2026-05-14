import { createContext, useState } from "react";

export const DetailProviderContext = createContext();

export function DetailContext({children}){

    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState(null);

    return(

        <DetailProviderContext.Provider
        value={{
            error,
            setError,
            loading,
            setLoading,
            result,
            setResult
        }}
        >

            {children}

        </DetailProviderContext.Provider>

    )
}