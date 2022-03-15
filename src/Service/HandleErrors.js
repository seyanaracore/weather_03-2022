export const handleErrorMessage = (errorCod) => {
   switch (errorCod) {
      case "404": {
         return "Город не найден";
      }
      default: {
         return errorCod
      }
   }
};
