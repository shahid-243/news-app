export const getNewsByApi = async (query = "all") => {
   let response = await fetch(` https://newsapi.org/v2/everything?q=${query}&apiKey=f91982a776ae432190c1f93d7f6ab449`)

   let data = await response.json();

   if(data.status === "ok"){
    return data.articles;
   }

   return []
   
}