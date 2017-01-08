var db= openDatabase("clase9","1.0","Esto es una base de datos",5*1024*1024);
var t_usuarios_insert = "insert into usuarios (id,mail,nombre,contrasena)values(?,?,?,?)";
var t_usuarios_creation = "CREATE TABLE usuarios(id real uniqute, mail text uniqute, nombre text ,contrasena text)";
var t_usuarios_select = "select * from usuarios where mail= ? and contrasena = ?;"

var inicializacion = function(){
		db.transaction(function(tx){
		tx.executeSql(t_usuarios_creation,[],function(tx,result){
			 console.log("Se creo la tabla sin problemas");
			},function(tx,error){
				console.log("Hubo un Error: ", error.message);
			});

         });


		db.transaction(function(tx){
		tx.executeSql(t_usuarios_insert,[1,'falconsoft.3d@gmail.com','usuario','pass'],function(tx,result){
			 console.log("Se inserto sin problemas");
			},function(tx,error){
				console.log("Hubo un Error: ", error.message);
			});

         });


}


var select = function(mail,password){

	db.transaction(function(tx){
		tx.executeSql("select * from usuarios where mail=? and contrasena=?",[mail,password],function(tx,result){
		
			 if (result.rows.length>=1)
			 {
			 	location.assign("http://localhost:8100/#/bienvenidos")
			 }
			 else{
			 	console.log("No tiene Acceso");
			 }


			},function(tx,error){
				console.log("Hubo un Error: ", error.message);
			});

         });

}