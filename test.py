def suma_divisores(num):
    suma = 0
    for i in range(1, num):
        if num % i == 0:
            suma += i
    return suma

def numeros_perfectos_en_rango(inicio, fin):
    numeros_perfectos = []
    for num in range(inicio, fin + 1):
        if suma_divisores(num) == num:
            numeros_perfectos.append(num)
    return numeros_perfectos

inicio = int(input("Ingrese el inicio del rango: "))
fin = int(input("Ingrese el final del rango: "))

if inicio >= fin:
    print("Error: Rango invalido")
else:
    print(f"Los números perfectos en el rango [{inicio}, {fin}] son:")
    print(numeros_perfectos_en_rango(inicio, fin))
