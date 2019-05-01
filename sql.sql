insert into MuzikTur values ('Rock')

insert into Sanatci values ('İslam','False',1928,GETDATE())

insert into Album (AlbumAdi,CikisTarihi) values ('Deneme',GETDATE())

select * from Album

select SanatciId, MuzikTurId, SanatciAdi, MuzikTurId from Sanatci ,MuzikTur

select SanatciId, MuzikTurId, SanatciAdi, MuzikTur from Sanatci ,MuzikTur

"insert into Album (AlbumAdi,CikisTarihi,SanatciId,MuzikTurId) values ("+req.body.AlbumAdi+","+req.body.CikisTarihi+","+req.body.SanatciId+","+req.body.MuzikTurId+")"

select * from Album where AlbumId=9

Update MuzikTur set MuzikTur = 'Pop' where MuzikTurId = 1
