export const register = async(dispatch, formData) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/users`, {
        method: "POST",
        body: JSON.stringify(formData),
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const parsedResponse = await response.json();
    if(parsedResponse.status === 200){
        dispatch({
            type: "REGISTER",
            payload: parsedResponse.data
        })
    }else{
        //TODO: REGISTER_FAILURE
    }
}