import axios, {  AxiosInstance, AxiosResponse } from "axios";

export function useApi() {
  // const headers = { 'Access-Control-Allow-Origin': '*' };

  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_URL,
    // headers
  });

  api.interceptors.request.use((config) => {
    //Ajouter le Token dans le header
    const token = localStorage.getItem("authToken");
    token ? (config.headers["Authorization"] = "Bearer " + token) : "";
    return config;
  });


  api.interceptors.response.use(

    (response:AxiosResponse) => response,

    async (error:any) => {

        if(error.response && error.response.status === 401) { 
          
            // recupere la requete d'origine (getAllUser)

            const originalRequest = error.config
            // pour éviter boucle infinie du refreshToken
            if ( originalRequest && !originalRequest._retry) {
                originalRequest._retry = true;
            }
            
            // Récupérer le RefreshToken dans le localstorage
            const refreshToken = localStorage.getItem('refreshToken');

            if (refreshToken) { 
                // On va l'ajouter le token dans le Header
                try {
                    // const result = await getNewRefreshToken(refreshToken);
                    const result = await axios.get(`${import.meta.env.VITE_LOCAL_URL}/auth/refresh-token`, {headers: {"Authorization":'Bearer ' + refreshToken}} )

                    localStorage.setItem('authToken', result.data.data.authToken);
                    localStorage.setItem('refreshToken', result.data.data.refreshToken);

                    originalRequest.headers['Authorization'] = 'Bearer ' + result.data.data.authToken;

                    return axios(originalRequest);

                } catch (error) {
                    location.href = "/";
                    
                  }
                  
                } else {
                location.href = "/";
            }

        }

        if(error.response && error.response.status === 500) {

        }
        
        return Promise.reject(error)
    }
)

  return api;
}
