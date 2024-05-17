export class JsonResponse {

    error(message = 'Une erreur s\'est produite lors de l\'exécution de la requête.', data = null) {
        return { 
            message : message,
            data : data
        }
    }
        
    success(message: any = 'Succès.', data: any = null) {
        return { 
            message : message,
            data : data
        }
    }  
}