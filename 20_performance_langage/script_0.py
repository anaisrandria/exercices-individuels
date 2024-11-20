import time 

def now():
    temps_initial = time.time()
    print(temps_initial)
    print("coucou")

    temps_final = time.time()
    temps_ecoule = temps_final - temps_initial

    print("L'exécution a duré", temps_ecoule)

now()