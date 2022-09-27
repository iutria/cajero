Algoritmo sin_titulo
	//definir un array de dos dimensiones con la cantidad de billetes de cada denominacion, 
	//indicando en la pos 1 la denominacion y en la pos 2 la cantidad de billetes
	Dimension billetes[4,2];
	
	billetes[1,1] <- 100000;
	billetes[1,2] <- 17;
	
	billetes[2,1] <- 50000;
	billetes[2,2] <- 28;
	
	billetes[3,1] <- 20000;
	billetes[3,2] <- 15;
	
	billetes[4,1] <- 10000;
	billetes[4,2] <- 64;
	
	//definir array para guardar la cantidad de billetes a entregar
	Dimension Retiro[4];
	//definir variable para la cantidad de dinero que se va a retirar
	Definir cantidad_retirar, num_billetes Como Entero;
	
	//pedir la cantidad de dinero a retirar
	Escribir  "ingrese la cantidad de dinero a retirar";
	leer cantidad_retirar;
	
	//validar la cantidad a retirar
	si(cantidad_retirar <= 0) Entonces
		Escribir "cantidad no valida";
	SiNo
		AUX <- cantidad_retirar;
		Para i<-1 Hasta 4 Con Paso 1 Hacer
			num_billetes <- trunc(AUX / billetes[i,1]);
			Si (billetes[i,2]=0) Entonces
				Retiro[i] <- 0;
			SiNo
				Si (billetes[i,2] < num_billetes) Entonces
					Retiro[i] <- billetes[i,2];
				SiNo
					Retiro[i] <- num_billetes;
				Fin Si
			Fin Si
			AUX <- AUX - (Retiro[i] * billetes[i,1]);
		Fin Para
	FinSi
	Para i <- 1 Hasta 4 Con Paso 1 Hacer
		billetes[i,2] <- billetes[i,2] - Retiro[i]
	Fin Para
	Para i <- 1 Hasta 4 Con Paso 1 Hacer
		Escribir "se deben entregar ", Retiro[i], " billetes de ", billetes[i,1]
	Fin Para
	
	
FinAlgoritmo
