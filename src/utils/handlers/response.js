class ResponseHandler {

    successResponse({res,message,data=null,err=null}){
        if(err)console.log(err);
        return res.status(200).json({
            status: 'true',
            message,
            data,
        });
    }

    createdResponse = ({res, message, data=null,err=null}) => {
        if(err)console.log(err);
        return res.status(201).json({
            status:'success',
            message, 
            data,
        });
    };
      
    badRequestResponse = ({res, message, data=null,err=null}) => {
        if(err)console.log(err);
        return res.status(400).json({
            status:'error',
            message, 
            data : null,
        });
    };
      
    unauthorizedResponse = ({res, message, data=null,err=null}) => {
        if(err)console.log(err);
        return res.status(401).json({
            status:'error',
            message, 
            data:null,
        });
    };
      
    forbiddenResponse = ({res, message, data=null,err=null}) => {
        if(err)console.log(err);
        return res.status(403).json({
            status:'error',
            message, 
            data:null,
        });
    };
      
    notFoundResponse = ({res, message, data=null,err=null}) => {
        if(err)console.log(err);
        return res.status(404).json({
            status:'error',
            message, 
            data,
        });
    };
      
    serverErrorResponse = ({res, message, data=null,err=null}) => {
        if(err)console.log(err);
        return res.status(500).json({
            status:'error',
            message, 
            data:null,
        });
    };

}

module.exports = {
    responseHandler : new ResponseHandler(),
}