app.post('/api/recordinglocation',function(req,res) {
	var user = req.body.user,
		name = req.body.name,
		created = req.body.created,
		path = req.body.path;
		console.log('name: '+name+' user: '+user+' path: '+path)
			knex('audio').insert({user:user,name:name+'.wav',
				created:created,file_path:path+".wav"})
			.then(function(){
				setTimeout(function() {
				console.log(name)
			child_process 
			.exec("cd ../downloads && mv *distinctpersonalaudiofile* ../Soundstrain/public/users/"+user+" && cd ../Soundstrain/public/users/"+user+"&& mv *distinctpersonalaudiofile* "+name, function(err,stdout,stderr) {
				if(err) {
					console.log(stdout)
				console.log('failed ' + err.code)	
				return
			   		} 
				})
			},3000)
		})
			res.send()
	})