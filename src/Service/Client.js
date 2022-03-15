class Api {
   async __request(url, method) {
      try {
         const request = await fetch(url, { method });
         const response = await request.json();

         if (response.message) throw response;

         return response;
      } catch (error) {
         throw new Error(error.message);
      }
   }

   async get(url) {
      return await this.__request(url, "GET");
   }
}

export default new Api();
