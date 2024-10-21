# Définition de la classe parent
class Vaisseau:
    # Constructeur
    def __init__(self, name, type, size):
        self.name = name
        self.type = type
        self.size = size

    def getFeatures(self):
        print("Nom :", self.name)
        print("Type :", self.type)
        print("Taille :", self.size)

# Création d'une classe enfant
class Croiseur(Vaisseau): 
    def __init__(self, name, type, size, capacity):
        super().__init__(name, type, size)
        self.capacity = capacity

    def getCapacity(self):
        print("Capacité :", self.capacity, "hommes")

    def chargerTroupes(self, capacity):
        self.capacity += capacity
        print("New capacity (+", capacity, "):", self.capacity, "hommes")

    def dechargerTroupes(self, capacity):
        self.capacity -= capacity
        print("New capacity (-", capacity, "):", self.capacity, "hommes")

# Création d'une classe enfant
class Intercepteur(Vaisseau): 
    def __init__(self, name, type, size, nb_canon):
        super().__init__(name, type, size)
        self.nb_canon = nb_canon
    
    def getCanons(self):
        print("Nombre de canons :", self.nb_canon)

    def tirer(self):
        print("Action : Tire !")

    def recharger(self):
        print("Action : Recharge !")

# Instanciation de classe
acclamator = Croiseur("Acclamator", "Croiseur", 752, 700)
corvette = Croiseur("Corvette corellienne CR90", "Croiseur", 150, 165)
xwing = Intercepteur("X-wing", "Intercepteur", 12.5, 2)
ywing = Intercepteur("Y-wing", "Intercepteur", 23, 2)

# Appel des méthodes de l'instance Acclamator de type Croiseur
acclamator.getFeatures()
acclamator.getCapacity()
acclamator.chargerTroupes(10)
acclamator.dechargerTroupes(10)
print()

# Appel des méthodes de l'instance Corvette de type Croiseur
corvette.getFeatures()
corvette.getCapacity()
corvette.chargerTroupes(15)
corvette.dechargerTroupes(2)
print()

# Appel des méthodes de l'instance X-Wing de type Intercepteur
xwing.getFeatures()
xwing.getCanons()
xwing.tirer()
xwing.recharger()
print()

# Appel des méthodes de l'instance Y-Wing de type Intercepteur
ywing.getFeatures()
ywing.getCanons()
ywing.tirer()
ywing.recharger()
print()




