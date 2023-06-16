import axios from "axios"
const API_URL = 'https://api.scripture.api.bible/v1'
const api_key = 'bcede2fb4b6448b30a2118b0a1c0f157	'

//get info de las biblias 
export const getBiblies = async () => {
    try {
      const response = await axios.get(`${API_URL}/bibles`, {
        headers: {
          'api-key': api_key
        }
      });
      return response.data;
    } catch (error) {
    
      console.error('No hay conexion Gerson');
      throw error;
    }
  };
  export const getcapitulos = async () => { 
    try {
        const response = await axios.get(`${API_URL}/bibles/592420522e16049f-01/books?include-chapters=true&include-chapters-and-sections=true`, {
          headers: {
            'api-key': api_key
          }
        });
        return response.data;
      } catch (error) {
      
        console.error('No hay conexion Gerson');
        throw error;
      }
    };

  // importando la biblia RVR 1960 
  const API_RVR = "https://www.abibliadigital.com.br/api/verses"

  export const getBiblieRvR = async () => {
    try { 
        const response = await axios.get(`${API_RVR}/rvr`)
        return response.data;
    }
    catch (error) {
    
        console.error('No hay conexion Gerson');
        throw error;
      }
  }