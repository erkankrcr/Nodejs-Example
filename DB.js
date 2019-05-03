var sql = require("mssql");
const config = {
  user: 'erkankrcr_SQLLogin_1',
  password: 'q9cer8gn5m',
  server: 'MSSQLIT5.mssql.somee.com', // You can use 'localhost\\instance' to connect to named instance
  database: 'MSSQLIT5'
}


module.exports.SanatciList = function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("select * from Sanatci", function (err, recordset) {
      if (err) console.log(err)
      sql.close();
      res.render('SanatciList', { data: recordset.recordset });
    });
  });

}
module.exports.AlbumList = function (req, res) {

  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("select * from Album", function (err, veri) {
      if (err) console.log(err) 
         sql.close();
         res.render("AlbumList",{data:veri.recordset});
    });

  });
}

module.exports.MuzikTurList = function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("select * from MuzikTur", function (err, recordset) {
      if (err) console.log(err)
      sql.close();
      res.render('MuzikTurList', { data: recordset.recordset });
    });
  });
}
module.exports.Index = function (req, res) {
  res.render("Index");
}
module.exports.MuzikTurInsert = function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("select * from MuzikTur", function (err, recordset) {
      if (err) console.log(err)
      sql.close();
      res.render('MuzikTurInsert', { data: recordset.recordset });
    });
  });
}
module.exports.MuzikTurInsertPost = function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("insert into MuzikTur values ('"+req.body.MuzikTuru+"')"
    , function (err, veri) {
      if (err) console.log(err) 
         sql.close();
         res.redirect('MuzikTurList');
    });
  
  });
}
module.exports.SanatciInsert = function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("select * from Sanatci", function (err, recordset) {
      if (err) console.log(err)
      sql.close();
      res.render('SanatciInsert', { data: recordset.recordset });
    });
  });  
}
module.exports.SanatciInsertPost = function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("insert into Sanatci values ('"+req.body.SanatciAdi+"','"+req.body.SanatciLive+"','"+req.body.SanatciDY+"',GETDATE())"
    , function (err, veri) {
      if (err) console.log(err) 
         sql.close();
         res.redirect('SanatciList');
    });
  
  });
}
module.exports.AlbumInsert = function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("select SanatciId, MuzikTurId, SanatciAdi, MuzikTur from Sanatci ,MuzikTur", function (err, recordset) {
      if (err) console.log(err)
      sql.close();
      res.render('AlbumInsert', { data: recordset.recordset });
    });
  });  
}

module.exports.AlbumInsertPost = function (req, res) {
  
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("insert into Album (AlbumAdi,CikisTarihi,SanatciId,MuzikTurId) values ('"+req.body.AlbumAdi+"','"+req.body.RelaeseDate+"','"+req.body.SanatciId+"','"+req.body.MuzikTurId+"')"
    , function (err, veri) {
      if (err) console.log(err) 
         sql.close();
         res.redirect('AlbumList');
    });
  
  });
}

