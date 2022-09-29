module.exports={
    cekUserAgent: (req, res, next) => {
        var useragent= req.headers['user-agent']
        var isiphone = useragent.match(/iphone/);
        var isandroid = useragent.match(/android/);
        if(isandroid==null && isiphone==null){
            return res.status(401).json({
                status: 401,
                message: 'Can only accessed via Iphone or Android.'
              })
          }else{
            next()
          }
    }
}

