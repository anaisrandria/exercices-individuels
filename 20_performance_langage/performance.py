import time

def now():
    return time.time()

temps_initial = now()
print("Coucou")

temps_final = now()
temps_ecoule = temps_final - temps_initial

print(f"L'exécution a duré {temps_ecoule} millisecondes.")