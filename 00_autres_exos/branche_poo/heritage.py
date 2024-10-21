# Définition de la classe parent
class Vaisseau:
    # Constructeur
    def __init__(self, name, type, size):
        self.name = name
        self.type = type
        self.size = size

    def getFeatures(self)
        print("Caractéristiques du vaisseau :", self.name, self.type, self.size)


# Création d'une classe enfant
class Croiseur(Vaisseau): 
    def __init__(self, name, type, size, capacity)
        self.capacity = capacity

    def chargerTroupes(self, capacity)
        self.capacity += 1

    def dechargerTroupes(self, capacity)
        self.capacity -= 1


# Création d'une classe enfant
class Intercepteur(Vaisseau): 
    def __init__(self, name, type, size, nb_canon)
        self.canon = canon

    def tirer(self)
        print("Tire !")

    def recharger(self)
        print("Recharge !")


# Instanciation de classe
acclamator = Croiseur("Acclamator", "Croiseur", 752, 700)
corvette = Croiseur("Corvette corellienne CR90", "Croiseur", 150, 165)

acclamator.getFeatures()





