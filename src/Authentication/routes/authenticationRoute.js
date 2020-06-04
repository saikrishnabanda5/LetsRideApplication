import React from 'react';
import {Route,Redirect} from "react-router-dom";
import {observer,inject} from 'mobx-react';

const ProtectedRoute = inject('authStore')(
    observer(({
        component:Component,path,authStore,...rest
    })=>{
        const {accessToken} = authStore;
        return <Route 
            {...rest}
            render={ 
             props=>accessToken!==undefined ?(<Component />) : ( <Redirect to ={{ pathname : "/login/v1/"}} />)
            }
               />;
        })
    
);

export default ProtectedRoute;