module.exports.AlbumUpdate = function (req,res) {
  let sql1,sql2,sql3;
  /*
  function prms1(params) {
    return new Promise(function (resolve, reject) {
      sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query("select * from Album where AlbumId="+params
        , function (err, veri) {
          if (err) console.log(err) 
             sql.close();
             sql1 = veri.recordset;
             resolve(veri.recordset);
        });
      
      });
    });
}

function prms2(params) {
    return new Promise(function (resolve, reject) {
      sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        console.log(req.body.CikisTarihi);
        request.query("select * from Sanatci where SanatciId="+params
        , function (err, veri) {
          if (err) console.log(err) 
             sql.close();
             sql2 = veri.recordset;
             resolve(veri.recordset);
        });
      
      });
    });
}

function prms3(params) {
    return new Promise(function (resolve, reject) {
      sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        console.log(req.body.CikisTarihi);
        request.query("select * from MuzikTur where MuzikTurId="+params
        , function (err, veri) {
          if (err) console.log(err) 
             sql.close();
             sql3 = veri.recordset;
             resolve(veri.recordset);
        });
      
      });
    });
}

prms1(req.params.id).then(sonuc1 => {
  console.log(sonuc1);
  return prms2(sonuc1.SanatciId);
}).then(sonuc2 => {
  console.log(sonuc2);
  return prms3(sonuc2.MuzikTurId);
}).then(sonuc3 => {
  console.log(sonuc3);
})
*/

sql.connect(config, function (err) {
  if (err) console.log(err);
  var request = new sql.Request();
  request.query("select * from Album where AlbumId="+req.params.id , function (err, veri1) {
    if (err) console.log(err) 
    request.query("select * from Sanatci where SanatciId ="+veri1.recordset[0].SanatciId , function (err, veri2) {
      if (err) console.log(err) 
      request.query("select * from MuzikTur where MuzikTurId ="+veri1.recordset[0].MuzikTurId , function (err, veri3) {
        if (err) console.log(err) 
        request.query("select * from MuzikTur" , function (err, veri4) {
          if (err) console.log(err) 
          request.query("select * from Sanatci" , function (err, veri5) {
            if (err) console.log(err) 
            sql.close();
            res.render('AlbumUpdate',{Album:veri1.recordset , Sanatci:veri2.recordset , MuzikTur:veri3.recordset , MuzikTurList:veri4.recordset , SanatciList:veri5.recordset});
          });
        });
      });
    });   
  });

});



  
}

module.exports.AlbumUpdatePost = function (req,res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("Update Album set AlbumAdi='"+req.body.AlbumAdi+"', SanatciId="+req.body.SanatciId+", MuzikTurId ="+req.body.MuzikTurId+" where AlbumId="+req.body.AlbumId
    , function (err, veri) {
      if (err) console.log(err) 
         sql.close();
         res.redirect('AlbumList');
    });
  
  });
}
module.exports.MuzikTurUpdate = function (req,res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("select * from MuzikTur where MuzikTurId='"+req.params.id+"'", function (err, recordset) {
      if (err) console.log(err)
      sql.close();
      res.render('MuzikTurUpdate', { data:recordset.recordset });
    });
  });
}

module.exports.MuzikTurUpdatePost = function (req,res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("Update MuzikTur set MuzikTur = '"+req.body.MuzikTur+"'  where MuzikTurId = "+req.body.MuzikTurId
    , function (err) {
      if (err) console.log(err) 
         sql.close();
         res.redirect('MuzikTurList');
    });
  
  });
}

module.exports.SanatciUpdate = function (req,res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("select * from Sanatci where SanatciId='"+req.params.id+"'", function (err, recordset) {
      if (err) console.log(err)
      sql.close();
      res.render('SanatciUpdate', { data:recordset.recordset });
    });
  });
}

module.exports.SanatciUpdatePost = function (req,res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("Update Sanatci set SanatciAdi = '"+req.body.SanatciAdi+"' , SanatciYasiyormu='"+req.body.SanatciLive+"', SanatciDogumTarihi="+req.body.SanatciDY+" where SanatciId = "+req.body.SanatciId
    , function (err) {
      if (err) console.log(err) 
         sql.close();
         res.redirect('SanatciList');
    });
  
  });
}

module.exports.AlbumDelete = function (req,res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("delete  from Album where AlbumId="+req.params.id
    , function (err) {
      if (err) console.log(err) 
         sql.close();
         res.redirect('/');
    });
  });
}

module.exports.MuzikTurDelete = function (req,res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("delete from MuzikTur where MuzikTurId="+req.params.id
    , function (err) {
      if (err) console.log(err) 
         sql.close();
         res.redirect('/');
    });
  });
}

module.exports.SanatciDelete = function (req,res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("delete from Sanatci where SanatciId="+req.params.id
    , function (err) {
      if (err) console.log(err) 
         sql.close();
         res.redirect('/');
    });
  });
}

