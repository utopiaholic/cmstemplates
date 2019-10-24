import React from 'react';

 export const PageManager = React.createContext();

 const PageManagerProvider = () => {
    var page = {
        currentPage : "Import"
    };
    return (
        <PageManager.Provider value={page}>
            
        </PageManager.Provider>
    );

}

export default PageManagerProvider;